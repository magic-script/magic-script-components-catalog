import React from "react";

const VideoActions = {
  start: "start",
  pause: "pause",
  stop: "stop"
};

class SceneVideo extends React.Component {
  constructor(props) {
    super(props);
    this.localVideoPaths = [
      require("../../resources/video.mp4"),
      require("../../resources/video_1.mp4"),
      require("../../resources/video_2.mp4")
    ];
    this.remoteVideoPaths = [
      "http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4",
      "https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_1920_18MG.mp4"
    ];
    this.currentLocalIndex = 0;
    this.currentRemoteIndex = 0;
    this.state = {
      isLooping: false,
      action: VideoActions.pause,
      volume: 1.0,
      videoPath: this.localVideoPaths[0]
    };
  }

  onToggleChanged = (event) => {
    this.setState({ isLooping: event.On });
  }

  onStartPauseClick = () => {
    if (this.state.action === VideoActions.start) {
      this.setState({ action: VideoActions.pause });
    } else {
      this.setState({ action: VideoActions.start });
    }
  }

  onStopClick = () => {
    this.setState({ action: VideoActions.stop });
  }

  onVolumeDownClick = () => {
    const volumeNew = (this.state.volume - 0.1).toPrecision(2);
    this.setState({ volume: Math.max(0, volumeNew) });
  }

  onVolumeUpClick = () => {
    const volumeNew = (this.state.volume + 0.1).toPrecision(2);
    this.setState({ volume: Math.min(1.0, volumeNew) });
  }

  createButtonWithAction(action, position) {
    const title = action[0].toUpperCase() + action.substring(1);
    const onClickHandler =
      action === VideoActions.stop ? this.onStopClick : this.onStartPauseClick;
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
        <button
          localPosition={[-0.35, 0, 0]}
          textSize={0.1}
          width={0.1}
          height={0.1}
          roundness={0}
          onClick={this.onVolumeDownClick}
        >
          -
        </button>

        <text alignment={"center-center"} textSize={0.08}>
          {volume}
        </text>

        <button
          localPosition={[0.35, 0, 0]}
          textSize={0.1}
          width={0.1}
          height={0.1}
          roundness={0}
          onClick={this.onVolumeUpClick}
        >
          +
        </button>
      </view>
    );
  }

  onToggleLocalMovie = () => {
    const nextIndex = (this.currentLocalIndex + 1) % this.localVideoPaths.length;
    this.currentLocalIndex = nextIndex;
    this.setState({ videoPath: this.localVideoPaths[nextIndex] });
  }

  onToggleRemoteMovie = () => {
    const nextIndex = (this.currentRemoteIndex + 1) % this.remoteVideoPaths.length;
    this.currentRemoteIndex = nextIndex;
    this.setState({ videoPath: this.remoteVideoPaths[nextIndex] });
  }

  renderToggleLocalMovieButton(position) {
    const title = "Toggle local movie";
    const onClickHandler = this.onToggleLocalMovie;
    return (
      <button
        localPosition={position}
        textSize={0.075}
        width={0.6}
        height={0.12}
        onClick={onClickHandler}
      >
        {title}
      </button>
    );
  }

  renderToggleRemoteMovieButton(position) {
    const title = "Toggle remote movie";
    const onClickHandler = this.onToggleRemoteMovie;
    return (
      <button
        localPosition={position}
        textSize={0.075}
        width={0.7}
        height={0.12}
        onClick={onClickHandler}
      >
        {title}
      </button>
    );
  }

  render() {
    const resolution = [1920, 1080];
    const widthInMeters = 1.4;
    const size = [
      widthInMeters,
      (resolution[1] * widthInMeters) / resolution[0]
    ];
    return (
      <view localPosition={this.props.localPosition}>
        <video
          localPosition={[0, 0.75, 0]}
          looping={this.state.isLooping}
          width={resolution[0]}
          height={resolution[1]}
          size={size}
          anchorPosition={[0.5 * size[0], 0.5 * size[1], 0]}
          videoPath={this.state.videoPath}
          viewMode={"full-area"}
          volume={this.state.volume}
          action={this.state.action}
        />

        {this.renderVolumeControls([0, 0.15, 0])}
        {this.renderPlayOrPauseButton([-0.19, -0.05, 0])}
        {this.renderStopButton([0.19, -0.05, 0])}
        {this.renderToggleLocalMovieButton([0.0, -0.22, 0])}
        {this.renderToggleRemoteMovieButton([0.0, -0.38, 0])}

        <toggle
          localPosition={[0.2, -0.52, 0]}
          height={0.1}
          textSize={0.075}
          on={this.state.isLooping}
          onToggleChanged={this.onToggleChanged}
        >
          Looping
        </toggle>
      </view>
    );
  }
}

export { SceneVideo };
