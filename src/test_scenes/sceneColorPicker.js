import React from "react";
import { Alignment, AnchorPoint, ColorPicker, LinearLayout, Orientation } from 'magic-script-components';

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
      <LinearLayout
        anchorPoint={AnchorPoint.centerCenter}
        columns={1}
        defaultItemAlignment={Alignment.centerCenter}
        defaultItemPadding={[0.07, 0, 0.07, 0]}
        orientation={Orientation.vertical}
        position={this.props.position}
      >
        <ColorPicker
          color={[0.75, 0.5, 0.25, 1]}
          onColorChanged={this.onColorChanged}
          onColorConfirmed={this.onColorConfirmed}
          onColorCanceled={this.onColorCanceled}
        />
        <ColorPicker
          color={'red'}
          onColorChanged={this.onColorChanged}
          onColorConfirmed={this.onColorConfirmed}
          onColorCanceled={this.onColorCanceled}
        />
        <ColorPicker
          color={'#00FF00'}
          onColorChanged={this.onColorChanged}
          onColorConfirmed={this.onColorConfirmed}
          onColorCanceled={this.onColorCanceled}
        />
        <ColorPicker
          color={[1,1,0,1]}
          onColorChanged={this.onColorChanged}
          onColorConfirmed={this.onColorConfirmed}
          onColorCanceled={this.onColorCanceled}
        />
      </LinearLayout>
    );
  }
}

export { SceneColorPicker };
