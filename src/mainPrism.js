import React from "react";
import {
  Button,
  DropdownList,
  DropdownListItem,
  Toggle,
  View,
  Platform,
  Prism,
} from "magic-script-components";
import { Grid } from "./utils/grid";
import {
  GameTicTacToe,
  SceneAlignment,
  SceneAudio,
  SceneButton,
  SceneButtonOutline,
  SceneButtonType,
  SceneCircleConfirmation,
  SceneClock,
  SceneColorPicker,
  SceneDatePicker,
  SceneDialog,
  SceneDropdownList,
  SceneFilePicker,
  SceneFileSystem,
  SceneGridLayout,
  SceneHitTest,
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
  SceneMultiPrism,
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
  SceneEvents,
} from "./test_scenes";

class MainPrism extends React.Component {
  constructor(props) {
    super(props);

    this.scenes = [
      {
        name: "Characters",
        component: <SceneTextCharacters position={[0, 0, 0]} />,
      },
      { name: "Icons", component: <SceneSystemIcons /> },
      { name: "Text", component: <SceneText position={[0, 0.5, 0]} /> },
      {
        name: "Alignment",
        component: <SceneAlignment position={[0, 0.5, 0]} />,
      },
      {
        name: "Text edit",
        component: <SceneTextEdit position={[0, 0.5, 0]} />,
      },
      {
        name: "Button\n(properties)",
        component: <SceneButton position={[0, 0, 0]} />,
      },
      {
        name: "Button\n(outline)",
        component: <SceneButtonOutline position={[0, 0, 0]} />,
      },
      {
        name: "Button Type",
        component: <SceneButtonType position={[0, 0, 0]} />,
      },
      { name: "Layout size", component: <SceneLayout position={[0, 0, 0]} /> },
      {
        name: "Rect layout",
        component: <SceneRectLayout position={[0, 0.0, 0]} />,
      },
      {
        name: "Linear layout",
        component: <SceneLinearLayout position={[0, 0.5, 0]} />,
      },
      {
        name: "Grid layout",
        component: <SceneGridLayout position={[0, 1.0, 0]} />,
      },
      {
        name: "Scroll bar",
        component: <SceneScrollBar position={[0, 0, 0]} />,
      },
      {
        name: "Scroll view",
        component: <SceneScrollView position={[0, 1.0, 0]} />,
      },
      { name: "List view", component: <SceneListView position={[0, 0, 0]} /> },
      {
        name: "Local images",
        component: <SceneImage position={[0, 0.5, 0]} />,
      },
      {
        name: "Remote images",
        component: <SceneImageRemote position={[0, 0, 0]} />,
      },
      {
        name: "Image slider",
        component: <SceneImageSlider position={[0, 0, 0]} />,
      },
      { name: "Video", component: <SceneVideo position={[0, 0, 0]} /> },
      {
        name: "Video grid",
        component: <SceneVideoGrid position={[0, 0, 0]} />,
      },
      { name: "Models", component: <SceneModel position={[0, 0, 0]} /> },
      {
        name: "Transformations",
        component: <SceneTransformations position={[0, 0, 0]} />,
      },
      { name: "Toggle", component: <SceneToggle position={[0, 0, 0]} /> },
      {
        name: "Toggle group",
        component: <SceneToggleGroup position={[0, 1.0, 0]} />,
      },
      { name: "Spinner", component: <SceneSpinner position={[0, 0, 0]} /> },
      {
        name: "Circle confirmation",
        component: <SceneCircleConfirmation position={[0, 0.5, 0]} />,
      },
      {
        name: "Progress bar",
        component: <SceneProgressBar position={[0, 0.5, 0]} />,
      },
      { name: "Slider", component: <SceneSlider position={[0, 0.8, 0]} /> },
      {
        name: "Dropdown list",
        component: <SceneDropdownList position={[0, 0, 0]} />,
      },
      {
        name: "DatePicker",
        component: <SceneDatePicker position={[0, 0, 0]} />,
      },
      {
        name: "TimePicker",
        component: <SceneTimePicker position={[0, 0, 0]} />,
      },
      {
        name: "ColorPicker",
        component: <SceneColorPicker position={[0, 0, 0]} />,
      },
      { name: "Audio", component: <SceneAudio position={[0, 0, 0]} /> },
      { name: "Dialog", component: <SceneDialog position={[0, 0, 0]} /> },
      { name: "Web view", component: <SceneWebView position={[0, 0, 0]} /> },
      {
        name: "Page view",
        component: <ScenePageView position={[0, 0.6, 0]} />,
      },
      { name: "Tic Tac Toe", component: <GameTicTacToe /> },
      { name: "Clock", component: <SceneClock position={[0, 0, 0]} /> },
      { name: "Line", component: <SceneLine position={[0, 0, 0]} /> },
      {
        name: "Items Padding",
        component: <SceneItemsPadding position={[0, 0, 0]} />,
      },
      {
        name: "Items Alignment",
        component: <SceneItemsAlignment position={[0, 0, 0]} />,
      },
      {
        name: "Multiple Prisms",
        component: (
          <SceneMultiPrism
            position={[0, 0, 0]}
            onPrismAction={this.props.onPrismAction}
          />
        ),
      },
      { name: "Events", component: <SceneEvents /> },
      // { name: 'File Picker', component: <SceneFilePicker position={[0, 0, -0.5]} /> },
      // { name: 'Plane Detector', component: <ScenePlaneDetector position={[0, 0, -0.5]} /> },
      { name: "Hit test", component: <SceneHitTest position={[0, 0, 0]} /> },
      {
        name: "File system",
        component: <SceneFileSystem position={[0, 0, 0]} />,
      },
    ];

    const initialIndex = Math.max(0, this.scenes.findIndex((item) => item.name.toUpperCase() === props.initialSceneName.toUpperCase()));
    this.state = { sceneIndex: initialIndex, showGrid: false };
    console.log(`Runs on ${Platform.OS} (${Platform.Version})`);
  }

