import React from 'react';
import { SystemIcons } from '../utils/systemIcons';
import { Image, Line, View, Text, Toggle, GridLayout } from 'magic-script-components';

class SceneSystemIcons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIconIndex: 0,
      showLuminIcons: true,
      animateFast: false
    };
    this.smallIconSize = 0.11;
  }

  componentDidMount() {
    this.updateProgress();
    this.reloadTimer()
  }

  componentWillUnmount() {
    clearInterval(this.handler);
  }

  reloadTimer() {
    clearInterval(this.handler);
    const interval = this.state.animateFast ? 0.25 : 0.75;
    this.handler = setInterval(this.updateProgress, interval * 1000);
  }

  updateProgress = () => {
    var { currentIconIndex } = this.state;
    currentIconIndex = (currentIconIndex + 1) % SystemIcons.length;
    this.setState({ currentIconIndex });
  }

  onShowLuminIconsChanged = (event) => {
    this.setState({ showLuminIcons: event.On });
  }

  onAnimateFastChanged = (event) => {
    this.setState({ animateFast: event.On }, () => this.reloadTimer());
  }

  renderIcons() {
    const { currentIconIndex, showLuminIcons } = this.state;
    const iconsCount = 8;
    const startFromIndex = (currentIconIndex - Math.floor(iconsCount / 2)) % SystemIcons.length;
    const minIconIndex = (startFromIndex >= 0) ? startFromIndex : startFromIndex + SystemIcons.length;
    const maxIconIndex = minIconIndex + iconsCount;
    var icons = [];
    var key = 0;
    for (var i = minIconIndex; i <= maxIconIndex; ++i) {
      const index = i % SystemIcons.length;
      icons.push(<Image key={key} height={this.smallIconSize} width={this.smallIconSize} icon={SystemIcons[index]} useDefaultIcon={!showLuminIcons} />);
      key += 1;
    }
    return icons;
  }

  renderSquare(length) {
    const s = 0.5 * length;
    return (
      <Line 
        color={'yellow'}
        position={[0, -1, 0]} 
        points={[[-s, s, 0], [s, s, 0], [s, -s, 0], [-s, -s, 0], [-s, s, 0] ]}
      />
    );
  }

  renderOption(position, leftText, rightText, value, callback) {
    return (
      <View position={position}>
        <Text anchorPoint={'center-right'} position={[-0.2, 0, 0]} fontSize={0.08}>{leftText}</Text>
        <Toggle height={0.1} on={value} onToggleChanged={callback}>{' '}</Toggle>
        <Text anchorPoint={'center-left'} position={[0.2, 0, 0]} fontSize={0.08}>{rightText}</Text>
      </View> 
    );
  }

  render () {
    const { currentIconIndex, showLuminIcons, animateFast } = this.state;
    const icon = SystemIcons[currentIconIndex];
    const numberOfIcons = `${currentIconIndex + 1}/${SystemIcons.length}`;
    return (
      <View position={[0, 1.0, 0]}>
        <Image anchorPoint={'top-center'} height={0.5} width={0.5} icon={icon} useDefaultIcon={!showLuminIcons} debug/>
        <Text anchorPoint={'top-center'} position={[0, -0.52, 0]} fontSize={0.08}>{icon}</Text>
        <Text anchorPoint={'top-right'} position={[0.75, -0.52, 0]} fontSize={0.08}>{numberOfIcons}</Text>
        <GridLayout
          anchorPoint={'center-center'}
          position={[0, -1, 0]}
          rows={1}
          defaultItemPadding={[0.03, 0.03, 0.03, 0.03]}
        >
          {this.renderIcons()}
        </GridLayout>

        {this.renderSquare(1.3 * this.smallIconSize)}
        {this.renderSquare(1.5 * this.smallIconSize)}
        
        {this.renderOption([0, -1.4, 0], 'Default icons', 'Lumin icons', showLuminIcons, this.onShowLuminIconsChanged)}
        {this.renderOption([0, -1.7, 0], 'Slow animation', 'Fast animation', animateFast, this.onAnimateFastChanged)}
      </View>
    );
  }
}

export { SceneSystemIcons };
