import React from 'react';
import { Alignment, AnchorPoint, FitMode, GridLayout, Image, Line, LinearLayout, Orientation, SystemIcon, Text, Toggle, View } from 'magic-script-components';

class SceneSystemIcons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIconIndex: 0,
      animateFast: false
    };
    this.smallIconSize = 0.11;
    this.allIcons = Object.keys(SystemIcon).map((key) => SystemIcon[key]).sort();
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
    currentIconIndex = (currentIconIndex + 1) % this.allIcons.length;
    this.setState({ currentIconIndex });
  }

  onAnimateFastChanged = (event) => {
    this.setState({ animateFast: event.On }, () => this.reloadTimer());
  }

  renderIcons() {
    const { currentIconIndex } = this.state;
    const iconsCount = 8;
    const startFromIndex = (currentIconIndex - Math.floor(iconsCount / 2)) % this.allIcons.length;
    const minIconIndex = (startFromIndex >= 0) ? startFromIndex : startFromIndex + this.allIcons.length;
    const maxIconIndex = minIconIndex + iconsCount;
    var icons = [];
    var key = 0;
    for (var i = minIconIndex; i <= maxIconIndex; ++i) {
      const index = i % this.allIcons.length;
      icons.push(<Image key={key} height={this.smallIconSize} width={this.smallIconSize} icon={this.allIcons[index]} fit={FitMode.aspecFit} />);
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
      <LinearLayout 
        defaultItemAlignment={Alignment.centerCenter}
        defaultItemPadding={[0, 0.05, 0, 0.05]}
        orientation={Orientation.horizontal}
        position={position} 
      >
        <Text fontSize={0.08}>{leftText}</Text>
        <Toggle height={0.1} on={value} onToggleChanged={callback} debug />
        <Text fontSize={0.08}>{rightText}</Text>
      </LinearLayout> 
    );
  }

  render () {
    const { currentIconIndex, animateFast } = this.state;
    const icon = this.allIcons[currentIconIndex];
    const numberOfIcons = `${currentIconIndex + 1}/${this.allIcons.length}`;
    return (
      <View position={[0, 1.0, 0]}>
        <Image anchorPoint={AnchorPoint.topCenter} height={0.5} width={0.75} icon={icon} fit={FitMode.aspectFit} debug/>
        <Text anchorPoint={AnchorPoint.topCenter} position={[0, -0.52, 0]} fontSize={0.08}>{icon}</Text>
        <Text anchorPoint={AnchorPoint.topRight} position={[0.75, -0.52, 0]} fontSize={0.08}>{numberOfIcons}</Text>
        <GridLayout
          anchorPoint={AnchorPoint.centerCenter}
          position={[0, -1, 0]}
          rows={1}
          defaultItemPadding={[0.03, 0.03, 0.03, 0.03]}
        >
          {this.renderIcons()}
        </GridLayout>

        {this.renderSquare(1.3 * this.smallIconSize)}
        {this.renderSquare(1.5 * this.smallIconSize)}
        
        {this.renderOption([0, -1.4, 0], 'Slow animation', 'Fast animation', animateFast, this.onAnimateFastChanged)}
      </View>
    );
  }
}

export { SceneSystemIcons };
