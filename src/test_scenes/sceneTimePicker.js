import React from "react";
import { Alignment, AnchorPoint, LinearLayout, Orientation, TimeFormat, TimePicker, View } from "magic-script-components";

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
      <LinearLayout
        position={this.props.position}
        anchorPoint={AnchorPoint.bottomCenter}
        columns={1}
        defaultItemAlignment={Alignment.centerLeft}
        defaultItemPadding={[0.07, 0, 0.07, 0]}
        orientation={Orientation.vertical}
      >
        <TimePicker
          label={"Default time format (HH:MM:SS)"}
          onTimeChanged={this.onTimeChanged}
          onTimeConfirmed={this.onTimeConfirmed}
        />
        <TimePicker
          label={"Custom time format (HH:MM p)"}
          timeFormat={TimeFormat.hhmmp}
          onTimeChanged={this.onTimeChanged}
          onTimeConfirmed={this.onTimeConfirmed}
        />
      </LinearLayout>
    );
  }
}

export { SceneTimePicker };
