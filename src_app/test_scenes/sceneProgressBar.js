import React from 'react';

class SceneProgressBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value1: 0.0, value2: 0.0, value3: 0.0 }
    this.updateProgress = this.updateProgress.bind(this);
  }

  componentDidMount() {
    this.updateProgress();
    this.handler = setInterval(this.updateProgress, 100);
  }

  componentWillUnmount() {
    clearInterval(this.handler);
  }

  updateProgress() {
    // print('input: ', input);
    var { value1, value2, value3 } = this.state;
    const interval = 0.1;
    value1 = this.updateProgressValue(value1, interval, 10.0);
    value2 = this.updateProgressValue(value2, interval, 3.0);
    value3 = this.updateProgressValue(value3, interval, 1.0);
    this.setState({ value1, value2, value3 });
  }

  updateProgressValue(value, interval, duration) {
    value += interval / duration;
    if (value > 1.0) {
      value -= 1.0;
    }
    return value;
  }

  render() {
    const { value1, value2, value3 } = this.state;
    return (
      <view localPosition={this.props.localPosition}>
        <progressBar 
          alignment={'center-center'}
          localPosition={[0, 0.2, 0]} 
          value={0.33} min={0} max={1}
          width={0.5}
        />
        <progressBar 
          alignment={'center-center'}
          localPosition={[0, 0.0, 0]} 
          value={value1}
          progressColor={{
            beginColor: [0.1, 0.5, 0.9, 1],
            endColor: [0.1, 0.9, 0.5, 1]
          }}
          width={0.75}
          height={0.05}
        />
        <progressBar 
          alignment={'center-center'}
          localPosition={[0, -0.1, 0]} 
          value={value2}
          progressColor={{
            beginColor: [0.1, 0.5, 0.9, 1],
            endColor: [0.1, 0.9, 0.5, 1]
          }}
          width={0.75}
          height={0.05}
        />
        <progressBar 
          alignment={'center-center'}
          localPosition={[0, -0.2, 0]} 
          value={value3}
          progressColor={{
            beginColor: [0.1, 0.5, 0.9, 1],
            endColor: [0.1, 0.9, 0.5, 1]
          }}
          width={0.75}
          height={0.05}
        />
        <progressBar 
          alignment={'center-center'}
          localPosition={[0, -0.4, 0]} 
          value={0.9} min={-10} max={10}
          progressColor={{
            beginColor: [1, 0.1, 0.1, 1]
          }}
          width={1}
          height={0.1}
        />
      </view>
    );
  }
}

export { SceneProgressBar };
