import React from 'react';

class SceneCircleConfirmation extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showDialog: false, progress: 0.0};
  }

  onConfirmationCompleted = event => {
    console.log("onConfirmationCompleted event received: ", event);
    this.setState({ showDialog: true });
  };

  onConfirmationUpdated = event => {
    console.log("onConfirmationUpdated event received: ", event);
    this.setState({ progress: event.Value })
  };

  render() {
    const { showDialog } = this.state;
    const progress = this.state.progress.toFixed(2)

    return (
      <view localPosition={this.props.localPosition}>

      <text localPosition={[-0.25, 0.3, 0]} textAlignment={'center'} textSize={0.07} boundsSize={{ boundsSize: [0.5, 0.1], wrap: false }}>{`Progress= ${progress}`}</text>

          <circleConfirmation
            height={0.15} 
            onConfirmationUpdated={this.onConfirmationUpdated} 
            onConfirmationCompleted={this.onConfirmationCompleted}/>

          {showDialog && (
            <dialog
              title={"Action confirmed!"}
              confirmText={"OK"}
              cancelText={"Close"}
             />
          )}

      </view>
    );
  }
}

export { SceneCircleConfirmation };
