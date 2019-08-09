import React from 'react';
import CalendarView from '../calendar_scene/components/CalendarView';

class SceneRemote extends React.Component {

	downloadSampleScene() {
		SceneUtils.loadFromNetwork('https://firebasestorage.googleapis.com/v0/b/components-storage.appspot.com/o/bundle.js?alt=media&token=7441d26e-e7dd-4862-92cc-b199a36f6596', false)
		.then(scene => {
			// const MyScene = scene;
			// const anchorPosition = [0, 0, 0];
			// this.scenes.push({
			// 	name: 'Remote scene',
			// 	component: <MyScene localPosition={anchorPosition}/> 
			// });
		})
	}

  render () {
    return (
      <CalendarView />
    );
  }
}

export { SceneRemote };
