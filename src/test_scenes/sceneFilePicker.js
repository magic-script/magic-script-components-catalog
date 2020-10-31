import React from "react";
import { View, FilePicker, LinearLayout, Image, Toggle } from 'magic-script-components';
class SceneFilePicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: "",
            audio: "",
            mute: false
        };
    }

    onImageSelected = event => {
        this.setState({ image: event.filePath })
    };

    onAudioSelected = event => {
        this.setState({ audio: event.filePath })
    };

    onMute = event => {
        this.setState({ mute: !this.state.mute });
      }

    render() {
        const { image, audio, mute } = this.state;
        return (
            <View position={this.props.position}>
                <LinearLayout
                    position={[0, 0, 0]}
                    alignment={"center-center"}
                    columns={1}
                    defaultItemAlignment={"center-left"}
                    defaultItemPadding={[0.07, 0, 0.07, 0]}
                    orientation={"vertical"}>

                    <FilePicker width={1} height={0.4} fileType="image/*" onFileSelected={this.onImageSelected}>Image Picker</FilePicker>

                    <Image
                        filePath={image}
                        width={0.75}
                        height={0.75} />

                    <FilePicker width={1} height={0.4} fileType="audio/*" onFileSelected={this.onAudioSelected}>Audio Picker</FilePicker>

                    <Audio
                        fileName={audio}
                        action={'start'}
                        soundLooping={true}
                        soundMute={mute}
                        soundVolumeLinear={'4.0'}/>
                    <Toggle
                        on={!mute}
                        fontSize={0.08}
                        height={0.1}
                        onToggleChanged={this.onMute}>Play sound</Toggle>
                </LinearLayout>
            </View>
        );
    }
}

export { SceneFilePicker };
