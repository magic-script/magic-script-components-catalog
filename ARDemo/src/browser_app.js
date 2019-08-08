import React from 'react';
// import { MLXrClientSession } from 'react-native-magic-script';
import { SceneUtils } from './utils/sceneUtils.js';
import { SceneA, SceneB } from './demo_scenes';
import { SceneButton, 
  SceneGridLayout,
  SceneImage, SceneImageRemote, 
  SceneLine,
  SceneModel, 
  SceneTextAlignment, SceneTextCharacters, SceneTextLetters, SceneTextMultiline, SceneTextEdit,
  SceneToggle, 
  GameTicTacToe,
  SceneProgressBar,
  SceneAlignment,
} from './test_scenes';
import CalendarView from './calendar_scene/components/CalendarView';

class BrowserApp extends React.Component {
  constructor(props) {
    super(props);

    this.scenes = [
      <SceneTextLetters localPosition={[0, 0.75, 0]}/>,
      <SceneTextCharacters localPosition={[0, 0.75, 0]}/>,
      <SceneTextAlignment localPosition={[0, 0.5, 0]}/>,
      <SceneTextMultiline localPosition={[0, 0.5, 0]}/>,
      <SceneTextEdit localPosition={[0, 0.5, 0]}/>,
      <SceneImage localPosition={[0, 0.5, 0]}/>,
      <SceneImageRemote localPosition={[0, 0, 0]}/>,
      // <SceneButton />,
      // <SceneModel localPosition={[0, 0, 0]}/>,
      <SceneGridLayout localPosition={[0, 0.5, 0]}/>,
      <SceneToggle localPosition={[0, 0, 0]}/>,
      <SceneProgressBar localPosition={[0, 0, 0]}/>,
      // <SceneA />,
      // <SceneB />,
      <GameTicTacToe />,
      <SceneAlignment localPosition={[0, 0, 0]}/>,
      <SceneLine localPosition={[0, 0, 0]}/>,
      <CalendarView />
    ]
    this.state = { sceneIndex: 2 };
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

  downloadSampleScene() {
    SceneUtils.loadFromNetwork('bundle.js', false)
    .then(scene => {
      const MyScene = scene;
      const anchorPosition = [0, 0, 0];
      this.scenes.push(<MyScene localPosition={anchorPosition} counter={0}/>);  
    })
  }

  render() {
    const { sceneIndex } = this.state;
    return (
      <view name='main-view' alignment={'center-center'}>
        <view alignment={'center-center'} localPosition={[0, 1.3, 0]}>
          <button localPosition={[-0.5, 0, 0]} width={0.25} height={0.10} roundness={1} textSize={0.05} onClick={this.onPreviousScene}>Prev</button>
          <button localPosition={[ 0.5, 0, 0]} width={0.25} height={0.10} roundness={1} textSize={0.05} onClick={this.onNextScene}>Next</button>
        </view>
        <view alignment={'center-center'}>
          {this.scenes[sceneIndex]}
        </view>
      </view>
    );
  }
}

export default BrowserApp;
