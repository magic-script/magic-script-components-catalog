import React from 'react';
import { Alignment, AnchorPoint, Button, RectLayout, Slider, Text, View } from 'magic-script-components';

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
      <Button
        enabled={false}
        roundness={roundness}
				textColor={[0,1,0,1]}
				fontSize={0.08}
				width={size.width}
				height={size.height}
      >{text}</Button>
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
      <View position={this.props.position}>
        <View key={'standalone_element'} position={[0, 0.9, 0]}>
          <Text anchorPoint={AnchorPoint.bottomLeft} position={[-0.5, 0, 0]} fontSize={0.08}>• Standalone element:</Text>
          <View position={[0, -0.15, 0]}>
            {this.renderElement({})}
          </View>
        </View>
        
        <View key={'fixed_rect'} position={[0, 0.5, 0]}>
          <Text anchorPoint={AnchorPoint.bottomLeft} position={[-0.5, 0.0, 0]} fontSize={0.08}>• Element in fixed rect layout:</Text>
          <RectLayout
            anchorPoint={AnchorPoint.topCenter}
            alignment={Alignment.centerCenter}
            position={[0, -0.05, 0]}
            padding={padding}
          >
            {this.renderElement({})}
          </RectLayout>
        </View>

        <View key={'resizable_rect'} position={[0, 0.1, 0]}>
          <Text anchorPoint={AnchorPoint.bottomLeft} position={[-0.5, 0.0, 0]} fontSize={0.08} >• Element in resizable rect layout:</Text>
          <RectLayout
            anchorPoint={AnchorPoint.topCenter}
            alignment={Alignment.centerCenter}
            position={[0, -0.05, 0]}
            height={height}
            width={width}
          >
            {this.renderElement({})}
          </RectLayout>
          <RectLayout
            anchorPoint={AnchorPoint.topCenter}
            alignment={Alignment.centerCenter}
            position={[0, -0.05, 0]}
            height={height}
            width={width}
          >
            {this.renderElement({ roundness: 0, size: maxRectSize, text: '' })}
          </RectLayout>
        </View>

        <View key={'slider'} position={[0, -0.6, 0]}>
          <Text anchorPoint={AnchorPoint.bottomLeft} position={[-0.5, 0, 0]} fontSize={0.08}>{`Scale ${scale.toFixed(2)}`}</Text>
          <Slider 
            position={[0, -0.1, 0]}
            value={scale}
            min={0.3}
            max={2.0}
            minLabel={"scale: "}
            width={1.0}
            height={0.06}
            onSliderChanged={this.onScaleSliderChanged}
          />
        </View>
      </View>
    );
  }
}

export { SceneLayout };