  openSceneAtIndex(index) {
    if (0 <= index && index < this.scenes.length) {
      this.setState({ sceneIndex: index });
    }
  }

  onNextScene = () => {
    const { sceneIndex } = this.state;
    const nextIndex = (sceneIndex + 1) % this.scenes.length;
    this.setState({ sceneIndex: nextIndex });
  };

  onPreviousScene = () => {
    const { sceneIndex } = this.state;
    const prevIndex = sceneIndex > 0 ? sceneIndex - 1 : this.scenes.length - 1;
    this.setState({ sceneIndex: prevIndex });
  };

  onSceneSelected = (event) => {
    if (event.SelectedItems.length > 0) {
      const item = event.SelectedItems[0];
      this.setState({ sceneIndex: item.id });
    }
  };

  onShowGridAction = () => {
    const showGrid = !this.state.showGrid;
    this.setState({ showGrid });
  };

  getBoundsFromSize(size) {
    const minX = -size[0];
    const maxX = size[0];
    const minY = -size[1];
    const maxY = size[1];
    return [minX, maxY, maxX, minY];
  }

  renderGrid() {
    const { showGrid } = this.state;
    return showGrid ? (
      <Grid bounds={this.getBoundsFromSize(this.props.size)} />
    ) : null;
  }

  renderDropdownItems() {
    return this.scenes.map((scene, index) => (
      <DropdownListItem
        key={index}
        id={index}
        label={scene.name.replace(/\n/g, " ")}
      />
    ));
  }

  onModeChangedHandler = (event) => {
    console.log("onModeChangedHandler", event);
  };

  onRotationChangedHandler = (event) => {
    console.log("onRotationChangedHandler", event);
  };

  onScaleChangedHandler = (event) => {
    console.log("onScaleChangedHandler", event);
  };

  onPositionChangedHandler = (event) => {
    console.log("onPositionChangedHandler", event);
  };

  render() {
    const { sceneIndex } = this.state;
    const scene = this.scenes[sceneIndex];
    const size = this.props.size;
    const buttonSize = { width: 0.25, height: 0.1 };
    const toggleSize = { height: 0.035 };
    return (
      <Prism
        size={this.props.size}
        position={[0, 0, 0]}
        interactions={["scale", "position", "rotation"]}
        onModeChanged={this.onModeChangedHandler}
        onRotationChanged={this.onRotationChangedHandler}
        onScaleChanged={this.onScaleChangedHandler}
        onPositionChanged={this.onPositionChangedHandler}
        debug
      >
        <View
          name="main-view"
          alignment={"top-center"}
          position={[0, 0, 0]}
          scale={[0.5, 0.5, 0.5]}
        >
          <View
            alignment={"center-center"}
            position={[0, size[1] - buttonSize.height, 0]}
          >
            <Button
              position={[-(size[0] - buttonSize.width), 0, 0]}
              width={0.25}
              height={0.1}
              roundness={1}
              fontSize={0.05}
              onClick={this.onPreviousScene}
            >
              Prev
            </Button>
            <DropdownList
              position={[0, -buttonSize.height, 0]}
              listMaxHeight={1}
              onSelectionChanged={this.onSceneSelected}
              text={scene.name}
              fontSize={0.05}
            >
              {this.renderDropdownItems()}
            </DropdownList>
            <Button
              position={[size[0] - buttonSize.width, 0, 0]}
              width={0.25}
              height={0.1}
              roundness={1}
              fontSize={0.05}
              onClick={this.onNextScene}
            >
              Next
            </Button>
            <Toggle
              position={[toggleSize.height * 2, 0, 0]}
              height={toggleSize.height}
              fontSize={0.035}
              text={"Grid"}
              on={this.state.showGrid}
              onToggleChanged={this.onShowGridAction}
              alignment={"bottom-center"}
            >
              Grid
            </Toggle>
          </View>
          <View alignment={"center-center"} position={[0, 0, 0]}>
            {this.renderGrid()}
            {scene.component}
          </View>
        </View>
      </Prism>
    );
  }
}

MainPrism.defaultProps = {
  size: [1.0, 1.0, 0.5],
  initialSceneName: "Characters",
};

export { MainPrism };
