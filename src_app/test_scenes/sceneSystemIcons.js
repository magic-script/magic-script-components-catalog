import React from 'react';
import { SystemIcons } from '../utils/systemIcons';

class SceneSystemIcons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIconIndex: 0,
      showSystemIcons: true,
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

  onShowDefaultIconsChanged = (event) => {
    this.setState({ showSystemIcons: event.On });
  }

  onAnimateFastChanged = (event) => {
    this.setState({ animateFast: event.On }, () => this.reloadTimer());
  }

  renderIcons() {
    const { currentIconIndex, showSystemIcons } = this.state;
    const iconsCount = 8;
    const startFromIndex = (currentIconIndex - Math.floor(iconsCount / 2)) % SystemIcons.length;
    const minIconIndex = (startFromIndex >= 0) ? startFromIndex : startFromIndex + SystemIcons.length;
    const maxIconIndex = minIconIndex + iconsCount;
    var icons = [];
    for (var i = minIconIndex; i <= maxIconIndex; ++i) {
      const index = i % SystemIcons.length;
      icons.push(<image key={i} width={this.smallIconSize} height={this.smallIconSize} icon={SystemIcons[index]} useDefaultIcon={showSystemIcons} />);
    }
    return icons;
  }

  renderSquare(length) {
    const s = 0.5 * length;
    return (
      <line 
        color={[1,1,0,1]}
        localPosition={[0, -1, 0]} 
        points={[[-s, s, 0], [s, s, 0], [s, -s, 0], [-s, -s, 0], [-s, s, 0] ]}
      />
    );
  }

  renderOption(position, leftText, rightText, value, callback) {
    return (
      <view localPosition={position}>
        <text alignment={'center-right'} localPosition={[-0.2, 0, 0]} textSize={0.08}>{leftText}</text>
        <toggle height={0.1} on={value} onToggleChanged={callback}/>
        <text alignment={'center-left'} localPosition={[0.2, 0, 0]} textSize={0.08}>{rightText}</text>
      </view> 
    );
  }

  render () {
    const { currentIconIndex, showSystemIcons, animateFast } = this.state;
    const icon = SystemIcons[currentIconIndex];
    const numberOfIcons = `${currentIconIndex}/${SystemIcons.length}`;
    return (
      <view localPosition={[0, 1.0, 0]}>
        <image alignment={'top-center'} height={0.5} icon={icon} useDefaultIcon={showSystemIcons} />
        <text alignment={'top-center'} localPosition={[0, -0.52, 0]} textSize={0.08}>{icon}</text>
        <text alignment={'top-right'} localPosition={[0.75, -0.52, 0]} textSize={0.08}>{numberOfIcons}</text>
        <gridLayout
          alignment={'center-center'}
          localPosition={[0, -1, 0]}
          rows={1}
          defaultItemPadding={[0.03, 0.03, 0.03, 0.03]}
        >
          {this.renderIcons()}
        </gridLayout>

        {this.renderSquare(1.3 * this.smallIconSize)}
        {this.renderSquare(1.5 * this.smallIconSize)}
        
        {this.renderOption([0, -1.4, 0], 'Default icons', 'Lumin icons', showSystemIcons, this.onShowDefaultIconsChanged)}
        {this.renderOption([0, -1.7, 0], 'Slow animation', 'Fast animation', animateFast, this.onAnimateFastChanged)}
        {/* <view localPosition={[0, -1.4, 0]}>
          <text alignment={'center-right'} localPosition={[-0.2, 0, 0]} textSize={0.08}>Default icons</text>
          <toggle height={0.1} on={showSystemIcons} onToggleChanged={this.onShowDefaultIconsChanged}/>
          <text alignment={'center-left'} localPosition={[0.2, 0, 0]} textSize={0.08}>Lumin icons</text>
        </view>         */}
      </view>
    );
  }
}

export { SceneSystemIcons };
