import React from 'react';
import { Alignment, Button, GridLayout, Image, LinearLayout, Orientation, Text, Toggle, View } from 'magic-script-components';
import { PaddingGroup } from '../utils/padding';

class SceneLinearLayout extends React.Component {
  constructor(props) {
    super(props);
    // The padding order is:  top, right, bottom, left
    this.state = { width: 0, height: 0, isHorizontal: false, padding: [0,0,0,0], alignment: Alignment.centerCenter };
  }

  onOrientationChanged = event => this.setState({ isHorizontal: event.On });
  onPaddingChanged = (padding) => this.setState({ padding });
  onAlignmentButtonClick = (alignment) => this.setState({ alignment });
  onWidthToogleChanged = (event) => this.setState({ width: event.On ? 1 : 0 });
  onHeightToogleChanged = (event) => this.setState({ height: event.On ? 1 : 0 });

  renderItem(color) {
    return (<Image debug={true} width={0.6} height={0.3} color={color}/>);
  }

  render () {
    const { width, height, padding, alignment, isHorizontal } = this.state;
    const orientation = isHorizontal ? Orientation.horizontal : Orientation.vertical;
  
    return (
      <View position={this.props.position}>
        <Toggle position={[0.3, 0.4, 0]} height={0.08} fontSize={0.08} on={isHorizontal} onToggleChanged={this.onOrientationChanged}>{'Horizontal'}</Toggle>
        <View position={[-0.38, 0.2, 0]} >
          <Text position={[0, 0, 0]} anchorPoint={'center-center'} fontSize={0.08}>Set size:</Text>
          <Toggle position={[0.2, -0.1, 0]} fontSize={0.08} height={0.1} on={width == 1} onToggleChanged={this.onWidthToogleChanged}>1m width</Toggle>
          <Toggle position={[0.2, -0.2, 0]} fontSize={0.08} height={0.1} on={height == 1} onToggleChanged={this.onHeightToogleChanged}>1m height</Toggle>
        </View> 

        <PaddingGroup
            values={[0.04, 0.04, 0.04, 0.04]}
            onPaddingChanged={this.onPaddingChanged}
            position={[0.5, 0, 0]}
            title={'Set items padding:'}
          />
 
        <LinearLayout
          debug={true}
          width={width}
          height={height}
          orientation={orientation}
          anchorPoint={'top-center'}
          defaultItemAlignment={alignment}
          defaultItemPadding={padding}
          position={[-0.4, -0.4, 0]}
        >
          {this.renderItem('blue')}
          {this.renderItem('green')}
          {this.renderItem('cyan')}
          {this.renderItem('red')}
          {this.renderItem('magenta')}
        </LinearLayout>

        <LinearLayout
          orientation={Orientation.vertical}
          anchorPoint={'top-center'}
          defaultItemAlignment={Alignment.topCenter}
          defaultItemPadding={[0, 0, 0.02, 0]}
          position={[0.4, -1.4, 0]}
        >
          <Text position={[0, 0.05, 0]} fontSize={0.08} anchorPoint={'bottom-center'}>Set items alignment:</Text>
          <GridLayout
            columns={3}
            defaultItemAlignment={Alignment.centerCenter}
          >
            <Button textSize={0.08} roundness={0} onClick={() => this.onAlignmentButtonClick(Alignment.topLeft)}>TL</Button>
            <Button fontSize={0.08} roundness={0} onClick={() => this.onAlignmentButtonClick(Alignment.topCenter)}>TC</Button>
            <Button fontSize={0.08} roundness={0} onClick={() => this.onAlignmentButtonClick(Alignment.topRight)}>TR</Button>
            <Button fontSize={0.08} roundness={0} onClick={() => this.onAlignmentButtonClick(Alignment.centerLeft)}>CL</Button>
            <Button fontSize={0.08} roundness={0} onClick={() => this.onAlignmentButtonClick(Alignment.centerCenter)}>CC</Button>
            <Button fontSize={0.08} roundness={0} onClick={() => this.onAlignmentButtonClick(Alignment.centerRight)}>CR</Button>
            <Button fontSize={0.08} roundness={0} onClick={() => this.onAlignmentButtonClick(Alignment.bottomLeft)}>BL</Button>
            <Button fontSize={0.08} roundness={0} onClick={() => this.onAlignmentButtonClick(Alignment.bottomCenter)}>BC</Button>
            <Button fontSize={0.08} roundness={0} onClick={() => this.onAlignmentButtonClick(Alignment.bottomRight)}>BR</Button>
          </GridLayout>
        </LinearLayout>
      </View>
    );
  }
}

export { SceneLinearLayout };
