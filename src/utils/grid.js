import React from 'react';
import { Line, View } from 'magic-script-components';

class Grid extends React.Component {
  static defaultProps = {
    bounds: [-1, 1, 1, -1], // left, top, right, bottom
    spaces: [0.1, 0.1],
    color: [0.9,0.9,0.9,0.6],
  };

  renderHorizontalLines() {
    const { bounds, spaces, color } = this.props;
    const minX = bounds[0];
    const maxX = bounds[2];
    const minY = bounds[3];
    const maxY = bounds[1];
    const deltaY = spaces[1];
    const lines = [];
    const mainColor = [color[0], color[1], color[2], 0.9];
    for (let y = minY; y <= maxY; y += deltaY) {
      const points = [[minX, y, 0], [maxX, y, 0]];
      const distToMainAxis = Math.min(Math.abs(y), Math.min(Math.abs(y - minY), Math.abs(y - maxY)));
      const lineColor = (distToMainAxis < 0.0001) ? mainColor : color;
      lines.push(<Line key={`y_${y}`} points={points} color={lineColor}/>);
    }
    return lines;
  }

  renderVerticalLines() {
    const { bounds, spaces, color } = this.props;
    const minX = bounds[0];
    const maxY = bounds[1];
    const maxX = bounds[2];
    const minY = bounds[3];
    const deltaX = spaces[0];
    const lines = [];
    const mainColor = [color[0], color[1], color[2], 0.9];
    for (let x = minX; x <= maxX; x += deltaX) {
      const points = [[x, minY, 0], [x, maxY, 0]];
      const distToMainAxis = Math.min(Math.abs(x), Math.min(Math.abs(x - minX), Math.abs(x - maxX)));
      const lineColor = (distToMainAxis < 0.0001) ? mainColor : color;
      lines.push(<Line key={`x_${x}`} points={points} color={lineColor}/>);
    }
    return lines;
  }

  render() {
    return (
      <View>
        {this.renderHorizontalLines()}
        {this.renderVerticalLines()}
      </View>
    );
  }
};

export { Grid };
