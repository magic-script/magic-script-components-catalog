import React from "react";
import { LinearLayout, Button, View, Text, Dialog, ToggleGroup, Toggle } from 'magic-script-components';

const DialogType = [
  "timed",
  "no-action",
  "single-action",
  "dual-action"
]

const ButtonType = [
  "icon",
  "icon-with-label",
  "text",
  "text-with-icon"
]

const LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

class SceneDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      dialogTypeIndex: 3,
      buttonTypeIndex: 3
    };
  }

  renderDialogTypeRadio(index, selectedIndex, onChanged) {
    const dialogType = DialogType[index];
    const on = (index === selectedIndex);
    return (
      <Toggle
        height={0.075}
        on={on}
        text={dialogType}
        textSize={0.075}
        type={'radio'}
        onToggleChanged={() => onChanged(index)}
      />
    );
  }

  renderButtonTypeRadio(index, selectedIndex, onChanged) {
    const buttonType = ButtonType[index];
    const on = (index === selectedIndex);
    return (
      <Toggle
        height={0.075}
        on={on}
        text={buttonType}
        textSize={0.075}
        type={'radio'}
        onToggleChanged={() => onChanged(index)}
      />
    );
  }

  renderButton({
    title,
    enabled = true,
    roundness = 0.5,
    textColor = [1, 1, 1, 1],
    textSize = 0.08,
    width = 0.0,
    height = 0.0,
    onClick = () => { }
  }) {
    return (
      <Button
        enabled={enabled}
        textColor={textColor}
        textSize={textSize}
        roundness={roundness}
        width={width}
        height={height}
        onClick={onClick}
      >
        {title}
      </Button>
    );
  }

  onButtonClick(param) {
    return () => {
      this.setState(param);
    };
  }

  onDialogConfirmed_normal = event => {
    console.log("onDialogConfirmed event received: ", event);
    this.setState({ showDialog: false });
  };

  onDialogCanceled_normal = event => {
    console.log("onDialogCanceled event received: ", event);
    this.setState({ showDialog: false });
  };

  onDialogTimeExpired = event => {
    console.log("onDialogTimeExpired event received: ", event);
    this.setState({ showDialogTimeExpire: false });
  };

  onDialogTypeChanged = (index) => {
    this.setState({ dialogTypeIndex: index });
  }

  onButtonTypeChanged = (index) => {
    this.setState({ buttonTypeIndex: index });
  }

  render() {
    const {
      showDialog,
      dialogTypeIndex,
      buttonTypeIndex
    } = this.state;
    const showButtons = !showDialog;

    const expireTime = dialogTypeIndex === 0 ? { expireTime: 3 } : null;
    const confirmIcon = (dialogTypeIndex !== 0 && buttonTypeIndex !== 2) ? { confirmIcon: "thumbs-up" } : null;
    const cancelIcon = (dialogTypeIndex !== 0 && buttonTypeIndex !== 2) ? { cancelIcon: "thumbs-down" } : null;
    const confirmText = (dialogTypeIndex !== 0 && buttonTypeIndex !== 0) ? { confirmText: "Confirm" } : null;
    const cancelText = (dialogTypeIndex !== 0 && buttonTypeIndex !== 0) ? { cancelText: "Cancel" } : null;
    const buttonType = { buttonType: ButtonType[buttonTypeIndex] }

    return (
      <View localPosition={this.props.localPosition}>

        <View localScale={[2, 2, 2]} localPosition={[0, 0.3, 0.2]}>
          {showDialog && (
            <Dialog
              onDialogConfirmed={this.onDialogConfirmed_normal}
              onDialogCanceled={this.onDialogCanceled_normal}
              title={"Dialog title text"}
              message={LoremIpsum}
              {...confirmText}
              {...confirmIcon}
              {...cancelText}
              {...cancelIcon}
              {...expireTime}
              {...buttonType}
              type={DialogType[dialogTypeIndex]}
            />
          )}
        </View>

        {showButtons && (
          <LinearLayout
            alignment={"center-center"}
            defaultItemAlignment={"center-center"}
            defaultItemPadding={[0.07, 0, 0.07, 0]}
            localPosition={[0, 0.3, 0]}
            orientation={"vertical"}
          >
            {this.renderButton({
              title: "Show dialog (short text)",
              onClick: this.onButtonClick({ showDialog: true })
            })}

            <LinearLayout orientation="horizontal">
              <ToggleGroup>
                <LinearLayout orientation={'vertical'}>
                  {this.renderDialogTypeRadio(0, dialogTypeIndex, this.onDialogTypeChanged)}
                  {this.renderDialogTypeRadio(1, dialogTypeIndex, this.onDialogTypeChanged)}
                  {this.renderDialogTypeRadio(2, dialogTypeIndex, this.onDialogTypeChanged)}
                  {this.renderDialogTypeRadio(3, dialogTypeIndex, this.onDialogTypeChanged)}
                </LinearLayout>
              </ToggleGroup>
              <ToggleGroup>
                <LinearLayout orientation={'vertical'}>
                  {this.renderButtonTypeRadio(0, buttonTypeIndex, this.onButtonTypeChanged)}
                  {this.renderButtonTypeRadio(1, buttonTypeIndex, this.onButtonTypeChanged)}
                  {this.renderButtonTypeRadio(2, buttonTypeIndex, this.onButtonTypeChanged)}
                  {this.renderButtonTypeRadio(3, buttonTypeIndex, this.onButtonTypeChanged)}
                </LinearLayout>
              </ToggleGroup>
            </LinearLayout>
          </LinearLayout>
        )}
      </View>
    );
  }
}

export { SceneDialog };
