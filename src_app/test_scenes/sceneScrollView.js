import React from 'react';

import {
	CalendarView,
	GameTicTacToe,
	SceneAlignment,
	SceneButton,
	SceneButtonOutline,
	SceneClock,
	SceneGridLayout,
	SceneImage,
	SceneImageRemote,
	SceneImageSlider,
	SceneLine,
	SceneLinearLayout,
	SceneModelAnimated,
	SceneModelStatic,
	SceneProgressBar,
	SceneRemote,
	SceneScrollBar,
	SceneSpinner,
	SceneSystemIcons,
	SceneText,
	SceneTextCharacters,
	SceneTextEdit,
	SceneTextLetters,
	SceneToggle,
	SceneTransformations,
	SceneVideo,
	SceneVideoGrid,
	SceneSlider
} from './index.js';

class SceneScrollView extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			width: 1.0,
			height: 1.2,
			sceneIndex: 10
		}

		this.scenes = [
			// { name: 'ScrollView', component: <SceneScrollView /> },
			{ name: 'ScrollBar', component: <SceneScrollBar /> },
			{ name: 'Letters', component: <SceneTextLetters /> },
			{ name: 'Characters', component: <SceneTextCharacters /> },
			// { name: 'Icons', component: <SceneSystemIcons /> },
			{ name: 'Text', component: <SceneText /> },
			{ name: 'Alignment', component: <SceneAlignment /> },
			{ name: 'Text edit', component: <SceneTextEdit /> },
			{ name: 'Button\n(properties)', component: <SceneButton /> },
			{ name: 'Button\n(outline)', component: <SceneButtonOutline /> },
			{ name: 'Linear layout', component: <SceneLinearLayout /> },
			{ name: 'Local images', component: <SceneImage /> },
			{ name: 'Remote images', component: <SceneImageRemote /> },
			{ name: 'Image slider', component: <SceneImageSlider /> },
			// { name: 'Video', component: <SceneVideo /> },
			// { name: 'VideoGrid', component: <SceneVideoGrid /> },
			// { name: 'Model\n(static)', component: <SceneModelStatic /> },
			// { name: 'Model\n(animated)', component: <SceneModelAnimated /> },
			// { name: 'Transformations', component: <SceneTransformations /> },
			{ name: 'Grid layout', component: <SceneGridLayout /> },
			{ name: 'Toggle', component: <SceneToggle /> },
			{ name: 'Spinner', component: <SceneSpinner /> },
			{ name: 'Progress bar', component: <SceneProgressBar /> },
			{ name: 'Slider', component: <SceneSlider /> },
			{ name: 'Tic Tac Toe', component: <GameTicTacToe /> },
			{ name: 'Clock', component: <SceneClock /> },
			{ name: 'Line', component: <SceneLine /> },
			{ name: 'Calendar (local)', component: <CalendarView /> },
			{ name: 'Calendar (remote)', component: <SceneRemote /> }
		]
	}

	onNextScene = () => {
		const { sceneIndex } = this.state;
		const nextIndex = (sceneIndex + 1) % this.scenes.length;
		this.setState({ sceneIndex: nextIndex });
	}

	onPreviousScene = () => {
		const { sceneIndex } = this.state;
		const prevIndex = (sceneIndex > 0) ? sceneIndex - 1 : this.scenes.length - 1;
		this.setState({ sceneIndex: prevIndex });
	}

	renderBounds() {
		const minX = this.state.width / -2
		const maxX = this.state.width / 2
		const minY = this.state.height / -2
		const maxY = this.state.height / 2
		var points = [
			[minX, minY, 0],
			[minX, maxY, 0],
			[maxX, maxY, 0],
			[maxX, minY, 0],
			[minX, minY, 0]
		];

		return <line points={points} color={[1, 1, 0.3, 1]} />;
	}

	render() {
		const { sceneIndex } = this.state;
		const scene = this.scenes[sceneIndex];

		const aabb = {
			min: [-0.5 * this.state.width, -0.5 * this.state.height, -0.1],
			max: [0.5 * this.state.width, 0.5 * this.state.height, 0.1],
		};

		return (
			<view name='scroll-scene' alignment={'center-center'}>
				<linearLayout alignment={'center-center'}>
					<view name='scroll-view' >
						<scrollView scrollBounds={aabb} scrollDirection={'debug'}>
							{scene.component}
							<scrollBar orientation={'vertical'} width={0.02} />
							<scrollBar orientation={'horizontal'} height={0.02} />
						</scrollView>
						{this.renderBounds()}
					</view>
					<linearLayout orientation={'horizontal'} defaultItemPadding={[0.2, 0.1, 0, 0.1]}>
						<button width={0.33} height={0.15} roundness={0} textSize={0.08} onClick={this.onPreviousScene}>Prev</button>
						<button width={0.33} height={0.15} roundness={0} textSize={0.08} onClick={this.onNextScene}>Next</button>
					</linearLayout>
				</linearLayout>
			</view>
		);
	}
}

export { SceneScrollView };
