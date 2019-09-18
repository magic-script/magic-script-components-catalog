import React from 'react';

const VideoActions = {
  start: 'start',
  pause: 'pause',
  stop: 'stop'
}

class SceneVideo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLooping: false, action: VideoActions.pause, volume: 1.0 };
    this.onToggleChanged = this.onToggleChanged.bind(this);
    this.onStartPauseClick = this.onStartPauseClick.bind(this);
    this.onStopClick = this.onStopClick.bind(this);
    this.onVolumeDownClick = this.onVolumeDownClick.bind(this)
    this.onVolumeUpClick = this.onVolumeUpClick.bind(this)
  }

  onToggleChanged(event) {
    this.setState({ isLooping: event.On });
  }

  onStartPauseClick() {
     if (this.state.action === VideoActions.start) {
       this.setState({ action: VideoActions.pause });
     } else {
       this.setState({ action: VideoActions.start });
     }
  }

  onStopClick() {
    this.setState({ action: VideoActions.stop });
  }

  onVolumeDownClick() {
    const volumeNew = (this.state.volume - 0.1).toPrecision(2);
    this.setState({volume: Math.max(0, volumeNew)});
  }

  onVolumeUpClick() {
    const volumeNew = (this.state.volume + 0.1).toPrecision(2);
    this.setState({volume: Math.min(1.0, volumeNew)});
  }

  createButtonWithAction(action, position) {
    const title = action[0].toUpperCase() + action.substring(1);
    const onClickHandler = (action === VideoActions.stop) ? this.onStopClick : this.onStartPauseClick;
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
    if (action === VideoActions.start) {
      return this.createButtonWithAction(VideoActions.pause, position);
    } else {
      return this.createButtonWithAction(VideoActions.start, position);
    }
  }

  renderStopButton(position) {
    return this.createButtonWithAction(VideoActions.stop, position);
  }

  renderVolumeControls(position) {
    const volume = "Volume: " + this.state.volume;
    return (
        <view localPosition={position}>
          <button localPosition={[-0.35, 0, 0]} 
                  textSize={0.1}
                  width={0.1} 
                  height={0.1}
                  roundness={0} 
                  onClick={this.onVolumeDownClick}>
                    -
          </button>

          <text alignment={'center-center'} textSize={0.08}>{volume}</text>

          <button localPosition={[0.35, 0, 0]} 
                  textSize={0.1}
                  width={0.1} 
                  height={0.1}
                  roundness={0} 
                  onClick={this.onVolumeUpClick}>
                    +
          </button>
        </view>
     );
  }

  render() {
    const resolution = [1280, 720];
    const widthInMeters = 0.8;
    const size = [widthInMeters, (resolution[1] * widthInMeters) / resolution[0]];
    return (
      <view localPosition={this.props.localPosition}>

        <video
          localPosition={[0, 0.4, 0]}
          looping={this.state.isLooping}
          width={resolution[0]}
          height={resolution[1]}
          size={size}
          anchorPosition={[0.5 * size[0], 0.5 * size[1], 0]}
          videoPath={require('../../resources/video.mp4')}
          viewMode={'full-area'}
          volume={this.state.volume}
          action={this.state.action}
        />

        {this.renderVolumeControls([0, 0.08, 0])}
        {this.renderPlayOrPauseButton([-0.2, -0.15, 0])}
        {this.renderStopButton([0.2, -0.15, 0])}
        
        <toggle 
          localPosition={[0.3, -0.4, 0]} 
          height={0.1} 
          textSize={0.08} 
          on={this.state.isLooping} 
          onToggleChanged={this.onToggleChanged}>
          Looping
        </toggle>
      </view>
    );
  }
}

export { SceneVideo };
