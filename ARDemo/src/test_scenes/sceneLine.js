import React from 'react';

class SceneLine extends React.Component {
	state = { points: [] }

	componentDidMount() {
		this.updatePoints(3);
	}

	increaseVertexCount = () => {
		const count = this.state.points.length / 2;
		if (count < 20) {
			this.updatePoints(count + 1);
		}
	}

	decreaseVertexCount = () => {
		const count = this.state.points.length / 2;
		if (count > 3) {
			this.updatePoints(count - 1);
		}
	}

	updatePoints(count) {
		const radius = 0.4;
		const points = [];
		const p0 = [0, radius, 0];
		points.push(p0);
		for (i = 1; i < count; ++i) {
			const angle = (2 * Math.PI) * (i / count);
			const x = radius * Math.sin(angle);
			const y = radius * Math.cos(angle);
			points.push([x, y, 0]);
			points.push([x, y, 0]);
		}
		points.push(p0);
		this.setState({ points });
	}
	
  render () {
		const { points } = this.state;
    return (
      <view localPosition={this.props.localPosition}>
        <line localPosition={[0, 0.4, 0]} points={points} color={[1, 1, 0.3, 1]}/>

				<button localPosition={[0.3, -0.35, 0]} width={0.3} height={0.15} textSize={0.1} onPress={this.increaseVertexCount}>+</button>
				<text 
					alignment={'center-center'}
					localPosition={[0, -0.15, 0]} 
					textSize={0.1} 
				>{`${points.length / 2} segments`}</text>
				<button localPosition={[-0.3, -0.35, 0]} width={0.3} height={0.15} textSize={0.1} onPress={this.decreaseVertexCount}>-</button>
      </view>
    );
  }
}

export { SceneLine };
