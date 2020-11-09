import React from "react";
import { AnchorPoint, Button, Text, View } from "magic-script-components";
import { MathUtils  } from "../utils/mathUtils";

class SceneClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, minutes: 0, hours: 0 };
    this.updateTime = this.updateTime.bind(this);
  }

  componentDidMount() {
    this.updateTime();
    this.handler = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handler);
  }

  updateTime() {
    const platformDate = new Date();
    const nowUTC = Date.UTC(
      platformDate.getUTCFullYear(),
      platformDate.getUTCMonth(),
      platformDate.getUTCDate(),
      platformDate.getUTCHours(),
      platformDate.getUTCMinutes(),
      platformDate.getUTCSeconds()
    );

    const date = new Date(nowUTC);
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    this.setState({ seconds, minutes, hours });
  }

  renderItems(center, radius) {
    const items = [
      { anchorPoint: AnchorPoint.topCenter, hour: '12' },
      { anchorPoint: AnchorPoint.topRight, hour: '1' },
      { anchorPoint: AnchorPoint.topRight, hour: '2' },
      { anchorPoint: AnchorPoint.centerRight, hour: '3' },
      { anchorPoint: AnchorPoint.bottomRight, hour: '4' },
      { anchorPoint: AnchorPoint.bottomRight, hour: '5' },
      { anchorPoint: AnchorPoint.bottomCenter, hour: '6' },
      { anchorPoint: AnchorPoint.bottomLeft, hour: '7' },
      { anchorPoint: AnchorPoint.bottomLeft, hour: '8' },
      { anchorPoint: AnchorPoint.centerLeft, hour: '9' },
      { anchorPoint: AnchorPoint.topLeft, hour: '10' },
      { anchorPoint: AnchorPoint.topLeft, hour: '11' }
    ];

    return items.map((item, index) => {
      const angle = index * ((2 * Math.PI) / items.length);
      const x = center.x + radius * Math.sin(angle);
      const y = center.y + radius * Math.cos(angle);
      return (
        <Text
          key={index}
          position={[x, y, 0]}
          anchorPoint={item.anchorPoint}
          fontSize={0.1}
        >
          {item.hour}
        </Text>
      );
    });
  }

  renderClockHand(center, length, width, angle) {
    const quat = MathUtils.rotateBy(angle, [0, 0, -1]);

    return (
      <View position={[center.x, center.y, 0]} rotation={quat}>
        <Text
          anchorPoint={AnchorPoint.bottomCenter}
          scale={[width, length, 1]}
          fontSize={1}
        >
          |
        </Text>
      </View>
    );
  }

  render() {
    const { seconds, minutes, hours } = this.state;
    const center = { x: 0, y: 0 };
    const radius = 0.7;
    const angleSeconds = seconds * ((2 * Math.PI) / 60);
    const angleMinutes = (minutes + seconds / 60) * ((2 * Math.PI) / 60);
    const angleHours = (hours + minutes / 60) * ((2 * Math.PI) / 12);
    return (
      <View position={this.props.position}>
        {this.renderItems(center, 0.9 * radius)}
        <Button
          enabled={false}
          position={[center.x, center.y, 0]}
          fontSize={0.1}
          roundness={1}
          width={2 * radius + 0.1}
          height={2 * radius + 0.1}
        >
          {"Clock face"}
        </Button>
        {this.renderClockHand(center, 0.95 * radius, 0.1, angleSeconds)}
        {this.renderClockHand(center, 0.75 * radius, 0.3, angleMinutes)}
        {this.renderClockHand(center, 0.5 * radius, 0.4, angleHours)}
      </View>
    );
  }
}

SceneClock.defaultProps = {
  position: [0, 0, 0]
};

export { SceneClock };
