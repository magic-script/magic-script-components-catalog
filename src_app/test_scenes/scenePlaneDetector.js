import React from "react";
import { PlaneDetector } from "magic-script-components";

class ScenePlaneDetector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { planes: {} };
  }

  componentDidMount() {
    PlaneDetector.addOnPlaneDetectedObserver(this, this.onPlaneDetected);
    PlaneDetector.addOnPlaneUpdatedObserver(this, this.onPlaneUpdated);
    PlaneDetector.addOnPlaneRemovedObserver(this, this.onPlaneRemoved);
    PlaneDetector.addOnPlaneTappedObserver(this, this.onPlaneTapped);
    PlaneDetector.startDetecting({
      planeType: ["horizontal", "vertical"],
      debug: true
    });

    PlaneDetector.getAllPlanes({}, (error, result) => {
      if (error) {
        console.log("getAllPlanes - error", result);
      } else {
        console.log("getAllPlanes", result);
      }
    });
  }

  onPlaneDetected = event => {
    console.log("onPlaneDetected", event);
    const { planes } = this.state;
    planes[event.id] = event;
    this.setState({ planes: planes });
  };

  onPlaneUpdated = event => {
    console.log("onPlaneUpdated", event);
    const { planes } = this.state;
    planes[event.id] = event;
    this.setState({ planes: planes });
  };

  onPlaneRemoved = event => {
    console.log("onPlaneRemoved", event);
    const { planes } = this.state;
    if (event.id in planes) {
      delete planes[event.id];
    }
    this.setState({ planes: planes });
  };

  onPlaneTapped = event => {
    console.log("onPlaneTapped", event);
  };

  renderLine(key, points) {
    return <line points={points} color={"yellow"} key={key}/>;
  }

  renderLines() {
    var lines = [];
    var index = 0;
    const { planes } = this.state;
    for (var key in planes) {
      lines.push(this.renderLine(index, planes[key].vertices));
      index++;
    }
    return lines;
  }

  render() {
    const { planes } = this.state;
    console.log("Number of planes", Object.keys(planes).length);
    return (
      <view localScale={[2,2,2]}>{this.renderLines()}</view>
    );
  }
}

export { ScenePlaneDetector };
