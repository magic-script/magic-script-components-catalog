import React from "react";
import { LinearLayout, TextEdit, Toggle, RectLayout } from "magic-script-components";

class SceneEvents extends React.Component {
  constructor(props) {
    super(props);

    this.defaultState = {
      onActivate: false,
      onClick: false,
      onPress: false,
      onLongPress: false,
      onRelease: false,
      onFocusGained: false,
      onFocusLost: false,
      onUpdate: false,
      onEnabled: false,
      onDisabled: false,
      onDelete: false,

      enabled: true,
      deleted: false,
    };

    this.state = this.defaultState;
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  renderNode() {
    return (
      <TextEdit
        debug
        position={[0, 0, 0]}
        text={"Interactive node"}
        fontSize={0.08}
        width={0.8}
        height={0.4}
        multiline={true}
        enabled={this.state.enabled}
        onActivate={() => this.setState({ onActivate: true })}
        onClick={() => this.setState({ onClick: true })}
        onPress={() => this.setState({ onPress: true })}
        onLongPress={() => this.setState({ onLongPress: true })}
        onRelease={() => this.setState({ onRelease: true })}
        onFocusGained={() => this.setState({ onFocusGained: true })}
        onFocusLost={() => this.setState({ onFocusLost: true })}
        onUpdate={() => this.setState({ onUpdate: true })}
        onEnabled={() => this.setState({ onEnabled: true })}
        onDisabled={() => this.setState({ onDisabled: true })}
        onDelete={() => {
          if (this.mounted) {
            this.setState({ onDelete: true });
          }
        }}
      />
    );
  }

  renderCheckbox(text, on) {
    return (
      <Toggle
        height={0.075}
        fontSize={0.035}
        type="checkbox"
        on={on}
        enabled={false}
      >
        {text}
      </Toggle>
    );
  }

  onEnableToggleChanged = (event) => {
    this.setState((prevState) => ({ enabled: !prevState.enabled }));
  };

  onDeleteToggleChanged = (event) => {
    this.setState((prevState) => {
      const newValue = !prevState.deleted;
      return newValue ? { deleted: newValue } : this.defaultState;
    });
  };

  render() {
    const enabled = this.state.enabled;
    const deleted = this.state.deleted;

    return (
      <LinearLayout
        defaultItemPadding={[0.01, 0.0, 0.01, 0.0]}
      >
        <RectLayout width={1} height={1} contentAlignment={"center-center"}>
          {this.state.deleted ? null : this.renderNode()}
        </RectLayout>

        <Toggle
          height={0.05}
          fontSize={0.035}
          on={enabled}
          onToggleChanged={this.onEnableToggleChanged}
        >
          Enabled
        </Toggle>
        <Toggle
          height={0.05}
          fontSize={0.035}
          on={deleted}
          onToggleChanged={this.onDeleteToggleChanged}
        >
          Deleted
        </Toggle>

        {this.renderCheckbox("onActivate", this.state.onActivate)}
        {this.renderCheckbox("onClick", this.state.onClick)}
        {this.renderCheckbox("onPress", this.state.onPress)}
        {this.renderCheckbox("onLongPress", this.state.onLongPress)}
        {this.renderCheckbox("onRelease", this.state.onRelease)}
        {this.renderCheckbox("onFocusGained", this.state.onFocusGained)}
        {this.renderCheckbox("onFocusLost", this.state.onFocusLost)}
        {this.renderCheckbox("onUpdate", this.state.onUpdate)}
        {this.renderCheckbox("onEnabled", this.state.onEnabled)}
        {this.renderCheckbox("onDisabled", this.state.onDisabled)}
        {this.renderCheckbox("onDelete", this.state.onDelete)}
      </LinearLayout>
    );
  }
}

export { SceneEvents };
