import React from "react";

class SceneDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showDialog: false };
  }

  renderButton({
    title,
    enabled = true,
    roundness = 0.5,
    textColor = [1, 1, 1, 1],
    textSize = 0.08,
    width = 0.0,
    height = 0.0,
    onClick = () => {}
  }) {
    return (
      <button
        enabled={enabled}
        textColor={textColor}
        textSize={textSize}
        roundness={roundness}
        width={width}
        height={height}
        onClick={onClick}
      >
        {title}
      </button>
    );
  }

  onButtonClick(param) {
    return () => {
      this.setState(param);
    };
  }

  onDialogConfirmed = event => {
    // event.Date, event.DateString
    console.log("onDialogConfirmed event received: ", event);
    this.setState({ showDialog: false });
  };

  onDialogCanceled = event => {
    // event.Date, event.DateString
    console.log("onDialogCanceled event received: ", event);
    this.setState({ showDialog: false });
  };

  render() {
    const { showDialog } = this.state;
    return (
      <view localPosition={this.props.localPosition}>
        {this.renderButton({
          title: "Show dialog",
          onClick: this.onButtonClick({ showDialog: true })
        })}
        {showDialog && (
          <dialog
            onDialogConfirmed={this.onDialogConfirmed}
            onDialogCanceled={this.onDialogCanceled}
            title={"Dialog title text"}
            message={"Dialog message text"}
            confirmText={"Confirm"}
            cancelText={"Cancel"}
          />
        )}
      </view>
    );
  }
}

export { SceneDialog };
