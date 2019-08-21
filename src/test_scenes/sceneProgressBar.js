import React from 'react';

class SceneProgressBar extends React.Component {
  state = { progressValue: 0 }

  componentDidMount() {
    this.updateProgress();
    this.handler = setInterval(this.updateProgress, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handler);
  }

  updateProgress = () => {
    var { progressValue } = this.state;
    if (progressValue <= 100) {
      progressValue += 10;
    } else {
      progressValue = 0;
    }
    this.setState({ progressValue });
  }

  render () {
    const { progressValue } = this.state;
    return (
      <view localPosition={this.props.localPosition}>
        <progressBar 
          alignment={'center-center'}
          localPosition={[0, 0.2, 0]} 
          value={0.33} min={0} max={1}
        />
        <progressBar 
          alignment={'center-center'}
          localPosition={[0, 0.0, 0]} 
          value={ progressValue / 100 }
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
          value={0.0}
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
          value={0.1}
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
