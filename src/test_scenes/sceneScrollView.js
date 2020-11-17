import React from 'react';
import { Alignment, AnchorPoint, Image, LinearLayout, Orientation, ScrollBar, ScrollBarVisibility, ScrollDirection, ScrollView, Text, Toggle } from 'magic-script-components';

class SceneScrollView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isVertical: true, scrollValue: 0 };
  }

  onOrientationChanged = event => this.setState({ isVertical: event.On, scrollValue: 0 });
  onScrollChanged = event => {
    console.log('onScrollChanged: ', event.ScrollValue);
    this.setState({ scrollValue: event.ScrollValue });
  }

  render() {
    const { isVertical, scrollValue } = this.state;
    const size = 1.0;
    const orientation = isVertical ? Orientation.vertical : Orientation.horizontal;
    const direction = isVertical ? ScrollDirection.vertical : ScrollDirection.horizontal;;
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
      <LinearLayout 
        anchorPoint={AnchorPoint.topCenter}
        defaultItemAlignment={Alignment.centerCenter}
        defaultItemPadding={[0, 0, 0.1, 0]}
        position={this.props.position}
      >
        <Text fontSize={0.08}>Scroll direction</Text>
        <LinearLayout 
          defaultItemAlignment={Alignment.centerCenter}
          defaultItemPadding={[0, 0.05, 0, 0.05]}
          orientation={Orientation.horizontal}
          itemAlignment={[
            { index: 0, alignment: Alignment.centerRight },
            { index: 2, alignment: Alignment.centerLeft },
          ]}
        >
          <Text fontSize={0.08}>horizontal</Text>
          <Toggle height={0.08} fontSize={0.08} on={isVertical} onToggleChanged={this.onOrientationChanged}></Toggle>
          <Text fontSize={0.08}>vertical</Text>
        </LinearLayout>
        
        <ScrollView 
          debug
          onScrollChanged={this.onScrollChanged}
          scrollBarVisibility={ScrollBarVisibility.auto} 
          scrollBounds={aabb} 
          scrollDirection={direction}
          scrollValue={scrollValue}
        >
          <ScrollBar position={scrollBarPosition} orientation={orientation} length={scrollBarLength} thickness={scrollBarThickness} />
          <LinearLayout defaultItemAlignment={Alignment.centerCenter} orientation={orientation}>
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
      </LinearLayout>
    );
  }
}

export { SceneScrollView };
