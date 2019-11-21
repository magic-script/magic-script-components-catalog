import React from "react";

class SceneDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      showDialogWithIcons: false,
      showDialogLongText: false,
      showDialogTimeExpire: false
    };
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

  onDialogConfirmed_normal = event => {
    console.log("onDialogConfirmed event received: ", event);
    this.setState({ showDialog: false });
  };

  onDialogCanceled_normal = event => {
    console.log("onDialogCanceled event received: ", event);
    this.setState({ showDialog: false });
  };

  onDialogConfirmed_icons = event => {
    console.log("onDialogConfirmed event received: ", event);
    this.setState({ showDialogWithIcons: false });
  };

  onDialogCanceled_icons = event => {
    console.log("onDialogCanceled event received: ", event);
    this.setState({ showDialogWithIcons: false });
  };

  onDialogConfirmed_long = event => {
    console.log("onDialogConfirmed event received: ", event);
    this.setState({ showDialogLongText: false });
  };

  onDialogCanceled_long = event => {
    console.log("onDialogCanceled event received: ", event);
    this.setState({ showDialogLongText: false });
  };

  onDialogTimeExpired = event => {
    console.log("onDialogTimeExpired event received: ", event);
    this.setState({ showDialogTimeExpire: false });
  };

  render() {
    const {
      showDialog,
      showDialogWithIcons,
      showDialogLongText,
      showDialogTimeExpire
    } = this.state;
    const showButtons = !(showDialog || showDialogWithIcons || showDialogLongText || showDialogTimeExpire);
    return (
      <view localPosition={this.props.localPosition}>
        <view localScale={[2,2,2]} localPosition={[0,0.3,0.2]}>
          {showDialog && (
            <dialog
              onDialogConfirmed={this.onDialogConfirmed_normal}
              onDialogCanceled={this.onDialogCanceled_normal}
              title={"Dialog title text"}
              message={"Dialog message text"}
              confirmText={"Confirm"}
              cancelText={"Cancel"}
            />
          )}
          {showDialogWithIcons && (
            <dialog
              onDialogConfirmed={this.onDialogConfirmed_icons}
              onDialogCanceled={this.onDialogCanceled_icons}
              title={"Dialog title text"}
              message={"Dialog message text"}
              confirmText={"YES"}
              confirmIcon={"thumbs-up"}
              cancelText={"NO"}
              cancelIcon={"thumbs-down"}
            />
          )}
          {showDialogLongText && (
            <dialog
              onDialogConfirmed={this.onDialogConfirmed_long}
              onDialogCanceled={this.onDialogCanceled_long}
              title={"Dialog title text"}
              message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus nisl a felis accumsan, ac sollicitudin lorem sagittis. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ut justo a vulputate. Maecenas sit amet purus porttitor, tempus ante a, commodo mi. Quisque non tempus ipsum, in ornare justo. Nam ut ex pretium, maximus tellus imperdiet, tempor purus. In viverra volutpat sem nec posuere. Morbi eu erat sem. Phasellus at sapien quis arcu consequat sodales. Donec iaculis, nisi et tempor iaculis, est enim vulputate metus, et vestibulum enim nisl sed urna. Etiam dictum nibh non commodo eleifend. Phasellus ut sollicitudin dolor. Nunc quis ultrices orci. Sed convallis ex vel dignissim varius. Sed pretium porta lacus, ac venenatis magna malesuada posuere. Aenean maximus suscipit dolor quis egestas. Suspendisse venenatis non lectus quis fringilla. Nullam viverra tristique fringilla. Integer dictum diam arcu, at congue ex sagittis et. Duis arcu erat, elementum ac dui sagittis, varius rutrum nunc. Nulla iaculis ipsum eu nisi sollicitudin, non suscipit enim interdum. Integer tincidunt nisl metus, eu imperdiet felis accumsan ac. Proin lacinia commodo dui, quis hendrerit augue dignissim id. Nullam rhoncus, purus quis faucibus scelerisque, nunc enim dictum eros, ut rutrum libero lacus eget magna. Donec cursus ultrices luctus. Sed sit amet augue felis. Nam volutpat lorem iaculis nulla feugiat cursus eget eu arcu. Donec congue velit id mi facilisis vehicula. Cras convallis orci vel dolor rutrum, feugiat posuere nulla faucibus. Vestibulum in viverra dui. Sed accumsan dignissim lectus a elementum. Vivamus a hendrerit nisi. In vehicula fringilla felis eu posuere. Nunc mattis pellentesque aliquam. Duis aliquam ullamcorper cursus. Sed laoreet justo lectus, eu mollis justo hendrerit at. Praesent facilisis vestibulum tortor, quis tempor libero dapibus nec. Duis eleifend varius dignissim. Vestibulum sem dolor, sodales eu consequat nec, blandit nec elit. Praesent commodo ligula metus, non lobortis augue dignissim ac. Nunc efficitur posuere tortor ut interdum. Vivamus sagittis neque ac eleifend consectetur. Sed tincidunt, neque sed maximus imperdiet, ligula eros condimentum ex, vitae suscipit nibh lacus id lorem. In pellentesque nisl ligula, nec bibendum diam commodo a. Sed at nunc dolor. Aenean id ultricies odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat quam eu finibus semper. Nunc sit amet venenatis tellus. Nullam elit turpis, mattis sed porta ut, tempor in est. Cras sed lorem sed metus elementum tincidunt porta luctus libero. Nulla varius tortor eros, sit amet porttitor nulla faucibus id. Donec sit amet dignissim ante. Aliquam volutpat eleifend nibh nec congue. Sed faucibus felis ac semper posuere. Phasellus luctus rhoncus lacus, eu maximus lacus viverra a. Vivamus eu metus dapibus, tempor dui sed, finibus nisi. Etiam quis mi tortor. Nulla facilisi."}
              confirmText={"Confirm"}
              confirmIcon={"check"}
              cancelText={"Cancel"}
              cancelIcon={"close"}
              scrolling={true}
            />
          )}
          {showDialogTimeExpire && (
            <dialog
              onDialogTimeExpired={this.onDialogTimeExpired}
              title={"Auto dismiss"}
              message={"This dialog will expire in 3 seconds."}
              type={"timed"}
              expireTime={3.0}
            />
          )}
        </view>

        {showButtons && (
          <linearLayout
            alignment={"center-center"}
            columns={1}
            defaultItemAlignment={"center-center"}
            defaultItemPadding={[0.07, 0, 0.07, 0]}
            localPosition={[0, 0.3, 0]}
            orientation={"vertical"}
          >
            {this.renderButton({
              title: "Show dialog (short text)",
              onClick: this.onButtonClick({ showDialog: true })
            })}

            {this.renderButton({
              title: "Show dialog (short text + icons)",
              onClick: this.onButtonClick({ showDialogWithIcons: true })
            })}

            {this.renderButton({
              title: "Show dialog (long text + icons)",
              onClick: this.onButtonClick({ showDialogLongText: true })
            })}

            {this.renderButton({
              title: "Show dialog (time expiration)",
              onClick: this.onButtonClick({ showDialogTimeExpire: true })
            })}
          </linearLayout>
        )}
      </view>
    );
  }
}

export { SceneDialog };
