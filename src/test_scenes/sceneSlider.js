import React from 'react';
import { AnchorPoint, LinearLayout, Slider, Text, View } from 'magic-script-components';

class SceneSlider extends React.Component {
  constructor(props) {
		super(props);
		this.state = { defaultSliderValue: 0.0, userDefinedSliderOneValue: 7.5, userDefinedSliderTwoValue: 0.0 }
	}

  onDefaultSliderChanged = (event) => {
    this.setState({ defaultSliderValue: event.Value });
  }

  onUserDefinedSliderOneChanged = (event) => {
    this.setState({ userDefinedSliderOneValue: event.Value });
  }

  onUserDefinedSliderTwoChanged = (event) => {
    this.setState({ userDefinedSliderTwoValue: event.Value });
  }

  render() {
    const { defaultSliderValue, userDefinedSliderOneValue, userDefinedSliderTwoValue } = this.state;
    return (
      <LinearLayout
        anchorPoint={AnchorPoint.topCenter}
        defaultItemPadding={[0.075, 0, 0, 0]}
        position={this.props.position}
      >
        <Text fontSize={0.075} >Default slider</Text>
        
        <Text fontSize={0.05} textColor={[0.75,0.5,0.25,1]} >{'Current value: ' + defaultSliderValue.toFixed(2)}</Text>
        <Slider onSliderChanged={this.onDefaultSliderChanged} value={defaultSliderValue} width={1} />
        
        <Text fontSize={0.075}>User configured sliders</Text>

        <Text fontSize={0.05} textColor={[0.75,0.5,0.25,1]}>{'Current value: ' + userDefinedSliderOneValue.toFixed(2)}</Text>
        <Slider
          value={userDefinedSliderOneValue}
          min={5}
          max={10}
          minLabel={'-'}
          maxLabel={'+'}
          width={0.95}
          height={0.06}
          onSliderChanged={this.onUserDefinedSliderOneChanged}
        />

        <Text fontSize={0.05} textColor={[0.75,0.5,0.25,1]} >{'Current value: ' + userDefinedSliderTwoValue.toFixed(2)}</Text>
        <Slider
          value={userDefinedSliderTwoValue}
          min={0}
          max={12}
          minLabel={'min'}
          maxLabel={'max'}
          width={0.75}
          height={0.08}
          onSliderChanged={this.onUserDefinedSliderTwoChanged}
        />
      </LinearLayout>
    );
  }
}

export { SceneSlider };
