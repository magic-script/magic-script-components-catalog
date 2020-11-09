import React from 'react';
import { Alignment, LinearLayout, ProgressBar } from 'magic-script-components';

class SceneProgressBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value1: 0.0, value2: 0.0, value3: 0.0 };
    this.updateProgress = this.updateProgress.bind(this);
    this.interval = 0.01;
  }

  componentDidMount() {
    this.updateProgress();
    this.handler = setInterval(this.updateProgress, this.interval * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handler);
  }

  updateProgress() {
    var { value1, value2, value3 } = this.state;
    value1 = this.updateProgressValue(value1, this.interval, 10.0);
    value2 = this.updateProgressValue(value2, this.interval, 3.0);
    value3 = this.updateProgressValue(value3, this.interval, 1.0);
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
      <LinearLayout 
        defaultItemAlignment={Alignment.centerCenter}
        defaultItemPadding={[0.05, 0, 0, 0]}
        itemPadding={[
          { index: 0, padding: [0, 0, 0.1, 0] },
          { index: 4, padding: [0.15, 0, 0, 0] },
        ]}
        position={this.props.position}
      >
        <ProgressBar 
          value={0.33} min={0} max={1}
          width={0.5}
        />
        <ProgressBar 
          value={value1}
          beginColor={[0.1,0.5,0.9,1]}
          endColor={[0.1,0.9,0.5,1]}
          width={0.75}
          height={0.05}
        />
        <ProgressBar 
          value={value2}
          beginColor= {[0.1,0.5,0.9,1]}
          endColor= {[0.1,0.9,0.5,1]}
          width={0.75}
          height={0.05}
        />
        <ProgressBar 
          value={value3}
          beginColor= {[0.1,0.5,0.9,1]}
          endColor= {[0.1,0.9,0.5,1]}
          width={0.75}
          height={0.05}
        />
        <ProgressBar 
          value={0.9} min={-10} max={10}
          beginColor={[1, 0.1, 0.1, 1]}
          endColor={[1, 0.1, 0.1,1]}
          width={1}
          height={0.1}
        />
      </LinearLayout>
    );
  }
}

export { SceneProgressBar };
