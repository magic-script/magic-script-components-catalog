import React from "react";
import { View, LinearLayout, TimePicker } from "magic-script-components";

class SceneTimePicker extends React.Component {
  onTimeChanged = event => {
    // event.Time, event.TimeString
    console.log("onTimeChanged event received: ", event);
  };

  onTimeConfirmed = event => {
    // event.Time, event.TimeString
    console.log("onTimeConfirmed event received: ", event);
  };

  render() {
    return (
      <View position={this.props.position}>
        <LinearLayout
          position={[0, 0.5, 0]}
          anchorPoint={"center-center"}
          columns={1}
          defaultItemAlignment={"center-left"}
          defaultItemPadding={[0.07, 0, 0.07, 0]}
          orientation={"vertical"}
        >
          <TimePicker
            label={"Default time format (HH:MM:SS)"}
            onTimeChanged={this.onTimeChanged}
            onTimeConfirmed={this.onTimeConfirmed}
          />
          <TimePicker
            label={"Custom time format (HH:MM p)"}
            timeFormat={"HH:MM p"}
            onTimeChanged={this.onTimeChanged}
            onTimeConfirmed={this.onTimeConfirmed}
          />
        </LinearLayout>
      </View>
    );
  }
}

export { SceneTimePicker };
