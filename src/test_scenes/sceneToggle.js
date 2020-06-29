import React from "react";
import { Toggle, View } from 'magic-script-components';

class SceneToggle extends React.Component {
  onChanged = event => {
    console.log("onChanged event received: ", event);
  };

  render() {
    return (
      <View position={this.props.position}>
        <Toggle
          alignment={"center-center"}
          position={[0, 0.4, 0]}
          on={false}
          fontSize={0.08}
          textColor={[1,0,0,1]}
          height={0.2}
          onToggleChanged={this.onChanged}
        >
          Default
        </Toggle>
        <Toggle
          type={"checkbox"}
          alignment={"center-center"}
          position={[0, 0.0, 0]}
          fontSize={0.08}
          on={true}
          textColor={[0,1,0,1]}
          height={0.2}
          onToggleChanged={this.onChanged}
        >
          Checkbox
        </Toggle>
        <Toggle
          type={"radio"}
          alignment={"center-center"}
          position={[0, -0.4, 0]}
          fontSize={0.08}
          on={false}
          textColor={[1,1,0,1]}
          height={0.2}
          onToggleChanged={this.onChanged}
        >
          Radio
        </Toggle>
      </View>
    );
  }
}

export { SceneToggle };
