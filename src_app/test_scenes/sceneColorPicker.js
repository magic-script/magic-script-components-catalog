import React from "react";

class SceneColorPicker extends React.Component {
  onColorChanged = event => {
    console.log("onColorChanged event received: ", event);
  };

  onConfirm = event => {
    console.log("onConfirm event received: ", event);
  };

  onCancel = event => {
    console.log("onCancel event received: ", event);
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
          <colorPicker
            startingColor={[0.75, 0.5, 0.25, 1]}
            color={[0.95, 0.85, 0.75, 1]}
            onColorChanged={this.onColorChanged}
            onConfirm={this.onConfirm}
            onCancel={this.onCancel}
          />
        </linearLayout>
      </view>
    );
  }
}

export { SceneColorPicker };
