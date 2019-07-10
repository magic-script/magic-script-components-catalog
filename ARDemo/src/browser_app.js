// import rollup from 'rollup';
// import virtual from 'rollup-plugin-virtual';
import React from 'react';
// var RNFS = require('react-native-fs');


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

  onClick = () => {
    // const appPath = RNFS.DocumentDirectoryPath + '/app/bin/src/app.js';

    // const result = rollup.rollup({
    //   entry: appPath,
    //   plugins: [
    //     virtual({
    //       [appPath]: 'export default 1'
    //     })
    //   ]
    // }).then(bundle => {
    //   const output = bundle.generate({
    //     format: 'iife'   // cjs, amd, es6, iife, umd
    //   });
    //   console.log('bundle.generate.output: ', result);
    //   return output.code;
    // });

    // console.log('rollup.result: ', result);

  //   return rollup.rollup({
  //     entry: 'index.js',
  //     plugins: [
  //         rollupPluginMemory({
  //             path: 'index.js',
  //             contents: source
  //         }),
  //         rollupPluginBuble({
  //             jsx: 'h',
  //             objectAssign: 'Object.assign'
  //         }),
  //         rollupPluginEs3()
  //     ]
  // }).then( bundle => {
  //     let { code, map } = bundle.generate({
  //         format: 'cjs'   // amd, es6, iife, umd
  //     });
      
  //     return code;
  // });
    let { scenes } = this.state;
    if (scenes.length == 0) {
      scenes.push(<SceneA localPosition={[0, 0.6, 0]} />);
      this.setState({ scenes });
    } else if (scenes.length == 1) {
      scenes.push(<SceneB localPosition={[0, -0.2, 0]} localRotation={[0,0,0,1]} />);
      this.setState({ scenes });
    }
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
