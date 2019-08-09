import React from 'react';
import { SceneUtils } from '../utils/sceneUtils';

const calendarSceneUrl = 'https://firebasestorage.googleapis.com/v0/b/components-storage.appspot.com/o/calendar_bundle.js?alt=media&token=461800be-7f56-46fa-89fb-ff54420f9bea';
class SceneRemote extends React.Component {

	constructor(props) {
    super(props);

		this.state = { scenes: [] };
		this.onAddScene.bind(this);
		this.offset = 0.0;
  }

	onAddScene() {
		SceneUtils.loadFromNetwork(calendarSceneUrl, false)
		.then(scene => {

			const MyScene = scene;
			const anchorPosition = [0, -0.2 + this.offset, 0];
			let { scenes } = this.state;
			scenes.push(<MyScene localPosition={anchorPosition}/>);
			this.setState({ scenes });
			this.offset -= 0.7;
		})
	}

	renderScenes() {
		const { scenes } = this.state;
		if (scenes === undefined) {
			return null;
		}
		return scenes.map((scene, index) => {
			return (<view key={index}>{scene}</view>);
		});
	}

  render () {
    return (
      <view>
				<button localPosition={[0, 0.7, 0]} roundness={1} textSize={0.08} onClick={() => { this.onAddScene(); }}>{'Add scene'}</button>
				{this.renderScenes()}
			</view>
    );
  }
}

export { SceneRemote };
