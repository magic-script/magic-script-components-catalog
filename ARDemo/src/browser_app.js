import React from 'react';
// var babel = require('@babel/core');
var RNFS = require('react-native-fs');


import { Header, SceneA } from './sceneA/index.js';
import { SceneB } from './sceneB/index.js';

class BrowserApp extends React.Component {
  constructor(props) {
    super(props);

    this.images = [
      'resources/DemoPicture1.jpg',
      'resources/DemoPicture2.jpg',
      'resources/DemoPicture4.jpg',
      'resources/DemoPicture5.jpg'
    ];

    const scenes = [
      // <SceneA localPosition={[0, 0.6, 0]} />,
      // <SceneB localPosition={[0, -0.2, 0]} localRotation={[0,0,0,1]} />
    ]
    this.state = { scenes };
  }

  addScene(scene) {
    const { scenes } = this.state;
    scenes.push(scene);
    this.setState({ scenes });
  }

  onClick = () => {
    
    const sceneBundlePath = RNFS.DocumentDirectoryPath + '/bundle.js';
    RNFS.readFile(sceneBundlePath, 'utf8').then(contents => {
      const evalOutput = eval(contents);
      let MyScene = mxs;
      const anchorPosition = [0, 0.2, 0];
      this.addScene(<MyScene localPosition={anchorPosition} counter={0}/>);
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
