import React from "react";
import { Text } from "magic-script-components";

class SceneSlider extends React.Component {
  constructor(props) {
		super(props);
		this.state = { defaultSliderValue: 0.0, userDefinedSliderOneValue: 0.0, userDefinedSliderTwoValue: 0.0 }
	}


  onDefaultSliderChanged = (event) => {
    console.log(event)
    var { defaultSliderValue } = this.state;
    defaultSliderValue = event.value
    this.setState({ defaultSliderValue });
  }

  onUserDefinedSliderOneChanged = (event) => {
    console.log(event)
    var { userDefinedSliderOneValue } = this.state;
    userDefinedSliderOneValue = event.value
    this.setState({ userDefinedSliderOneValue });
  }

  onUserDefinedSliderTwoChanged = (event) => {
    console.log(event)
    var { userDefinedSliderTwoValue } = this.state;
    userDefinedSliderTwoValue = event.value
    this.setState({ userDefinedSliderTwoValue });
  }

  render() {
    const { defaultSliderValue, userDefinedSliderOneValue, userDefinedSliderTwoValue } = this.state;
    return (
      <view localPosition={this.props.localPosition}>
        <gridLayout
          alignment={"top-center"}
          columns={1}
          defaultItemPadding={[0.075, 0, 0, 0]}
          localPosition={[0.0, 1.0, 0.0]}
        >
          <text alignment={"center-center"} textSize={0.075} >
            Default slider
          </text>
          <text alignment={"center-center"} textSize={0.05} textColor={[0.75,0.5,0.25,1]} text={"Current value: " + defaultSliderValue.toPrecision(2)}/>
          <slider onSliderChanged={this.onDefaultSliderChanged} value={defaultSliderValue} />
          <text alignment={"center-center"} textSize={0.075}>
            User configured sliders
          </text>
          <text alignment={"center-center"} textSize={0.05} textColor={[0.75,0.5,0.25,1]} text={"Current value: " + userDefinedSliderOneValue.toPrecision(2)}/>
          <slider
            value={userDefinedSliderOneValue}
            min={0}
            max={10}
            minLabel={"-"}
            maxLabel={"+"}
            width={0.95}
            height={0.06}
            onSliderChanged={this.onUserDefinedSliderOneChanged}
          />
          <text alignment={"center-center"} textSize={0.05} textColor={[0.75,0.5,0.25,1]} text={"Current value: " + userDefinedSliderTwoValue.toPrecision(2)}/>
          <slider
            value={userDefinedSliderTwoValue}
            min={0}
            max={12}
            minLabel={"min"}
            maxLabel={"max"}
            width={0.75}
            height={0.08}
            onSliderChanged={this.onUserDefinedSliderTwoChanged}
          />
        </gridLayout>
      </view>
    );
  }
}

export { SceneSlider };
