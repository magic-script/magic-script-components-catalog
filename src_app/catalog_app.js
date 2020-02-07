import React from 'react';
import { Button, Text, Toggle, View, DropdownList, DropdownListItem, Platform } from 'magic-script-components';
import { Grid } from './utils/grid';
import {
  GameTicTacToe,
  SceneAlignment,
  SceneAudio,
  SceneButton,
  SceneButtonOutline,
  SceneCircleConfirmation,
  SceneClock,
  SceneColorPicker,
  SceneDatePicker,
  SceneDialog,
  SceneDropdownList,
  SceneFilePicker,
  SceneGridLayout,
  SceneImage,
  SceneImageRemote,
  SceneImageSlider,
  SceneItemsAlignment,
  SceneItemsPadding,
  SceneLayout,
  SceneLine,
  SceneLinearLayout,
  SceneListView,
  SceneModel,
  ScenePageView,
  ScenePlaneDetector,
  SceneProgressBar,
  SceneRectLayout,
  SceneScrollBar,
  SceneScrollView,
  SceneSlider,
  SceneSpinner,
  SceneSystemIcons,
  SceneText,
  SceneTextCharacters,
  SceneTextEdit,
  SceneTimePicker,
  SceneToggle,
  SceneToggleGroup,
  SceneTransformations,
  SceneVideo,
  SceneVideoGrid,
  SceneWebView,
} from './test_scenes';

import { registerOnDeeplinkSet } from "../global/globalVariables"


class CatalogApp extends React.Component {

