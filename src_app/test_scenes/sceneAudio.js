import React from 'react';
import { MathUtils } from '../utils/mathUtils';

class SceneAudio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alarmSound: true, animate: true, bgSound: true, spatialSound: true, volume: 4, position: [0,0,0], positionAngle: 0 };
    this.interval = 0.01;
  }

  componentDidMount() {
    this.updatePosition();
    this.handler = setInterval(this.updatePosition, this.interval * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handler);
  }

  updatePosition = () => {
    const { animate, positionAngle } = this.state;
    if (animate) {
      const deltaAngle = 0.25 * 2 * Math.PI * this.interval;
      const radius = 2.0;
      const x = radius * Math.sin(positionAngle);
      const z = radius * Math.cos(positionAngle);
      this.setState({ positionAngle: positionAngle + deltaAngle, position: [x, 0, z] });
    }
  }

  onBackgroundSoundToggleChanged = event => {
    this.setState({ bgSound: !this.state.bgSound });
  }

  onAlarmSoundToggleChanged = event => {
    this.setState({ alarmSound: !this.state.alarmSound });
  }

  onSpatialSoundToggleChanged = event => {
    this.setState({ spatialSound: !this.state.spatialSound });
  }

  onAnimateToggleChanged = event => {
    this.setState({ animate: !this.state.animate });
  }

  renderAlarmSpeaker(position, alarmColor) {
    const quat90 = MathUtils.rotateBy(0.5 * Math.PI, [0, 1, 0]);
    const quat180 = MathUtils.rotateBy(Math.PI, [0, 1, 0]);
    const quat270 = MathUtils.rotateBy(-0.5 * Math.PI, [0, 1, 0]);
    const origin = [0,0,0];
    const linkColor = [255,255,153,0.7];
    return (
      <view>
        <view localPosition={position}>
          <image icon={'volume'} height={0.2} color={alarmColor}/>
          <image icon={'volume'} height={0.2} color={alarmColor} localRotation={quat90}/>
          <image icon={'volume'} height={0.2} color={alarmColor} localRotation={quat180}/>
          <image icon={'volume'} height={0.2} color={alarmColor} localRotation={quat270}/>
        </view>
        <line points={[origin, position]} color={linkColor} />
      </view>
    );
  }

  render () {
    const { animate, alarmSound, bgSound, position, spatialSound, volume } = this.state;
    const alarmColor = [255, 102, 102, 1];
    const alarmPosition = spatialSound ? position : [0, 0, 0];
    return (
      <view localPosition={this.props.localPosition}>
        <audio 
          fileName={require('../../resources/bg_stereo.mp3')} 
          action={'start'} 
          soundMute={!bgSound} 
          soundLooping={true} 
          soundVolumeLinear={3} 
        />
        <audio 
          fileName={'http://wolo-usa.com/siren6.wav'} 
          action={'start'} 
          soundLooping={true} 
          soundMute={!alarmSound}
          soundVolumeLinear={volume} 
          spatialSoundEnable={spatialSound} 
          spatialSoundPosition={{ 'channel': 0, channelPosition: alarmPosition }}
        />
        <toggle 
          localPosition={[0.4, 0.9, 0]} 
          on={bgSound} 
          textSize={0.08} 
          height={0.1} 
          onToggleChanged={this.onBackgroundSoundToggleChanged}
        >Background sound</toggle>
        <toggle 
          localPosition={[0.4, 0.6, 0]} 
          on={alarmSound} 
          textColor={alarmColor}
          textSize={0.08} 
          height={0.1} 
          onToggleChanged={this.onAlarmSoundToggleChanged}
        >Siren sound (remote)</toggle>
        {alarmSound && <toggle 
          localPosition={[0.4, 0.45, 0]} 
          on={spatialSound} 
          textColor={alarmColor}
          textSize={0.08} 
          height={0.1} 
          onToggleChanged={this.onSpatialSoundToggleChanged}
        >Spatial sound</toggle>}
        {alarmSound && <toggle 
          localPosition={[0.4, 0.3, 0]} 
          on={animate} 
          textColor={alarmColor}
          textSize={0.08} 
          height={0.1} 
          onToggleChanged={this.onAnimateToggleChanged}
        >Animate</toggle>}

        {alarmSound && this.renderAlarmSpeaker(alarmPosition, alarmColor)}
      </view>
    );
  }
}

export { SceneAudio };
