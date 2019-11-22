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
        <toggleGroup onUpdate={this.onUpdate} allowMultipleOn={false} allowAllOff={false} allTogglesOff={false}>
          <toggle
            alignment={"center-center"}
            localPosition={[0, 0.4, 0]}
            on={false}
            textSize={0.1}
            textColor={[1, 0, 0, 1]}
            height={0.3}
          >
            Default 1
          </toggle>
          <toggle
            alignment={"center-center"}
            localPosition={[0, 0.4, 0]}
            on={false}
            textSize={0.1}
            textColor={[1, 0, 0, 1]}
            height={0.3}
          >
            Default 2
          </toggle>
          <toggle
            alignment={"center-center"}
            localPosition={[0, 0.4, 0]}
            on={false}
            textSize={0.1}
            textColor={[1, 0, 0, 1]}
            height={0.3}
          >
            Default 3
          </toggle>
        </toggleGroup>
      </view>
    );
  }
}

export { SceneToggleGroup };
