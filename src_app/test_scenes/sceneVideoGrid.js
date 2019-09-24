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
      "http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4",
      "https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_1920_18MG.mp4",
      require("../../resources/video_2.mp4")
    ];
    this.state = { action: VideoActions.pause };
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

  createButtonWithAction(action) {
    const title = action[0].toUpperCase() + action.substring(1);
    const onClickHandler = (action === VideoActions.stop) ? this.onStopClick : this.onStartPauseClick;
    return (
      <button
        textSize={0.1}
        width={0.3}
        height={0.12}
        onClick={onClickHandler}
      >
        {title}
      </button>
    );
  }

  renderPlayOrPauseButton() {
    const { action } = this.state;
    if (action === VideoActions.start) {
      return this.createButtonWithAction(VideoActions.pause);
    } else {
      return this.createButtonWithAction(VideoActions.start);
    }
  }

  renderStopButton() {
    return this.createButtonWithAction(VideoActions.stop);
  }

  renderVideoNodes() {
    let videoNodes = [];
    for (let videoPath of this.videoPaths) {
      videoNodes.push(this.renderVideoNode(videoPath));
    }
    return videoNodes;
  }

  renderVideoNode(videoPath) {
    const resolution = [1920, 1080];
    const widthInMeters = 0.8;
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
          {this.renderPlayOrPauseButton()}
          {this.renderStopButton()}
        </gridLayout>
      </view>
    );
  }
}

export { SceneVideoGrid };
