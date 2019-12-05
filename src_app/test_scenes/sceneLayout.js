import React from 'react';

const ElementSize = { width: 0.4, height: 0.2 };

class SceneLayout extends React.Component {

  constructor(props) {
		super(props);
		this.state = { scale: 1.0 }
  }
  
  onScaleSliderChanged = (event) => {
    this.setState({ scale: event.Value });
  }

  renderElement({ roundness = 0.5, size = ElementSize, text = 'Button' }) {
    return (
      <button
        enabled={false}
        roundness={roundness}
				textColor={[0,1,0,1]}
				textSize={0.08}
				width={size.width}
				height={size.height}
      >{text}</button>
    );
  }

  render() {
    const { scale } = this.state;
    const padding = [0.02, 0.02, 0.02, 0.02]; // top, right, bottom, left
    const hPadding = padding[1] + padding[3];
    const vPadding = padding[0] + padding[2];
    const width = ElementSize.width * scale + hPadding;
    const height = ElementSize.height * scale + vPadding;
    const maxScale = 2.0;
    const maxRectSize = { width: maxScale * ElementSize.width + hPadding, height: maxScale * ElementSize.height + vPadding };
    return (
      <view localPosition={this.props.localPosition}>
        <view key={'standalone_element'} localPosition={[0, 0.9, 0]}>
          <text  alignment={'bottom-left'} localPosition={[-0.5, 0, 0]} text={'• Standalone element:'} textSize={0.08} />
          <view localPosition={[0, -0.15, 0]}>
            {this.renderElement({})}
          </view>
        </view>
        
        <view key={'fixed_rect'} localPosition={[0, 0.5, 0]}>
          <text alignment={'bottom-left'} localPosition={[-0.5, 0.0, 0]} text={'• Element in fixed rect layout:'} textSize={0.08} />
          <rectLayout
            alignment={'top-center'}
            contentAlignment={'center-center'}
            localPosition={[0, -0.05, 0]}
            padding={padding}
          >
            {this.renderElement({})}
          </rectLayout>
        </view>

        <view key={'resizable_rect'} localPosition={[0, 0.1, 0]}>
          <text alignment={'bottom-left'} localPosition={[-0.5, 0.0, 0]} text={'• Element in resizable rect layout:'} textSize={0.08} />
          <rectLayout
            alignment={'top-center'}
            contentAlignment={'center-center'}
            localPosition={[0, -0.05, 0]}
            padding={padding}
            height={height}
            width={width}
          >
            {this.renderElement({})}
          </rectLayout>
          <rectLayout
            alignment={'top-center'}
            contentAlignment={'center-center'}
            localPosition={[0, -0.05, 0]}
            height={height}
            width={width}
          >
            {this.renderElement({ roundness: 0, size: maxRectSize, text: '' })}
          </rectLayout>
        </view>

        <view key={'slider'} localPosition={[0, -0.6, 0]}>
          <text alignment={'bottom-left'} localPosition={[-0.5, 0, 0]} text={`Scale: ${scale.toFixed(2)}`} textSize={0.08} />
          <slider 
            localPosition={[0, -0.1, 0]}
            value={scale}
            min={0.3}
            max={2.0}
            minLabel={"scale: "}
            width={1.0}
            height={0.06}
            onSliderChanged={this.onScaleSliderChanged}
          />
        </view>
      </view>
    );
  }
}

export { SceneLayout };
