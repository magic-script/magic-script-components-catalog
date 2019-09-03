import React from 'react';
// import { Button, Text, View } from 'react-native-magic-script';
import { Button, Text, View } from './utils/components.js';
// import { SceneA, SceneB } from './demo_scenes';
import { SceneButton, SceneGridLayout, SceneImage, SceneImageRemote, SceneLine, SceneModel, 
  SceneTextAlignment, SceneAlignmentUpdate, SceneTextCharacters, SceneTextLetters, 
  SceneTextMultiline, SceneTextEdit,SceneToggle, GameTicTacToe, SceneProgressBar,
  SceneAlignment, SceneRemote, SceneSpinner, SceneVideo
} from './test_scenes';
import CalendarView from './calendar_scene/components/CalendarView';

class CatalogApp extends React.Component {
  constructor(props) {
    super(props);

    this.scenes = [
      { name: 'Letters', component: <SceneTextLetters localPosition={[0, 0.75, 0]}/> },
      { name: 'Characters', component: <SceneTextCharacters localPosition={[0, 0.75, 0]}/> },
      { name: 'Text alignment', component: <SceneTextAlignment localPosition={[0, 0.5, 0]}/> },
      { name: 'Text alignment (multiline)', component: <SceneTextMultiline localPosition={[0, 0.5, 0]}/> },
      // { name: 'Alignment update', component: <SceneAlignmentUpdate localPosition={[0, 0.5, 0]}/> },
      { name: 'Text edit', component: <SceneTextEdit localPosition={[0, 0.5, 0]}/> },
      // { name: 'Buttons', component: <SceneButton /> },
      { name: 'Local images', component: <SceneImage localPosition={[0, 0.5, 0]}/> },
      { name: 'Remote images', component: <SceneImageRemote localPosition={[0, 0, 0]}/> },
      // { name: 'Video', component: <SceneVideo localPosition={[0, 0, 0]}/> },
      // { name: 'Model 3D', component: <SceneModel localPosition={[0, 0, 0]}/> },
      { name: 'Grid layout', component: <SceneGridLayout localPosition={[0, 0.5, 0]}/> },
      { name: 'Toggle', component: <SceneToggle localPosition={[0, 0, 0]}/> },
      { name: 'Spinner', component: <SceneSpinner localPosition={[0, 0, 0]}/> },
      { name: 'Progress bar', component: <SceneProgressBar localPosition={[0, 0, 0]}/> },
      // // { name: '', component: <SceneA /> },
      // // { name: '', component: <SceneB /> },
      { name: 'Tic Tac Toe', component: <GameTicTacToe /> },
      { name: 'Clock (alignment)', component: <SceneAlignment localPosition={[0, 0, 0]}/> },
      { name: 'Line', component: <SceneLine localPosition={[0, 0, 0]}/> },
      // { name: 'Calendar (local)', component: <CalendarView /> },
      // { name: 'Calendar (remote)', component: <SceneRemote /> },
    ]
    this.state = { sceneIndex: 10 };
    this.onNextScene = this.onNextScene.bind(this);
    this.onPreviousScene = this.onPreviousScene.bind(this);
  }

  onNextScene() {
    const { sceneIndex } = this.state;
    const nextIndex = (sceneIndex + 1) % this.scenes.length;
    this.setState({ sceneIndex: nextIndex });
  }

  onPreviousScene() {
    const { sceneIndex } = this.state;
    const prevIndex = (sceneIndex > 0) ? sceneIndex - 1 : this.scenes.length - 1;
    this.setState({ sceneIndex: prevIndex });
  }

  render() {
    const { sceneIndex } = this.state;
    const scene = this.scenes[sceneIndex];
    return (
      <View name='main-view' alignment={'center-center'} localScale={[0.5, 0.5, 0.5]}>
        <View alignment={'center-center'} localPosition={[0, 1.3, 0]}>
          <button localPosition={[-0.5, 0, 0]} width={0.25} height={0.10} roundness={1} textSize={0.05} onClick={this.onPreviousScene}>Prev</button>
          <text localPosition={[0, 0.05, 0]} alignment={'top-center'} textAlignment={'center'} textSize={0.1} boundsSize={{ boundsSize: [0.7, 0.3], wrap: true }}>{scene.name}</text>
          <button localPosition={[ 0.5, 0, 0]} width={0.25} height={0.10} roundness={1} textSize={0.05} onClick={this.onNextScene}>Next</button>
        </View>
        <View alignment={'center-center'}>
          {scene.component}
        </View>
      </View>
    );
  }
}

export default CatalogApp;
