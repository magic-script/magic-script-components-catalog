import React from 'react';
import { MathUtils } from '../utils/mathUtils';

class SceneSpinner extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value1: 0.0, value2: 0.0 };
    this.interval = 0.01;
  }

  componentDidMount() {
    this.updateProgress();
    this.handler = setInterval(this.updateProgress, this.interval * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handler);
  }

  updateProgress = () => {
    var { value1, value2 } = this.state;
    value1 = this.updateProgressValue(value1, this.interval, 5.0);
    value2 = this.updateProgressValue(value2, this.interval, 3.0);
    this.setState({ value1, value2 });
  }

  updateProgressValue(value, interval, duration) {
    value += interval / duration;
    if (value > 1.0) {
      value -= 1.0;
    }
    return value;
  }

  renderSpinner(title, position, type, progress1, progress2) {
    const determinate = (progress1 !== undefined) ? true : false;
    const value1 = determinate ? progress1 : 0.0;
    const value2 = determinate ? progress2 : 0.0;
    return (
      <view localPosition={position}>
        <text textSize={0.08} alignment={'bottom-center'}>{title}</text>
        <spinner alignment={'top-center'} localPosition={[0, -0.15, 0]} height={0.1} size={[0.1, 0.1]} type={type} value={value1} determinate={determinate}/>
        <spinner alignment={'top-center'} localPosition={[0, -0.5, 0]} height={0.3} size={[0.3, 0.3]} type={type} value={value2} determinate={determinate}/>
      </view>
    );
  }

  render() {
    const { value1, value2 } = this.state;
    const quat = MathUtils.rotateBy(1.5707963268, [0, 0, -1]);
    return (
      <view localPosition={this.props.localPosition}>
        {this.renderSpinner('Sprite', [-0.3, 1.0, 0], 'sprite-animation', undefined)}
        {this.renderSpinner('Particles', [ 0.3, 1.0, 0], 'particle-package', undefined)}

        {this.renderSpinner('', [-0.3, 0.1, 0], 'sprite-animation', value1, value2)}
        {this.renderSpinner('', [ 0.3, 0.1, 0], 'particle-package', value1, value2)}
        <line color={[1,1,1,1]} points={[[-0.5, 0.2, 0], [0.5, 0.2, 0]]}/>

        <text localPosition={[0.6, 0.9, 0]} localRotation={quat} textSize={0.08} alignment={'bottom-left'}>indeterminate</text>
        <text localPosition={[0.6, 0.0, 0]} localRotation={quat} textSize={0.08} alignment={'bottom-left'}>determinate</text>
      </view>
    );
  }
}

export { SceneSpinner };
