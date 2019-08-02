import React from 'react';

class SceneAlignment extends React.Component {
  state = { seconds: 0, minutes: 0, hours: 0 }

  componentDidMount() {
    this.updateTime();
    this.handler = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handler);
  }

  updateTime = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    this.setState({ seconds, minutes, hours });
  }

  renderItems(center, radius) {
    const items = [
      { alignment: 'top-center', hour: '12' },
      { alignment: 'top-right', hour: '1' },
      { alignment: 'top-right', hour: '2' },
      { alignment: 'center-right', hour: '3' },
      { alignment: 'bottom-right', hour: '4' },
      { alignment: 'bottom-right', hour: '5' },
      { alignment: 'bottom-center', hour: '6' },
      { alignment: 'bottom-left', hour: '7' },
      { alignment: 'bottom-left', hour: '8' },
      { alignment: 'center-left', hour: '9' },
      { alignment: 'top-left', hour: '10' },
      { alignment: 'top-left', hour: '11' },
    ];

    return items.map((item, index) => {
      const angle = index * ((2 * Math.PI) / items.length);
      const x = center.x + radius * Math.sin(angle);
      const y = center.y + radius * Math.cos(angle);
      return (
        <text
          key={index}
          localPosition={[x, y, 0]}
          alignment={item.alignment}
          textSize={0.1}
        >{item.hour}</text>
      );
    });
  }

  renderClockHand(center, length, width, angle) {
    const v = { x: 0, y: 0, z: -1 };
    const s = Math.sin(angle / 2);
    const quat = {
      x: v.x * s,
      y: v.y * s,
      z: v.z * s,
      w: Math.cos(angle / 2),
    };

    return (
      <view
        localPosition={[center.x, center.y, 0]}
        localRotation={[quat.x, quat.y, quat.z, quat.w]}
      >
        <text 
          alignment={'bottom-center'}
          localScale={[width, length, 1]}
          textSize={1}
        >|</text>
      </view>
      
    );
  }

  render () {
    const { seconds, minutes, hours } = this.state;
    const center = { x: 0, y: 0 };
    const radius = 0.7;
    const angleSeconds = seconds * ((2 * Math.PI) / 60);
    const angleMinutes = minutes * ((2 * Math.PI) / 60);
    const angleHours = hours * ((2 * Math.PI) / 12);
    return (
      <view localPosition={this.props.localPosition}>
        {this.renderItems(center, radius)}
        <button
          localPosition={[center.x, center.y, 0]}
          textSize={0.1}
          roundness={1}
          width={2*radius + 0.1}
          height={2*radius + 0.1}
        >{'Clock face'}</button>
        {this.renderClockHand(center, 0.95 * radius, 0.1, angleSeconds)}
        {this.renderClockHand(center, 0.75 * radius, 0.3, angleMinutes)}
        {this.renderClockHand(center, 0.5 * radius, 0.4, angleHours)}
      </view>
    );
  }
}

export { SceneAlignment };
