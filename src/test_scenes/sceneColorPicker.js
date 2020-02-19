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
            startingColor={[0.75, 0.5, 0.25, 1]}
            onColorChanged={this.onColorChanged}
            onColorConfirmed={this.onColorConfirmed}
            onColorCanceled={this.onColorCanceled}
          />
          <colorPicker
            color={[0.95, 0.85, 0.75, 1]}
            onColorChanged={this.onColorChanged}
            onColorConfirmed={this.onColorConfirmed}
            onColorCanceled={this.onColorCanceled}
          />
          <colorPicker
            startingColor={[0.75, 0.5, 0.25, 1]}
            color={[0.95, 0.85, 0.75, 1]}
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
