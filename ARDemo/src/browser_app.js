import React from 'react';
var RNFS = require('react-native-fs');
import { APIClient } from './api';
import { SceneA, SceneB } from './demo_scenes';
import { SceneButton, SceneImage, SceneModel, SceneText, SceneTextEdit } from './test_scenes';

class BrowserApp extends React.Component {
  constructor(props) {
    super(props);

    this.scenes = [
      <SceneText />,
      <SceneTextEdit />,
      <SceneImage />,
      // <SceneButton />,
      <SceneModel />,
      <SceneA />,
      <SceneB />
    ]
    this.state = { sceneIndex: 0 };
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

  addScene = (scene) => {
    const { scenes, sceneOffset } = this.state;
    scenes.push(scene);
    const sceneWidth = 0.3;
    const newOffset = (sceneOffset <= 0) ? -(sceneOffset - sceneWidth) : -sceneOffset;
    this.setState({ scenes, sceneOffset: newOffset });
  }

  onClick = () => {
    APIClient.fetchScene('bundle.js', (data) => {
      this.loadSceneFromString(data);
      const path = RNFS.DocumentDirectoryPath + '/bundle.js';
      this.saveSceneToFile(path, data);
    }, (error) => {
      console.log('Fetch scene error: ', error);
    });
  }

  loadSceneFromString = (contents) => {
    eval(contents);
    let MyScene = mxs;
    const anchorPosition = [this.state.sceneOffset, 0, 0];
    this.addScene(<MyScene localPosition={anchorPosition} counter={0}/>);
  }

  loadSceneFromFile = (path) => {
    RNFS.readFile(path, 'utf8').then(contents => {
      this.loadSceneFromString(contents);
    });
  }

  saveSceneToFile = (path, contents) => {
    RNFS.writeFile(path, contents, 'utf8')
    .then((success) => {
      console.log('Scene saved!');
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

  renderScenes() {
      const { scenes } = this.state;
      return scenes.map((scene, index) => {
        return (
            <view key={index}>{scene}</view>
        );
      });
  }

  render() {
    const { sceneIndex } = this.state;
    return (
      <view name='main-view'>
        <view localPosition={[0, 1.3, 0]}>
          <button localPosition={[-0.5, 0, 0]} width={0.25} height={0.10} roundness={1} textSize={0.05} onClick={this.onPreviousScene}>Prev</button>
          <button localPosition={[ 0.5, 0, 0]} width={0.25} height={0.10} roundness={1} textSize={0.05} onClick={this.onNextScene}>Next</button>
        </view>
        <view>
          {this.scenes[sceneIndex]}
        </view>
        {/* <button localPosition={[0, 1, 0]} width={0.25} height={0.10} roundness={0.25}textSize={0.035}onClick={this.onClick}>Add scene</button> */}
      </view>
    );
  }
}

export default BrowserApp;
