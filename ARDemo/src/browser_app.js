import React from 'react';
// import { MLXrClientSession } from 'react-native-magic-script';
import { SceneUtils } from './utils/sceneUtils.js';
import { SceneA, SceneB } from './demo_scenes';
import { SceneButton, SceneImage, SceneImageRemote, SceneModel, SceneText1, SceneText2, SceneTextEdit } from './test_scenes';
import { APIClient } from './api/index.js';

class BrowserApp extends React.Component {
  constructor(props) {
    super(props);

    this.scenes = [
      <SceneText1 />,
      <SceneText2 />,
      // <SceneTextEdit />,
      <SceneImage />,
      <SceneImageRemote />,
      // <SceneButton />,
      // <SceneModel />,
      // <SceneA />,
      // <SceneB />
    ]
    this.state = { sceneIndex: 0 };

    // console.log('MLXrClientSession: ', MLXrClientSession);
    // MLXrClientSession.getLocalizationStatus().then(status => {
    //   console.log('MLXrClientSession.getLocalizationStatus: ', status);
    // });
    // MLXrClientSession.getAllAnchors().then(anchors => {
    //   console.log('MLXrClientSession.getAllAnchors: ', anchors);
    // });
  }

  componentDidMount() {
    this.onClick();
    APIClient.getJSON2('https://facebook.github.io/react-native/movies.json')
    // .then(response => console.log('[axios] response: ', response.data))
    // .catch(error => console.log('[axios] error: ', error));
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

  onClick = () => {
    SceneUtils.loadFromNetwork('bundle.js', false)
    .then(scene => {
      const MyScene = scene;
      const anchorPosition = [0, 0, 0];
      this.scenes.push(<MyScene localPosition={anchorPosition} counter={0}/>);  
    })
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
      </view>
    );
  }
}

export default BrowserApp;
