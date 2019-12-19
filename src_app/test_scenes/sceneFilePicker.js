import React from "react";

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
        this.setState({ fileName: event.filePath })
    };

    onMute = event => {
        this.setState({ mute: !this.state.mute });
      }

    render() {
        const { image, audio, mute } = this.state;
        return (
            <view localPosition={this.props.localPosition}>
                <linearLayout
                    localPosition={[0, 0, 0]}
                    alignment={"center-center"}
                    columns={1}
                    defaultItemAlignment={"center-left"}
                    defaultItemPadding={[0.07, 0, 0.07, 0]}
                    orientation={"vertical"}>

                    <filePicker width={1} height={0.4} fileType="image/*" onFileSelected={this.onImageSelected}>Image Picker</filePicker>

                    <image
                        filePath={image}
                        width={0.75}
                        height={0.75} />

                    <filePicker width={1} height={0.4} fileType="audio/*" onFileSelected={this.onAudioSelected}>Audio Picker</filePicker>

                    <audio
                        fileName={audio}
                        action={'start'}
                        soundLooping={true}
                        soundMute={mute}
                        soundVolumeLinear={'4.0'}/>
                    <toggle
                        on={!mute}
                        textSize={0.08}
                        height={0.1}
                        onToggleChanged={this.onMute}>Play sound</toggle>
                </linearLayout>
            </view>
        );
    }
}

export { SceneFilePicker };
