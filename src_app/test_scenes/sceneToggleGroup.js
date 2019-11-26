import React from "react";
import { ToggleGroup } from "magic-script-components";

class SceneToggleGroup extends React.Component {
  onUpdate = event => {
    // event.Time, event.TimeString
    console.log("onUpdate event received: ", event);
  };

  render() {
    return (
      <view localPosition={this.props.localPosition}>
        <toggleGroup
          allowMultipleOn={false}
          allowAllOff={true}
          // allTogglesOff={true}
        >
          <linearLayout alignment={"center-center"}>
            <toggle
              type={"radio"}
              alignment={"center-center"}
              on={false}
              height={0.15}
              textSize={0.1}
            >
              Element 1
            </toggle>
            <toggle
              type={"radio"}
              alignment={"center-center"}
              on={false}
              height={0.15}
              textSize={0.1}
            >
              Element 2
            </toggle>
            <toggle
              type={"radio"}
              alignment={"center-center"}
              on={true}
              height={0.15}
              textSize={0.1}
            >
              Element 3
            </toggle>
          </linearLayout>
        </toggleGroup>
      </view>
    );
  }
}

export { SceneToggleGroup };
