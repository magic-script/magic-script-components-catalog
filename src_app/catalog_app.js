import React from 'react';
import { Button, Text, Toggle, View } from 'magic-script-components';
import { Grid } from './utils/grid';
import { SceneButton, SceneButtonOutline, SceneGridLayout, 
  SceneImage, SceneImageSlider, SceneImageRemote, 
  SceneLine, SceneLinearLayout, SceneModelStatic, SceneModelAnimated, SceneTransformations,
  SceneText, SceneAlignment, SceneTextCharacters, SceneTextLetters, 
  SceneTextEdit, SceneToggle, GameTicTacToe, SceneProgressBar,
  SceneClock, SceneRemote, SceneSpinner, SceneVideo, 
  CalendarView,
} from './test_scenes';

class CatalogApp extends React.Component {
  constructor(props) {
    super(props);

    this.scenes = [
      { name: 'Letters', component: <SceneTextLetters localPosition={[0, 0.75, 0]}/> },
      { name: 'Characters', component: <SceneTextCharacters localPosition={[0, 0.75, 0]}/> },
      { name: 'Text', component: <SceneText localPosition={[0, 0.5, 0]}/> },
      { name: 'Alignment', component: <SceneAlignment localPosition={[0, 0.5, 0]}/> },
      { name: 'Text edit', component: <SceneTextEdit localPosition={[0, 0.5, 0]}/> },
      { name: 'Button\n(properties)', component: <SceneButton localPosition={[0, 0, 0]}/> },
      { name: 'Button\n(outline)', component: <SceneButtonOutline localPosition={[0, 0, 0]}/> },
      // { name: 'Linear layout', component: <SceneLinearLayout localPosition={[0, 0.5, 0]} /> },
      { name: 'Local images', component: <SceneImage localPosition={[0, 0.5, 0]}/> },
      { name: 'Remote images', component: <SceneImageRemote localPosition={[0, 0, 0]}/> },
      { name: 'Image slider', component: <SceneImageSlider localPosition={[0, 0, 0]}/> },
      { name: 'Video', component: <SceneVideo localPosition={[0, 0, 0]}/> },
      { name: 'Model\n(static)', component: <SceneModelStatic localPosition={[0, 0, 0]}/> },
      { name: 'Model\n(animated)', component: <SceneModelAnimated localPosition={[0, 0, 0]}/> },
      { name: 'Transformations', component: <SceneTransformations localPosition={[0, 0, 0]}/> },
      { name: 'Grid layout', component: <SceneGridLayout localPosition={[0, 1.0, 0]}/> },
      { name: 'Toggle', component: <SceneToggle localPosition={[0, 0, 0]}/> },
      { name: 'Spinner', component: <SceneSpinner localPosition={[0, 0, 0]}/> },
      { name: 'Progress bar', component: <SceneProgressBar localPosition={[0, 0, 0]}/> },
      { name: 'Tic Tac Toe', component: <GameTicTacToe /> },
      { name: 'Clock', component: <SceneClock localPosition={[0, 0, 0]}/> },
      { name: 'Line', component: <SceneLine localPosition={[0, 0, 0]}/> },
      { name: 'Calendar (local)', component: <CalendarView localPosition={[0, 0, 0]}/> },
      { name: 'Calendar (remote)', component: <SceneRemote /> },
    ]
    this.state = { sceneIndex: 16, debug: false };
    this.onNextScene = this.onNextScene.bind(this);
    this.onPreviousScene = this.onPreviousScene.bind(this);
    this.onDebug = this.onDebug.bind(this);
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

  onDebug() {
    const debug = !this.state.debug;
    this.setState({ debug });
  }

  renderGrid() {
    const { debug } = this.state;
    return debug ? <Grid/> : null;
  }

  render() {
    const { sceneIndex } = this.state;
    const scene = this.scenes[sceneIndex];
    return (
      <View name='main-view' alignment={'center-center'} localScale={[0.5, 0.5, 0.5]}>
        <View alignment={'center-center'} localPosition={[0, 1.3, 0]}>
          <Button localPosition={[-0.5, 0, 0]} width={0.25} height={0.10} roundness={1} textSize={0.05} onClick={this.onPreviousScene}>Prev</Button>
          <Text localPosition={[0, 0.05, 0]} alignment={'top-center'} textAlignment={'center'} textSize={0.1} boundsSize={{ boundsSize: [0.7, 0.3], wrap: true }}>{scene.name}</Text>
          <Button localPosition={[ 0.5, 0, 0]} width={0.25} height={0.10} roundness={1} textSize={0.05} onClick={this.onNextScene}>Next</Button>
          <Toggle localPosition={[ 0.13, 0.1, 0]} height={0.08} textSize={0.08} on={this.state.debug} onToggleChanged={this.onDebug} alignment={'bottom-center'}>grid</Toggle>
        </View>
        <View alignment={'center-center'}>
          {this.renderGrid()}
          {scene.component}
        </View>
      </View>
    );
  }
}

export default CatalogApp;
