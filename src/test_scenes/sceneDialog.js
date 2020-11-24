import React from "react";
import { Alignment, AnchorPoint, Button, ButtonType, Dialog, DialogType, LinearLayout, Orientation, Text, Toggle, ToggleGroup, View } from 'magic-script-components';

const DialogTypes = [
  DialogType.timed,
  DialogType.noAction,
  DialogType.singleAction,
  DialogType.dualAction
]

const ButtonTypes = [
  ButtonType.icon,
  ButtonType.iconWithLabel,
  ButtonType.text,
  ButtonType.textWithIcon
]

const LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

class SceneDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      dialogTypeIndex: 3,
      buttonTypeIndex: 3,
      noActionTimeLeft: 0
    };
    this.interval = 1.0;
    this.handler = undefined;
  }

  componentWillUnmount() {
    if (this.handler !== undefined) {
      clearInterval(this.handler);
    }
  }

  startTimer() {
    this.setState({ noActionTimeLeft: 5 });
    this.handler = setInterval(this.updateTimer, this.interval * 1000);
  }

  updateTimer = () => {
    const timeLeft = this.state.noActionTimeLeft - 1;
    if (timeLeft > 0) {
      this.setState({ noActionTimeLeft: timeLeft });
    } else {
      this.setState({ noActionTimeLeft: 0, showDialog: false });
      clearInterval(this.handler);
      this.handler = undefined;
    }
  }

  renderRadio(types, index, selectedIndex, onChanged) {
    const type = types[index];
    const on = (index === selectedIndex);
    return (
      <Toggle
        height={0.075}
        on={on}
        fontSize={0.075}
        type={'radio'}
        onToggleChanged={() => onChanged(index)}
      >{type}</Toggle> 
    );
  }

  onButtonClick = () => {
    const { dialogTypeIndex } = this.state;
    this.setState({ showDialog: true });
    if (dialogTypeIndex === 1) {
      this.startTimer();
    }
  }

  onDialogConfirmed = event => {
    console.log("onDialogConfirmed event received: ", event);
    this.setState({ showDialog: false });
  };

  onDialogCanceled = event => {
    console.log("onDialogCanceled event received: ", event);
    this.setState({ showDialog: false });
  };

  onDialogTimeExpired = event => {
    console.log("onDialogTimeExpired event received: ", event);
    this.setState({ showDialog: false });
  };

  onDialogTypeChanged = (index) => {
    this.setState({ dialogTypeIndex: index });
  }

  onButtonTypeChanged = (index) => {
    this.setState({ buttonTypeIndex: index });
  }

  render() {
    const { showDialog, dialogTypeIndex, buttonTypeIndex, noActionTimeLeft } = this.state;
    const showButtons = !showDialog;

    const confirmActionAllowed = (dialogTypeIndex === 2 || dialogTypeIndex === 3);
    const cancelActionAllowed = (dialogTypeIndex === 3);
    const expireTime = (dialogTypeIndex === 0) ? { expireTime: 3 } : null;
    const confirmIcon = (confirmActionAllowed && buttonTypeIndex !== 2) ? { confirmIcon: "thumbs-up" } : null;
    const confirmText = (confirmActionAllowed && buttonTypeIndex !== 0) ? { confirmText: "Confirm" } : null;
    const cancelIcon = (cancelActionAllowed && buttonTypeIndex !== 2) ? { cancelIcon: "thumbs-down" } : null;
    const cancelText = (cancelActionAllowed && buttonTypeIndex !== 0) ? { cancelText: "Cancel" } : null;

    return (
      <View position={this.props.position}>
        {showDialog && noActionTimeLeft > 0 && (
          <Text 
            anchorPoint={AnchorPoint.centerCenter}
            fontColor={[1,1,1,0.1]} 
            fontSize={0.08}
            multiline
            position={[0, 0.8, 0]} 
            width={0.7}
          >{`This dialog will be closed in ${noActionTimeLeft} sec.`}</Text>
        )}

        <View scale={[2, 2, 2]} position={[0, 0.3, 0.2]}>
          {showDialog && (
            <Dialog
              onDialogConfirmed={this.onDialogConfirmed}
              onDialogCanceled={this.onDialogCanceled}
              onDialogTimeExpired={this.onDialogTimeExpired}
              title={"Dialog title text"}
              message={LoremIpsum}
              {...confirmText}
              {...confirmIcon}
              {...cancelText}
              {...cancelIcon}
              {...expireTime}
              buttonType={ButtonTypes[buttonTypeIndex]}
              type={DialogTypes[dialogTypeIndex]}
            />
          )}
        </View>

        {showButtons && (
          <LinearLayout
            anchorPoint={AnchorPoint.centerCenter}
            defaultItemAlignment={Alignment.centerCenter}
            defaultItemPadding={[0.07, 0, 0.07, 0]}
            position={[0, 0.3, 0]}
            orientation={Orientation.vertical}
          >
            <Button
              fontSize={0.08}
              roundness={0.5}
              onClick={this.onButtonClick}
            >Show dialog (short text)</Button>

            <LinearLayout orientation={Orientation.horizontal}>
              <ToggleGroup>
                <LinearLayout orientation={Orientation.vertical}>
                  {this.renderRadio(DialogTypes, 0, dialogTypeIndex, this.onDialogTypeChanged)}
                  {this.renderRadio(DialogTypes, 1, dialogTypeIndex, this.onDialogTypeChanged)}
                  {this.renderRadio(DialogTypes, 2, dialogTypeIndex, this.onDialogTypeChanged)}
                  {this.renderRadio(DialogTypes, 3, dialogTypeIndex, this.onDialogTypeChanged)}
                </LinearLayout>
              </ToggleGroup>
              <ToggleGroup>
                <LinearLayout orientation={Orientation.vertical}>
                  {this.renderRadio(ButtonTypes, 0, buttonTypeIndex, this.onButtonTypeChanged)}
                  {this.renderRadio(ButtonTypes, 1, buttonTypeIndex, this.onButtonTypeChanged)}
                  {this.renderRadio(ButtonTypes, 2, buttonTypeIndex, this.onButtonTypeChanged)}
                  {this.renderRadio(ButtonTypes, 3, buttonTypeIndex, this.onButtonTypeChanged)}
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
