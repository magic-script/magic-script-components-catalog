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

  renderHintLine(rect) {
    const horizontalLinePoints = [[0.16, 0, 0], [0.5, 0, 0]];
    const x2 = rect.right;
    const x1 = Math.max(x2 + 0.04, 0.35);
    const y1 = -0.1;
    const y2 = Math.min(y1, rect.top - 0.25 * (rect.top - rect.bottom));
    const layerMarkerLinePoints = [[0.4, 0, 0], [x1, -0.1, 0], [x2, y2, 0]];
    return (
      <view>
        <line color={[1,1,1,0.35]} points={horizontalLinePoints} />
        <line color={[1,1,1,0.35]} points={layerMarkerLinePoints} />
      </view>
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
    const rect = { 
      left: -0.5 * width,
      right: 0.5 * width,
      top: -0.05, 
      bottom: -0.05 - height
    };
    return (
      <view localPosition={this.props.localPosition}>
        <text  alignment={'bottom-left'} localPosition={[-0.5, 0.8, 0]} text={'• Standalone element:'} textSize={0.08} />
        <view localPosition={[0, 0.65, 0]}>
          {this.renderElement({})}
        </view>
        
        <text alignment={'bottom-left'} localPosition={[-0.5, 0.4, 0]} text={'• Element in fixed rect layout:'} textSize={0.08} />
        <rectLayout
          alignment={'top-center'}
          contentAlignment={'center-center'}
          debug
          localPosition={[0, 0.35, 0]}
          padding={padding}
        >
          {this.renderElement({})}
        </rectLayout>

        <text alignment={'bottom-left'} localPosition={[-0.5, 0.0, 0]} text={'• Element in resizable rect layout:'} textSize={0.08} />
        <rectLayout
          alignment={'top-center'}
          contentAlignment={'center-center'}
          debug
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

        <text alignment={'bottom-left'} localPosition={[-0.5, -0.6, 0]} text={`Scale: ${scale.toPrecision(2)}`} textSize={0.08} />
        <slider 
          localPosition={[0, -0.7, 0]}
          value={scale}
          min={0.3}
          max={2.0}
          minLabel={"scale: "}
          width={1.0}
          height={0.06}
          onSliderChanged={this.onScaleSliderChanged}
        />

        {this.renderHintLine(rect)}
      </view>
    );
  }
}

export { SceneLayout };
