import React from 'react';
import { MathUtils } from '../utils/mathUtils';
import { Audio, AudioAction, Image, Line, SystemIcon, Toggle, View } from 'magic-script-components';

class SceneAudio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alarmSound: true, animate: true, bgSound: true, spatialSound: true, volume: 0.5, position: [0,0,0], positionAngle: 0 };
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
      const radius = 0.75;
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
    const linkColor = [1,1,0.6,0.7];
    return (
      <View>
        <View position={position}>
          <Image icon={SystemIcon.volume} width={0.2} height={0.2} color={alarmColor} />
          <Image icon={SystemIcon.volume} width={0.2} height={0.2} color={alarmColor} rotation={quat90}/>
          <Image icon={SystemIcon.volume} width={0.2} height={0.2} color={alarmColor} rotation={quat180}/>
          <Image icon={SystemIcon.volume} width={0.2} height={0.2} color={alarmColor} rotation={quat270}/>
        </View>
        <Line points={[origin, position]} color={linkColor} />
      </View>
    );
  }

  render () {
    const { animate, alarmSound, bgSound, position, spatialSound, volume } = this.state;
    const alarmColor = [1, 0.4, 0.4, 1];
    const alarmPosition = spatialSound ? position : [0, 0, 0];
    return (
      <View>
        <Audio 
          action={AudioAction.start} 
          looping={true} 
          mute={!bgSound} 
          path={require('../../assets/resources/bg_stereo.mp3')} 
          volume={0.4} 
        />
        <Audio 
          action={AudioAction.start} 
          looping={true} 
          mute={!alarmSound}
          path={'http://wolo-usa.com/siren6.wav'} 
          spatialSoundEnable={spatialSound} 
          spatialSoundPosition={[{ channel: 0, channelPosition: alarmPosition }]}
          volume={volume} 
        />
        <Toggle 
          position={[0.4, 0.9, 0]} 
          on={bgSound} 
          fontSize={0.08} 
          height={0.1} 
          onToggleChanged={this.onBackgroundSoundToggleChanged}
        >Background sound</Toggle>
        <Toggle 
          position={[0.4, 0.6, 0]} 
          on={alarmSound} 
          textColor={alarmColor}
          fontSize={0.08} 
          height={0.1} 
          onToggleChanged={this.onAlarmSoundToggleChanged}
        >Siren sound (remote)</Toggle>
        {alarmSound && <Toggle 
          position={[0.4, 0.45, 0]} 
          on={spatialSound} 
          textColor={alarmColor}
          fontSize={0.08} 
          height={0.1} 
          onToggleChanged={this.onSpatialSoundToggleChanged}
        >Spatial sound</Toggle>}
        {alarmSound && <Toggle 
          position={[0.4, 0.3, 0]} 
          on={animate} 
          textColor={alarmColor}
          fontSize={0.08} 
          height={0.1} 
          onToggleChanged={this.onAnimateToggleChanged}
        >Animate</Toggle>}
        {alarmSound && this.renderAlarmSpeaker(alarmPosition, alarmColor)}
      </View>
    );
  }
}

export { SceneAudio };