  constructor(props) {
    super(props);

    this.scenes = [
      { name: 'Characters', component: <SceneTextCharacters localPosition={[0, 0, 0]} /> },
      { name: 'Icons', component: <SceneSystemIcons /> },
      { name: 'Text', component: <SceneText localPosition={[0, 0.5, 0]} /> },
      { name: 'Alignment', component: <SceneAlignment localPosition={[0, 0.5, 0]} /> },
      { name: 'Text edit', component: <SceneTextEdit localPosition={[0, 0.5, 0]} /> },
      { name: 'Button\n(properties)', component: <SceneButton localPosition={[0, 0, 0]} /> },
      { name: 'Button\n(outline)', component: <SceneButtonOutline localPosition={[0, 0, 0]} /> },
      { name: 'Layout size', component: <SceneLayout localPosition={[0, 0, 0]} /> },
      { name: 'Rect layout', component: <SceneRectLayout localPosition={[0, 0.0, 0]} /> },
      { name: 'Linear layout', component: <SceneLinearLayout localPosition={[0, 0.5, 0]} /> },
      { name: 'Grid layout', component: <SceneGridLayout localPosition={[0, 1.0, 0]} /> },
      { name: 'Scroll bar', component: <SceneScrollBar localPosition={[0, 0, 0]} /> },
      { name: 'Scroll view', component: <SceneScrollView localPosition={[0, 1.0, 0]} /> },
      { name: 'List view', component: <SceneListView localPosition={[0, 0, 0]} /> },
      { name: 'Local images', component: <SceneImage localPosition={[0, 0.5, 0]} /> },
      { name: 'Remote images', component: <SceneImageRemote localPosition={[0, 0, 0]} /> },
      { name: 'Image slider', component: <SceneImageSlider localPosition={[0, 0, 0]} /> },
      { name: 'Video', component: <SceneVideo localPosition={[0, 0, 0]} /> },
      { name: 'Video grid', component: <SceneVideoGrid localPosition={[0, 0, 0]} /> },
      { name: 'Models', component: <SceneModel localPosition={[0, 0, 0]} /> },
      { name: 'Transformations', component: <SceneTransformations localPosition={[0, 0, 0]} /> },
      { name: 'Toggle', component: <SceneToggle localPosition={[0, 0, 0]} /> },
      { name: 'Toggle group', component: <SceneToggleGroup localPosition={[0, 1.0, 0]} /> },
      { name: 'Spinner', component: <SceneSpinner localPosition={[0, 0, 0]} /> },
      { name: 'Circle confirmation', component: <SceneCircleConfirmation localPosition={[0, 0.5, 0]} /> },
      { name: 'Progress bar', component: <SceneProgressBar localPosition={[0, 0.7, 0]} /> },
      { name: 'Slider', component: <SceneSlider localPosition={[0, 0, 0]} /> },
      { name: 'Dropdown list', component: <SceneDropdownList localPosition={[0, 0, 0]} /> },
      { name: 'DatePicker', component: <SceneDatePicker localPosition={[0, 0, 0]} /> },
      { name: 'TimePicker', component: <SceneTimePicker localPosition={[0, 0, 0]} /> },
      { name: 'ColorPicker', component: <SceneColorPicker localPosition={[0, 0, 0]} /> },
      { name: 'Audio', component: <SceneAudio localPosition={[0, 0, 0]} /> },
      { name: 'Dialog', component: <SceneDialog localPosition={[0, 0, 0]} /> },
      { name: 'Web view', component: <SceneWebView localPosition={[0, 0.8, 0]} /> },
      { name: 'Page view', component: <ScenePageView localPosition={[0, 0.6, 0]} /> },
      { name: 'Tic Tac Toe', component: <GameTicTacToe /> },
      { name: 'Clock', component: <SceneClock localPosition={[0, 0, 0]} /> },
      { name: 'Line', component: <SceneLine localPosition={[0, 0, 0]} /> },
      { name: 'Items Padding', component: <SceneItemsPadding localPosition={[0, 0, 0]} /> },
      { name: 'Items Alignment', component: <SceneItemsAlignment localPosition={[0, 0, 0]} /> },
      // { name: 'File Picker', component: <SceneFilePicker localPosition={[0, 0, -0.5]} /> },
      // { name: 'Plane Detector', component: <ScenePlaneDetector localPosition={[0, 0, -0.5]} /> },

    ];
    
      const initialIndex = this.scenes.findIndex((item) => item.name == 'Models');
      this.state = { sceneIndex: initialIndex, showGrid: false };
      console.log(`Runs on ${Platform.OS} (${Platform.Version})`);

      registerOnDeeplinkSet((deeplink) => {
        //deeplink example [catalog://scene/7]
        const route = deeplink.replace(/.*?:\/\//g, '');
        const id = route.match(/\/([^\/]+)\/?$/)[1];
        let initialIndex = parseInt(id)
        this.setState({ sceneIndex: initialIndex }); 
      })
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

  onSceneSelected = event => {
    if (event.SelectedItems.length > 0) {
      const item = event.SelectedItems[0];
      this.setState({ sceneIndex: item.id });
    }
  }

  onShowGridAction = () => {
    const showGrid = !this.state.showGrid;
    this.setState({ showGrid });
  }

  renderGrid() {
    const { showGrid } = this.state;
    return showGrid ? <Grid /> : null;
  }

  renderDropdownItems() {
    return this.scenes.map((scene, index) => <DropdownListItem key={index} id={index} label={scene.name.replace(/\n/g, ' ')}/>)
  }

  render() {
    const { sceneIndex } = this.state;
    const scene = this.scenes[sceneIndex];
    return (
      <View name='main-view' alignment={'center-center'} localScale={[0.5, 0.5, 0.5]}>
        <View alignment={'center-center'} localPosition={[0, 1.3, 0]}>
          <Button localPosition={[-0.5, 0, 0]} width={0.25} height={0.1} roundness={1} textSize={0.05} onClick={this.onPreviousScene}>Prev</Button>
          <DropdownList alignment={'top-center'} height={0.15} listMaxHeight={1} localPosition={[0, 0, 0]} onSelectionChanged={this.onSceneSelected} text={scene.name} textSize={0.05}>
            {this.renderDropdownItems()}
          </DropdownList>
          <Button localPosition={[0.5, 0, 0]} width={0.25} height={0.1} roundness={1} textSize={0.05} onClick={this.onNextScene}>Next</Button>
          <Toggle localPosition={[0.13, 0.15, 0]} height={0.08} textSize={0.08} on={this.state.showGrid} onToggleChanged={this.onShowGridAction} alignment={'bottom-center'}>grid</Toggle>
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
