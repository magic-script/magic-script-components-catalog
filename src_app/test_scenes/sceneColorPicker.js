import React from "react";

class SceneColorPicker extends React.Component {
  onColorChanged = event => {
    // event.Color
    console.log("onColorChanged event received: ", event);
  };

  onColorConfirmed = event => {
    // event.Color
    console.log("onColorConfirmed event received: ", event);
  };

  onColorCanceled = event => {
    // event.Color
    console.log("onColorCanceled event received: ", event);
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
            startingColor={[192, 128, 64, 1]}
            onColorChanged={this.onColorChanged}
            onColorConfirmed={this.onColorConfirmed}
            onColorCanceled={this.onColorCanceled}
          />
          <colorPicker
            color={[243, 218, 192, 1]}
            onColorChanged={this.onColorChanged}
            onColorConfirmed={this.onColorConfirmed}
            onColorCanceled={this.onColorCanceled}
          />
          <colorPicker
            startingColor={[192, 128, 64, 1]}
            color={[243, 218, 192, 1]}
            onColorChanged={this.onColorChanged}
            onColorConfirmed={this.onColorConfirmed}
            onColorCanceled={this.onColorCanceled}
          />
        </linearLayout>
      </view>
    );
  }
}

export { SceneColorPicker };
