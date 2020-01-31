import React from "react";
import { PlaneDetector } from "magic-script-components";

class ScenePlaneDetector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { planes: {} };
  }

  componentDidMount() {
    this.planeDetector = PlaneDetector.instance();
    this.planeDetector.addOnPlaneDetectedObserver(this, this.onPlaneDetected);
    this.planeDetector.addOnPlaneUpdatedObserver(this, this.onPlaneUpdated);
    this.planeDetector.addOnPlaneRemovedObserver(this, this.onPlaneRemoved);
    this.planeDetector.addOnPlaneTappedObserver(this, this.onPlaneTapped);
    this.planeDetector.startDetecting({
      planeType: ["horizontal", "vertical"]
    });

    this.planeDetector.getAllPlanes({}, (error, result) => {
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
    return <line points={points} color={"green"} key={key}/>;
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
    console.log("BUKA", Object.keys(planes).length);
    return (
      <view>{this.renderLines()}</view>
    );
  }
}

export { ScenePlaneDetector };
