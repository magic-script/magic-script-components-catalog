import React from 'react';
import { MathUtils } from '../utils/mathUtils';
import { AnchorPoint, Line, Spinner, Text, View } from 'magic-script-components';

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
      <View position={position}>
        <Text fontSize={0.08} anchorPoint={AnchorPoint.bottomCenter}>{title}</Text>
        <Spinner anchorPoint={AnchorPoint.topCenter} position={[0, -0.15, 0]} height={0.1} width={0.1} type={type} value={value1} determinate={determinate}/>
        <Spinner anchorPoint={AnchorPoint.topCenter} position={[0, -0.5, 0]} height={0.3} width={0.3} type={type} value={value2} determinate={determinate}/>
      </View>
    );
  }

  render() {
    const { value1, value2 } = this.state;
    const quat = MathUtils.rotateBy(1.5707963268, [0, 0, -1]);
    return (
      <View position={this.props.position}>
        {this.renderSpinner('Sprite', [-0.3, 1.0, 0], 'sprite-animation', undefined)}
        {this.renderSpinner('Particles', [ 0.3, 1.0, 0], 'particle-package', undefined)}

        {this.renderSpinner('', [-0.3, 0.1, 0], 'sprite-animation', value1, value2)}
        {this.renderSpinner('', [ 0.3, 0.1, 0], 'particle-package', value1, value2)}
        <Line color={'white'} points={[[-0.5, 0.2, 0], [0.5, 0.2, 0]]}/>

        <Text position={[0.6, 0.7, 0]} rotation={quat} fontSize={0.08} anchorPoint={AnchorPoint.bottomLeft}>indeterminate</Text>
        <Text position={[0.6, -0.1, 0]} rotation={quat} fontSize={0.08} anchorPoint={AnchorPoint.bottomLeft}>determinate</Text>
      </View>
    );
  }
}

export { SceneSpinner };
