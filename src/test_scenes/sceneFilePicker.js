import React from "react";
import { Alignment, Audio, AudioAction, FilePicker, Image, LinearLayout, Toggle, View } from 'magic-script-components';

class SceneFilePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = { image: '', audio: '', mute: false };
  }

  onImageSelected = (event) => this.setState({ image: event.filePath });
  onAudioSelected = (event) => this.setState({ audio: event.filePath });
  onMute = (event) => his.setState({ mute: !this.state.mute });

  render() {
    const { image, audio, mute } = this.state;
    return (
      <View position={this.props.position}>
        <LinearLayout
          anchorPoint={AnchorPoint.centerCenter}
          defaultItemAlignment={Alignment.centerLeft}
          defaultItemPadding={[0.07, 0, 0.07, 0]}
        >
          <FilePicker width={1} height={0.4} fileType="image/*" onFileSelected={this.onImageSelected}>Image Picker</FilePicker>

          <Image path={image} width={0.75} height={0.75} />

          <FilePicker width={1} height={0.4} fileType="audio/*" onFileSelected={this.onAudioSelected}>Audio Picker</FilePicker>

          <Audio action={AudioAction.start} looping={true} mute={mute} path={audio} vaolume={0.5} />
          <Toggle on={!mute} fontSize={0.08} height={0.1} onToggleChanged={this.onMute}>Play sound</Toggle>
        </LinearLayout>
      </View>
    );
  }
}

export { SceneFilePicker };
