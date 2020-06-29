import React from "react";
import { View, LinearLayout, ColorPicker } from 'magic-script-components';

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
      <View position={this.props.position}>
        <LinearLayout
          position={[0, 0.5, 0]}
          anchorPoint={"center-center"}
          columns={1}
          defaultItemAlignment={"center-center"}
          defaultItemPadding={[0.07, 0, 0.07, 0]}
          orientation={"vertical"}
        >
          <ColorPicker
            startingColor={[0.75, 0.5, 0.25, 1]}
            onColorChanged={this.onColorChanged}
            onColorConfirmed={this.onColorConfirmed}
            onColorCanceled={this.onColorCanceled}
          />
          <ColorPicker
            color={[0.95, 0.85, 0.75, 1]}
            onColorChanged={this.onColorChanged}
            onColorConfirmed={this.onColorConfirmed}
            onColorCanceled={this.onColorCanceled}
          />
          <ColorPicker
            startingColor={[0.75, 0.5, 0.25, 1]}
            color={[0.95, 0.85, 0.75, 1]}
            onColorChanged={this.onColorChanged}
            onColorConfirmed={this.onColorConfirmed}
            onColorCanceled={this.onColorCanceled}
          />
        </LinearLayout>
      </View>
    );
  }
}

export { SceneColorPicker };
