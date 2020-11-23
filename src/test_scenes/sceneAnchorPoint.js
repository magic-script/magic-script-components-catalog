import React from 'react';
import { Alignment, AnchorPoint, Button, CircleConfirmation, GridLayout, Image, Line, Model, Orientation, ProgressBar, RectLayout, ScrollBar, ScrollDirection, ScrollView, ScrollBarVisibility, Slider, Spinner, Text, TextEdit, Toggle, Video, VideoAction, View, ViewMode, WebView } from "magic-script-components";
import { AlignmentList } from '../utils/alignment';

class SceneAnchorPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = { anchorPoint: AnchorPoint.topLeft };
  }

  selectNextAnchorPoint = () => {
    const nextAnchorPoint = AlignmentList.next(this.state.anchorPoint)
    this.setState({ anchorPoint: nextAnchorPoint });
  };

  renderGridLayout(anchorPoint) {
    return (
      <GridLayout
        anchorPoint={anchorPoint}
        defaultItemAlignment={Alignment.centerCenter}
        columns={2}
      >
        <Image width={0.1} height={0.1} color={[1, 1, 0.5, 1]} />
        <Image width={0.1} height={0.1} color={[1, 0.5, 1, 1]} />
        <Image width={0.1} height={0.1} color={[0.5, 1, 1, 1]} />
        <Image width={0.1} height={0.1} color={[1, 1, 1, 1]} />
      </GridLayout>
    );
  }

  renderScrollView(anchorPoint, size) {
    const aabb = {
      min: [-0.5 * size, -0.5 * size, -0.1],
      max: [0.5 * size, 0.5 * size, 0.1],
    };
    return (
      <ScrollView
        anchorPoint={anchorPoint}
        enabled={false}
        scrollBounds={aabb}
        scrollBarVisibility={ScrollBarVisibility.always}
        scrollDirection={ScrollDirection.vertical}
      >
        <ScrollBar
          orientation={Orientation.vertical}
          length={size}
          position={[0.5 * size, 0, 0]}
        />
        <GridLayout
          defaultItemAlignment={Alignment.centerCenter}
          columns={1}
          width={size}
          height={4 * size}
        >
          <Image width={size} height={size} color={[1, 1, 0.5, 1]} />
          <Image width={size} height={size} color={[1, 0.5, 1, 1]} />
          <Image width={size} height={size} color={[0.5, 1, 1, 1]} />
          <Image width={size} height={size} color={[1, 1, 1, 1]} />
        </GridLayout>
      </ScrollView>
    );
  }

  renderComponent(name, element, position, cellSize, index) {
    const min = { x: -0.5 * cellSize, y: -0.5 * cellSize };
    const max = { x: 0.5 * cellSize, y: 0.5 * cellSize };
    const points = [
      [min.x, min.y, 0],
      [min.x, max.y, 0],
      [max.x, max.y, 0],
      [max.x, min.y, 0],
      [min.x, min.y, 0],
    ];
    return (
      <View key={index} anchorPoint={AnchorPoint.centerCenter} position={position}>
        {element}
        <Text anchorPoint={AnchorPoint.topCenter} position={[0, min.y - 0.01, 0]} fontSize={0.05}>{name}</Text>
        <Line points={points} color={[1, 1, 0, 1]} />
        <Line points={[[min.x, 0, 0], [max.x, 0, 0] ]} color={[1, 1, 0, 0.5]} />
        <Line points={[[0, min.y, 0], [0, max.y, 0]]} color={[1, 1, 0, 0.5]} />
      </View>
    );
  }

  renderComponents() {
    const { anchorPoint } = this.state;
    const columns = 4;
    const itemSize = 0.2;
    const cellSize = 2 * itemSize;
    const cellSpace = 0.1;
    const columnsWidth = (columns - 1) * (cellSize + cellSpace);
    const minX = -0.5 * columnsWidth;
    const maxY = 0.1;

    const getPosition = (index) => {
      const x = minX + (index % columns) * (cellSize + cellSpace);
      const y = maxY - Math.floor(index / columns) * (cellSize + cellSpace);
      return [x, y, 0];
    };

    const lineY1 = 0.577 * itemSize;
    const lineY2 = -0.288 * itemSize;
    const textEditContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const videoResolution = [1280, 720];
    const videoSize = [
      itemSize,
      (videoResolution[1] * itemSize) / videoResolution[0],
    ];

    const linePoints = [
      [0, lineY1, 0],
      [-0.5 * itemSize, lineY2, 0],
      [0.5 * itemSize, lineY2, 0],
      [0, lineY1, 0],
    ];

    const components = [
      { name: 'Button', element: <Button anchorPoint={anchorPoint} enabled={false} fontSize={0.05} height={0.07} width={itemSize}>Click</Button> },
      { name: 'CircleConfirmation', element: <CircleConfirmation anchorPoint={anchorPoint} enabled={false} radius={0.5 * itemSize} /> },
      { name: 'GridLayout', element: this.renderGridLayout(anchorPoint) },
      { name: 'Image', element: <Image anchorPoint={anchorPoint} height={itemSize} width={itemSize} color={'red'} /> },
      { name: 'Line', element: <Line anchorPoint={anchorPoint} color={[0,1,1,1]} points={linePoints} /> },
      { name: 'Model', element: <Model anchorPoint={anchorPoint} path={require('../../assets/resources/models/static.glb')} scale={[0.2, 0.2, 0.2]}/> },
      { name: 'ProgressBar', element: <ProgressBar anchorPoint={anchorPoint} height={0.2 * itemSize} width={itemSize} value={0.66}/> },
      { name: 'ScrollBar', element: <ScrollBar anchorPoint={anchorPoint} length={itemSize} thickness={0.2 * itemSize} thumbPosition={0.9}/> }, 
      { name: 'Slider', element: <Slider anchorPoint={anchorPoint} enabled={false} height={0.2 * itemSize} width={itemSize} value={0.3} /> },
      { name: 'Spinner', element: <Spinner anchorPoint={anchorPoint} height={itemSize} width={itemSize} value={0.5} /> },
      { name: 'Text', element: <Text anchorPoint={anchorPoint} fontSize={0.048} multiline={true} height={itemSize} width={itemSize}>A B C D E F G H I J K L M N O P Q R S T U W X Y Z</Text> },
      { name: 'TextEdit', element: <TextEdit anchorPoint={anchorPoint} enabled={false} fontSize={0.03} multiline={true} scrolling={true} width={itemSize} height={itemSize}>{textEditContent}</TextEdit> },
      { name: 'Toggle', element: <Toggle anchorPoint={anchorPoint} height={0.25 * itemSize} on={true} fontSize={0.07}>foo</Toggle> },
      { name: 'Video', element: <Video anchorPoint={anchorPoint} action={VideoAction.start} looping={true} width={videoResolution[0]} height={videoResolution[1]} screenSize={videoSize} anchorPosition={[0.5 * videoSize[0], 0.5 * videoSize[1], 0]} path={require("../../assets/resources/video.mp4")} viewMode={ViewMode.fullArea} volume={0} /> },
      { name: 'WebView', element: <WebView anchorPoint={anchorPoint} url={'https://www.magicleap.com'} enable={false} height={itemSize} width={itemSize} /> },
      { name: 'ScrollView', element: this.renderScrollView(anchorPoint, itemSize) },
    ];

    return (
      <View>
        {components.map((item, index) => this.renderComponent(item.name, item.element, getPosition(index), 2 * itemSize, index))}
      </View>
    );
  }

  render() {
    return (
      <View position={this.props.position}>
        <Button size={0.05} position={[0, 0.5, 0]} onClick={this.selectNextAnchorPoint}
        >Anchor Point</Button>
        {this.renderComponents()}
      </View>
    );
  }
}

export { SceneAnchorPoint };
