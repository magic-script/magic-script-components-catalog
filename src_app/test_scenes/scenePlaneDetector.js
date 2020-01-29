import React from "react";
import { PlaneDetector } from "magic-script-components";

class ScenePlaneDetector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { points: {} };
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
    // const { points } = this.state;
    // points[event.id] = event.vertices;
    // this.setState({ points: points });
  };

  onPlaneUpdated = event => {
    console.log("onPlaneUpdated", event);
    // const { points } = this.state;
    // points[event.id] = event.vertices;
    // this.setState({ points: points });
  };

  onPlaneRemoved = event => {
    // console.log("onPlaneRemoved", event);
  };

  onPlaneTapped = event => {
    // console.log("onPlaneTapped", event);
  };

  renderLine(points) {
    return <line points={points} color={"green"} />;
  }

  renderLines() {
    var lines = [];
    const { points } = this.state;
    for (var key in points) {
      lines.push(this.renderLine(points[key]));
    }
    return lines;
  }

  render() {
    return (
      <view localPosition={this.props.localPosition}>{this.renderLines()}</view>
    );
  }
}

export { ScenePlaneDetector };
