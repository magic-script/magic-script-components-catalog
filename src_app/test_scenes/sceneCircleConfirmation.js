import React from "react";

class SceneCircleConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showDialog: false, progress: 0.0, key: 0 };
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
      <view localPosition={this.props.localPosition}>
        <text
          alignment={'bottom-center'}
          localPosition={[0, 0.35, 0]}
          textAlignment={"center"}
          textSize={0.07}
          boundsSize={{ boundsSize: [0.5, 0.], wrap: false }}
        >{`Progress = ${progress.toFixed(2)}`}</text>

        {!showDialog && (
          <circleConfirmation
            height={0.2}
            onConfirmationUpdated={this.onConfirmationUpdated}
            onConfirmationCompleted={this.onConfirmationCompleted}
            key={key}
          />
        )}

        {showDialog && (
          <dialog
            localScale={[2, 2, 2]}
            title={"Action confirmed!"}
            confirmText={"OK"}
            cancelText={"Close"}
            onDialogConfirmed={this.onDialogConfirmed}
            onDialogCanceled={this.onDialogCanceled}
          />
        )}
      </view>
    );
  }
}

export { SceneCircleConfirmation };
