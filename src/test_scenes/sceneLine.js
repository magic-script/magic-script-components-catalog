import React from 'react';
import { Button, View, Line, Text } from 'magic-script-components';

class SceneLine extends React.Component {
	constructor(props) {
		super(props);
		this.state = { points: [] }
		this.increaseVertexCount = this.increaseVertexCount.bind(this);
		this.decreaseVertexCount = this.decreaseVertexCount.bind(this);
	}

	componentDidMount() {
		this.updatePoints(3);
	}

	increaseVertexCount() {
		const count = this.state.points.length - 1;
		if (count < 20) {
			this.updatePoints(count + 1);
		}
	}

	decreaseVertexCount() {
		const count = this.state.points.length - 1;
		if (count > 3) {
			this.updatePoints(count - 1);
		}
	}

	updatePoints(count) {
		const radius = 0.4;
		const points = [];
		for (var i = 0; i < count; ++i) {
			const angle = (2 * Math.PI) * (i / count);
			const x = radius * Math.sin(angle);
			const y = radius * Math.cos(angle);
			points.push([x, y, 0]);
    }
    if (points.length > 0) {
      points.push(points[0]);
    }
		this.setState({ points });
	}
	
  render() {
	  const { points } = this.state;
    return (
      <View position={this.props.position}>
        <Line position={[0, 0.4, 0]} points={points} color={[1, 1, 0.3, 1]}/>
        <Button position={[0.3, -0.35, 0]} width={0.3} height={0.15} fontSize={0.1} onClick={this.increaseVertexCount}>+</Button>
        <Text 
          alignment={'center-center'}
          position={[0, -0.15, 0]} 
          fontSize={0.1} 
        >{`${points.length - 1} segments`}</Text>
        <Button position={[-0.3, -0.35, 0]} width={0.3} height={0.15} fontSize={0.1} onClick={this.decreaseVertexCount}>-</Button>
      </View>
    );
  }
}

export { SceneLine };
