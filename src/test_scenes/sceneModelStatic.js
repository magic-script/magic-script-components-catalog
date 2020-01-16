import React from 'react';
import { MathUtils } from '../utils/mathUtils';

class SceneModelStatic extends React.Component {

  constructor(props) {
    super(props);
    this.state = { angle: 0.0, rotation: [0,0,0,1] }
    this.updateProgress = this.updateAngle.bind(this);
    this.interval = 0.01;
  }

  componentDidMount() {
    this.handler = setInterval(this.updateProgress, this.interval * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handler);
  }

  updateAngle() {
    var { angle } = this.state;
    angle += this.interval * Math.PI;
    if (angle > 2 * Math.PI) {
      angle -= 2 * Math.PI;
    }
    const rotation = MathUtils.rotateBy(angle, [0, 1, 0]);
    this.setState({ angle, rotation });
  }

  render () {
    return (
      <view localPosition={this.props.localPosition}>
        <model
          modelPath={require('../../resources/BoxTextured.glb')}
          importScale={0.6}
          localRotation={this.state.rotation}
        />
      </view>
    );
  }
}

export { SceneModelStatic };
