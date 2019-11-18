import React from 'react';

class SceneAudio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animate: true, bgSound: true, spatialSound: true, volume: 4, position: [0,0,0] };
  }

  onAnimateToggleChanged = event => {
    this.setState({ animate: !this.state.animate });
  }

  onSpatialSoundToggleChanged = event => {
    this.setState({ spatialSound: !this.state.spatialSound });
  }

  onBackgroundSoundToggleChanged = event => {
    this.setState({ bgSound: !this.state.bgSound });
  }

  render () {
    const { animate, bgSound, position, spatialSound, volume } = this.state;
    return (
      <view localPosition={this.props.localPosition}>
        <audio 
          fileName={require('../../resources/bg_stereo.mp3')} 
          action={'start'} 
          soundMute={!bgSound} 
          soundLooping={true} 
          soundVolumeLinear={8} 
        />
        <audio 
          fileName={'http://soundbible.com/mp3/Warning%20Siren-SoundBible.com-898272278.mp3'} 
          action={'start'} 
          soundLooping={true} 
          soundVolumeLinear={volume} 
          spatialSoundEnable={spatialSound} 
          spatialSoundPosition={{ 'channel': 0, channelPosition: position }}
        />
        <toggle 
          localPosition={[0.4, 0.8, 0]} 
          on={animate} 
          textSize={0.08} 
          height={0.1} 
          onToggleChanged={this.onAnimateToggleChanged}
        >Animate</toggle>
        <toggle 
          localPosition={[0.4, 0.6, 0]} 
          on={spatialSound} 
          textSize={0.08} 
          height={0.1} 
          onToggleChanged={this.onSpatialSoundToggleChanged}
        >Spatial sound</toggle>
        <toggle 
          localPosition={[0.4, 0.4, 0]} 
          on={bgSound} 
          textSize={0.08} 
          height={0.1} 
          onToggleChanged={this.onBackgroundSoundToggleChanged}
        >Background sound</toggle>
      </view>
    );
  }
}

export { SceneAudio };
