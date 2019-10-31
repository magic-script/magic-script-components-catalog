import React from "react";

class SceneTimePicker extends React.Component {
  onTimeChanged = event => {
    console.log("onTimeChanged event received: ", event);
  };

  onTimeConfirmed = event => {
    console.log("onTimeConfirmed event received: ", event);
  };

  render() {
    return (
      <view localPosition={this.props.localPosition}>
        <linearLayout
          localPosition={[0, 0.5, 0]}
          alignment={"center-center"}
          columns={1}
          defaultItemAlignment={"center-center"}
          defaultItemPadding={[0.07, 0, 0.07, 0]}
          orientation={"vertical"}
        >
          <timePicker
            label={"Default time format (HH:MM:SS)"}
            onTimeChanged={this.onTimeChanged}
            onTimeConfirmed={this.onTimeConfirmed}
          />
                    <timePicker
            label={"Custom time format (HH:MM p)"}
            timeFormat={"HH:MM p"}
            onTimeChanged={this.onTimeChanged}
            onTimeConfirmed={this.onTimeConfirmed}
          />
        </linearLayout>
      </view>
    );
  }
}

export { SceneTimePicker };
