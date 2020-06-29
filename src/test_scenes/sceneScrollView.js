import React from 'react';
import { View, LinearLayout, ScrollBar,ScrollView, Text, Button, Image, Toggle } from 'magic-script-components';


const Orientation = {
  vertical: 'vertical',
  horizontal: 'horizontal',
};

class SceneScrollView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isVertical: true, alignment: 'center-center', scrollValue: 0 };
  }

  onOrientationChanged = event => {
    this.setState({ isVertical: event.On, scrollValue: 0 });
  }

  onScrollChanged = event => {
    console.log('onScrollChanged: ', event.ScrollValue);
    this.setState({ scrollValue: event.ScrollValue });
  }

  onTopLeftButtonClick = () => { this.setState({ alignment: 'top-left' }); }
  onTopCenterButtonClick = () => { this.setState({ alignment: 'top-center' }); }
  onTopRightButtonClick = () => { this.setState({ alignment: 'top-right' }); }
  onCenterLeftButtonClick = () => { this.setState({ alignment: 'center-left' }); }
  onCenterCenterButtonClick = () => { this.setState({ alignment: 'center-center' }); }
  onCenterRightButtonClick = () => { this.setState({ alignment: 'center-right' }); }
  onBottomLeftButtonClick = () => { this.setState({ alignment: 'bottom-left' }); }
  onBottomCenterButtonClick = () => { this.setState({ alignment: 'bottom-center' }); }
  onBottomRightButtonClick = () => { this.setState({ alignment: 'bottom-right' }); }

  render() {
    const { isVertical, alignment, scrollValue } = this.state;
    const size = 1.0;
    const orientation = isVertical ? Orientation.vertical : Orientation.horizontal;
    const direction = orientation;
    const width = isVertical ? size : 1.25 * size;
    const height = isVertical ? 1.25 * size : size;
    const contentSize = { width, height };
    const aabb = { 
      min: [-0.5 * contentSize.width, -0.5 * contentSize.height, -0.1], 
      max: [0.5 * contentSize.width, 0.5 * contentSize.height, 0.1], 
    };
    const scrollBarLength = 1.25 * size;
    const scrollBarThickness = 0.04;
    const scrollBarPosition = isVertical ? [aabb.max[0] - 0.5 * scrollBarThickness, 0, 0] : [0, aabb.min[1] + 0.5 * scrollBarThickness, 0];
    const alpha = 1;
    return (
      <View position={this.props.position}>
        <Toggle position={[0.3, 0, 0]} height={0.08} fontSize={0.08} on={isVertical} onToggleChanged={this.onOrientationChanged}>{'Vertical scroll'}</Toggle>
        <ScrollView 
          debug
          position={[0, -0.7, 0]}
          onScrollChanged={this.onScrollChanged}
          scrollBarVisibility={'auto'} 
          scrollBounds={aabb} 
          scrollDirection={direction}
          scrollValue={scrollValue}
        >
          <ScrollBar position={scrollBarPosition} orientation={orientation} length={scrollBarLength} thickness={scrollBarThickness} />
          <LinearLayout anchorPoint={alignment} defaultItemAlignment={'center-center'} orientation={orientation}>
            <Image width={size} height={size} color={[1,1,0.5,alpha]}/>
            <Image width={size} height={size} color={[1,0.5,1,alpha]}/>
            <Image width={size} height={size} color={[0.5,1,1,alpha]}/>
            <Image width={size} height={size} color={[1,0.5,0.5,alpha]}/>
            <Image width={size} height={size} color={[0.5,0.5,1,alpha]}/>
            <Image width={size} height={size} color={[0.5,1,0.5,alpha]}/>
            <Image width={size} height={size} color={[0.75,0.75,0.75,alpha]}/>
            <Image width={size} height={size} color={[1,1,1,alpha]}/>
          </LinearLayout>
        </ScrollView>

        <View position={[0, -1.5, 0]}>
          <Text position={[0, 0.05, 0]} fontSize={0.08} anchorPoint={'bottom-center'}>Set content alignment:</Text>
          <Button position={[-0.3, -0.1, 0]} fontSize={0.08} roundness={0} onClick={this.onTopLeftButtonClick}>TL</Button>
          <Button position={[ 0.0, -0.1, 0]} fontSize={0.08} roundness={0} onClick={this.onTopCenterButtonClick}>TC</Button>
          <Button position={[ 0.3, -0.1, 0]} fontSize={0.08} roundness={0} onClick={this.onTopRightButtonClick}>TR</Button>
          <Button position={[-0.3, -0.3, 0]} fontSize={0.08} roundness={0} onClick={this.onCenterLeftButtonClick}>CL</Button>
          <Button position={[ 0.0, -0.3, 0]} fontSize={0.08} roundness={0} onClick={this.onCenterCenterButtonClick}>CC</Button>
          <Button position={[ 0.3, -0.3, 0]} fontSize={0.08} roundness={0} onClick={this.onCenterRightButtonClick}>CR</Button>
          <Button position={[-0.3, -0.5, 0]} fontSize={0.08} roundness={0} onClick={this.onBottomLeftButtonClick}>BL</Button>
          <Button position={[ 0.0, -0.5, 0]} fontSize={0.08} roundness={0} onClick={this.onBottomCenterButtonClick}>BC</Button>
          <Button position={[ 0.3, -0.5, 0]} fontSize={0.08} roundness={0} onClick={this.onBottomRightButtonClick}>BR</Button>
        </View>
      </View>
    );
  }
}

export { SceneScrollView };
