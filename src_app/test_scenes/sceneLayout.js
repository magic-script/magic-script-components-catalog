import React from 'react';

const elementSize = { width: 0.4, height: 0.2 };

class SceneLayout extends React.Component {

  constructor(props) {
		super(props);
		this.state = { scale: 1.0 }
  }
  
  onScaleSliderChanged = (event) => {
    this.setState({ scale: event.Value });
  }

  renderElement() {
    return (
      <button
        enabled={false}
        roundness={0.5}
				textColor={[0,1,0,1]}
				textSize={0.08}
				width={elementSize.width}
				height={elementSize.height}
			>Button</button>
    );
  }

  render() {
    const { scale } = this.state;
    const padding = [0.02, 0.02, 0.02, 0.02]; // top, right, bottom, left
    const width = elementSize.width * scale + (padding[1] + padding[3]);
    const height = elementSize.height * scale + (padding[0] + padding[2]);
    return (
      <view localPosition={this.props.localPosition}>
        <text  alignment={'bottom-left'} localPosition={[-0.5, 0.8, 0]} text={'• Standalone element:'} textSize={0.08} />
        <view localPosition={[0, 0.65, 0]}>
          {this.renderElement()}
        </view>
        
        <text  alignment={'bottom-left'} localPosition={[-0.5, 0.4, 0]} text={'• Element in fixed rect layout:'} textSize={0.08} />
        <rectLayout
          alignment={'center-center'}
          contentAlignment={'center-center'}
          debug
          localPosition={[0, 0.25, 0]}
          padding={padding}
        >
          {this.renderElement()}
        </rectLayout>

        <text  alignment={'bottom-left'} localPosition={[-0.5, 0.0, 0]} text={'• Element in resizable rect layout:'} textSize={0.08} />
        <rectLayout
          alignment={'center-center'}
          contentAlignment={'center-center'}
          debug
          localPosition={[0, -0.15, 0]}
          padding={padding}
          height={height}
          width={width}
        >
          {this.renderElement()}
        </rectLayout>

        <slider 
          localPosition={[0, -0.7, 0]}
          value={1.0}
          min={0.1}
          max={2.0}
          minLabel={"scale: "}
          width={1.0}
          height={0.06}
          onSliderChanged={this.onScaleSliderChanged}
        />
      </view>
    );
  }
}

export { SceneLayout };
