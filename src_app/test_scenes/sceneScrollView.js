import React from 'react';
// import { Button, GridLayout, Text } from 'magic-script-components-react-native';

class SceneScrollView extends React.Component {
	constructor(props) {
		super(props);
		this.default = {
			width: 0.0,
			height: 0.0,
			offsetY: 0.4,
		};
		this.state = this.default;
	}

	renderBounds() {
		const minX = -0.5
		const maxX = 0.5
		const minY = -0.5 + this.state.offsetY
		const maxY = 0.5 + this.state.offsetY
		var points = [
			[minX, minY, 0],
			[minX, maxY, 0],
			[maxX, maxY, 0]
		];

		return <line points={points} color={[1, 1, 0.3, 1]} />;
	}

	renderButton({
		title,
		enabled = true,
		roundness = 0.0,
		textColor = [0, 1, 0, 1],
		textSize = 0.1,
		width = 0.0,
		height = 0.0,
		onClick = () => { },
	}) {
		return (
			<button
				enabled={enabled}
				textColor={textColor}
				textSize={textSize}
				roundness={roundness}
				width={width}
				height={height}
				onClick={onClick}
			>{title}</button>
		);
	}

	layoutScene() {
		return (
			<linearLayout
				orientation={'horizontal'}>
				<linearLayout
					defaultItemAlignment={'center-left'}
					defaultItemPadding={[0.07, 0, 0.07, 0]}>
					{this.renderButton({ textSize: 0.1, title: 'one' })}
					{this.renderButton({ textSize: 0.11, title: 'two' })}
					{this.renderButton({ textSize: 0.12, title: 'three' })}
				</linearLayout>

				<linearLayout
					defaultItemAlignment={'center-right'}
					defaultItemPadding={[0, 0.07, 0, 0.07]}>
					{this.renderButton({ textSize: 0.1, title: 'four' })}
					{this.renderButton({ textSize: 0.11, title: 'five' })}
					{this.renderButton({ textSize: 0.12, title: 'six' })}
				</linearLayout>

				<linearLayout>
					{this.renderButton({ textSize: 0.10, title: 'alpha' })}
					{this.renderButton({ textSize: 0.11, title: 'beta' })}
					{this.renderButton({ textSize: 0.12, title: 'gamma' })}
					{this.renderButton({ textSize: 0.13, title: 'delta' })}
					{this.renderButton({ textSize: 0.14, title: 'epsilon' })}
					{this.renderButton({ textSize: 0.15, title: 'zeta' })}
				</linearLayout>

			</linearLayout>
		)
	}

	render() {
		return (
			<view localPosition={this.props.localPosition}>
				<scrollView
					// width={1.07}
					// height={1.07}
					localPosition={[0, this.state.offsetY, 0]}>
					{this.layoutScene()}
				</scrollView>
				{this.renderBounds()}
			</view >
		);
	}
}

export { SceneScrollView };
