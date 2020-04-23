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
    console.log('timeLeft: ', timeLeft);
    if (timeLeft > 0) {
      this.setState({ noActionTimeLeft: timeLeft });
    } else {
      this.setState({ noActionTimeLeft: 0, showDialog: false });
      clearInterval(this.handler);
      this.handler = undefined;
    }
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
    const {
      showDialog,
      dialogTypeIndex,
      buttonTypeIndex,
      noActionTimeLeft
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
        {showDialog && noActionTimeLeft > 0 && (
          <Text 
            alignment={'center-center'}
            boundsSize={{ boundsSize: [0.7, 0], wrap: true }}
            localPosition={[0, 0.8, 0]} 
            textColor={[1,1,1,0.1]} 
            textSize={0.08}>{`This dialog will be closed in ${noActionTimeLeft} sec.`}</Text>
        )}

        <View localScale={[2, 2, 2]} localPosition={[0, 0.3, 0.2]}>
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
            <Button
              textSize={0.08}
              roundness={0.5}
              onClick={this.onButtonClick}
            >Show dialog (short text)</Button>

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
