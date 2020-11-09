import React from "react";
import { Alignment, CircleConfirmation, Dialog, Text, TextAlign, View } from 'magic-script-components';

class SceneCircleConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showDialog: false, progress: 0.0, key: 0 };
  }

  onConfirmationCanceled = event => {
    console.log("onConfirmationCanceled event received: ", event);
  }

  onConfirmationCompleted = event => {
    console.log("onConfirmationCompleted event received: ", event);
    this.setState({ showDialog: true });
  };

  onConfirmationUpdated = event => {
    console.log("onConfirmationUpdated event received: ", event);
    this.setState({ progress: 0.5 * (event.Angle / Math.PI) });
  };

  onDialogConfirmed = event => {
    console.log("onDialogConfirmed event received: ", event);
    this.setState({ showDialog: false, progress: 0.0, key: this.state.key + 1 });
  };

  onDialogCanceled = event => {
    console.log("onDialogCanceled event received: ", event);
    this.setState({ showDialog: false, progress: 0.0, key: this.state.key + 1 });
  };

  render() {
    const { showDialog, progress = 0.0, key } = this.state;

    return (
      <View position={this.props.position}>
        <Text
          alignment={Alignment.bottomCenter}
          position={[0, 0.35, 0]}
          textAlignment={TextAlign.center}
          fontSize={0.07}
          boundsSize={{ boundsSize: [0.5, 0.5], wrap: false }}
        >{`Progress = ${progress.toFixed(2)}`}</Text>

        {!showDialog && (
          <CircleConfirmation
            key={key}
            onConfirmationCanceled={this.onConfirmationCanceled}
            onConfirmationCompleted={this.onConfirmationCompleted}
            onConfirmationUpdated={this.onConfirmationUpdated}
            radius={0.2}
          />
        )}

        {showDialog && (
          <Dialog
            scale={[2, 2, 2]}
            title={"Action confirmed!"}
            confirmText={"OK"}
            cancelText={"Close"}
            onDialogConfirmed={this.onDialogConfirmed}
            onDialogCanceled={this.onDialogCanceled}
          />
        )}
      </View>
    );
  }
}

export { SceneCircleConfirmation };
