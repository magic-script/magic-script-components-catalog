import React from 'react';
var RNFS = require('react-native-fs');
import { APIClient } from './api';
import { SceneA, SceneB } from './demo_scenes';
import { SceneText } from './test_scenes';

class BrowserApp extends React.Component {
  constructor(props) {
    super(props);

    const scenes = [
      <SceneText localPosition={[0, 0.7, 0]} />
      // <SceneA localPosition={[0, 0.7, 0]} />,
      // <SceneB localPosition={[0, -0.7, 0]} localRotation={[0,0,0,1]} />
    ]
    this.state = { scenes, sceneOffset: 0.0 };
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
    return (
      <view name='main-view'>
        <view>
          {this.renderScenes()}
        </view>
        <button 
            localPosition={[0, 1, 0]} 
            width={0.25} 
            height={0.10} 
            roundness={0.25}
            textSize={0.035}
            onClick={this.onClick}
        >Add scene</button>
      </view>
    );
  }
}

export default BrowserApp;
