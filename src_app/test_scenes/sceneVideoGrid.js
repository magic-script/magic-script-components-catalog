import React from "react";

const VideoActions = {
  start: "start",
  pause: "pause",
  stop: "stop"
};

class SceneVideoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.videoPaths = [
      require("../../resources/video_1.mp4"),
      "https://sylvan.apple.com/Aerials/2x/Videos/LA_A005_C009_4K_SDR_HEVC.mov",
      "https://sylvan.apple.com/Aerials/2x/Videos/DB_D011_C010_4K_HDR_HEVC.mov",
      require("../../resources/video_2.mp4")
    ];
    this.state = {
      isLooping: false,
      action: VideoActions.pause,
    };
    this.onStartPauseClick = this.onStartPauseClick.bind(this);
    this.onStopClick = this.onStopClick.bind(this);
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

  renderVideoNodes() {
    let videoNodes = [];
    for (videoPath of this.videoPaths) {
      videoNodes.push(this.renderVideoNode(videoPath));
    }
    return videoNodes;
  }

  renderVideoNode(videoPath) {
    const resolution = [1920, 1080];
    const widthInMeters = 1.2;
    const size = [
      widthInMeters,
      (resolution[1] * widthInMeters) / resolution[0]
    ];
    return (
      <video
        key={videoPath}
        looping={true}
        width={resolution[0]}
        height={resolution[1]}
        size={size}
        anchorPosition={[0.5 * size[0], 0.5 * size[1], 0]}
        videoPath={videoPath}
        viewMode={"full-area"}
        volume={0.0}
        action={this.state.action}
      />
    );
  }

  render() {
    return (
      <view localPosition={this.props.localPosition}>
        <gridLayout
          alignment={"top-center"}
          columns={2}
          rows={2}
          defaultItemAlignment={"center-center"}
          defaultItemPadding={[0.05, 0.05, 0.05, 0.05]}
          localPosition={[0, 1.0, 0]}
        >
          {this.renderVideoNodes()}
          {this.renderPlayOrPauseButton([-0.19, -0.05, 0])}
          {this.renderStopButton([0.19, -0.05, 0])}
        </gridLayout>
      </view>
    );
  }
}

export { SceneVideoGrid };
