import React from "react";

class SceneToggle extends React.Component {
  onChanged = event => {
    console.log("onChanged event received: ", event);
  };

  render() {
    return (
      <view localPosition={this.props.localPosition}>
        <toggle
          alignment={"center-center"}
          localPosition={[0, 0.4, 0]}
          on={false}
          textSize={0.1}
          textColor={[255,0,0,1]}
          height={0.2}
          onToggleChanged={this.onChanged}
        >
          Default
        </toggle>
        <toggle
          type={"checkbox"}
          alignment={"center-center"}
          localPosition={[0, 0.0, 0]}
          textSize={0.1}
          on={true}
          textColor={[0,255,0,1]}
          height={0.2}
          onToggleChanged={this.onChanged}
        >
          Checkbox
        </toggle>
        <toggle
          type={"radio"}
          alignment={"center-center"}
          localPosition={[0, -0.4, 0]}
          textSize={0.1}
          on={false}
          textColor={[255,255,0,1]}
          height={0.2}
          onToggleChanged={this.onChanged}
        >
          Radio
        </toggle>
      </view>
    );
  }
}

export { SceneToggle };
