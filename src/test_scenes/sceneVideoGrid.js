import React from "react";
import { View, Video, Button, GridLayout } from 'magic-script-components';

const VideoActions = {
  start: "start",
  pause: "pause",
  stop: "stop"
};

class SceneVideoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.videoPaths = [
      require("../../assets/resources/video_1.mp4"),
      "http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4",
      "https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_1920_18MG.mp4",
      require("../../assets/resources/video_2.mp4")
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
      <Button
        fontSize={0.1}
        width={0.3}
        height={0.12}
        onClick={onClickHandler}
      >
        {title}
      </Button>
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
      <Video
        key={videoPath}
        looping={true}
        width={resolution[0]}
        height={resolution[1]}
        screenSize={size}
        path={videoPath}
        viewMode={"full-area"}
        volume={0.0}
        action={this.state.action}
        debug
      />
    );
  }

  render() {
    return (
      <View position={this.props.position}>
        <GridLayout
          anchorPoint={"top-center"}
          columns={2}
          rows={2}
          defaultItemAlignment={"center-center"}
          defaultItemPadding={[0.05, 0.05, 0.05, 0.05]}
          position={[0, 1.0, 0]}
        >
          {this.renderVideoNodes()}
          {this.renderPlayOrPauseButton()}
          {this.renderStopButton()}
        </GridLayout>
      </View>
    );
  }
}

export { SceneVideoGrid };
