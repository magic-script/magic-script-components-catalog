import React from 'react';

class SceneVideo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLooping: false, action: 'start', volume: 1.0 };
    this.onToggleChanged = this.onToggleChanged.bind(this);
    this.onStartAction = this.onStartAction.bind(this);
    this.onPauseAction = this.onPauseAction.bind(this);
    this.onStopAction = this.onStopAction.bind(this);
  }

  onToggleChanged(event) {
    this.setState({ isLooping: event.On });
  }

  onStartAction() {
    this.setState({ action: 'start' });
  }

  onPauseAction() {
    this.setState({ action: 'pause' });
  }

  onStopAction() {
    this.setState({ action: 'stop' });
  }

  createButtonWithAction(action, position) {
    const title = action[0].toUpperCase() + action.substring(1);
    const onClickHandler = (action === 'start') ? this.onStartAction : ((action === 'pause') ? this.onPauseAction : this.onStopAction);
    return (
      <button
        localPosition={position}
        textSize={0.1}
        width={0.3}
        height={0.12}
        onClick={onClickHandler}
      >
        {title}
      </button>
    );
  }

  renderPlayOrPauseButton(position) {
    const { action } = this.state;
    if (action === 'start') {
      return this.createButtonWithAction('pause', position);
    } else {
      return this.createButtonWithAction('start', position);
    }
  }

  renderStopButton(position) {
    return this.createButtonWithAction('stop', position);
  }

  render() {
    const resolution = [1280, 720];
    const widthInMeters = 0.8;
    const size = [widthInMeters, (resolution[1] * widthInMeters) / resolution[0]];
    return (
      <view localPosition={this.props.localPosition}>
        <video 
          alignment={'top-center'}
          action={this.state.action}
          localPosition={[0, 0.4, 0]}
          looping={this.state.isLooping}
          width={resolution[0]}
          height={resolution[1]}
          size={size}
          anchorPosition={[0.5 * size[0], 0.5 * size[1], 0]}
          videoPath={require('../../resources/video.mp4')}
          volume={this.state.volume}
        />

        <toggle 
          localPosition={[0.3, -0.3, 0]} 
          height={0.1} 
          textSize={0.08} 
          on={this.state.isLooping} 
          onToggleChanged={this.onToggleChanged}>
          Looping
        </toggle>

        {this.renderPlayOrPauseButton([-0.2, 0, 0])}
        {this.renderStopButton([0.2, 0, 0])}

      </view>
    );
  }
}

export { SceneVideo };
