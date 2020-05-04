import React from 'react';
import { Button, GridLayout, Image, Line, Model, Slider, Spinner, Text, TextEdit, Toggle, View } from 'magic-script-components';
import { Alignment, AlignmentGroup } from '../utils/alignment';
import { PaddingGroup } from '../utils/padding';

class SceneGridLayout extends React.Component {
  constructor(props) {
    super(props);
    // The padding order is:  top, right, bottom, left
    this.state = { width: 0, height: 0, padding: [0, 0, 0, 0], alignment: Alignment.centerCenter };
  }

  onItemsAlignmentChanged = (alignment) => this.setState({ alignment });
  onPaddingChanged = (padding) => this.setState({ padding });
  onWidthToogleChanged = (event) => this.setState({ width: event.On ? 1 : 0 });
  onHeightToogleChanged = (event) => this.setState({ height: event.On ? 1 : 0 });

  render() {
    const { width, height, padding, alignment } = this.state;
    const columns = 3;
    const invisibleItemColor = '#FF69B4';
    return (
      <View localPosition={this.props.localPosition}>

        <View localPosition={[0, -0.1, 0]}>
          <AlignmentGroup
            alignment={alignment}
            localPosition={[-0.75, 0, 0]}
            onAlignmentChanged={this.onItemsAlignmentChanged}
            title={'Set items alignment:'}
          />

          <PaddingGroup
            values={[0.04, 0.04, 0.04, 0.04]}
            localPosition={[0.1, 0, 0]}
            onPaddingChanged={this.onPaddingChanged}
            title={'Set items padding:'}
          />

          <View localPosition={[0, -0.4, 0]} >
            <Text localPosition={[0, 0, 0]} alignment={'center-center'} textSize={0.075}>Set size:</Text>
            <Toggle type={'checkbox'} localPosition={[-0.1, -0.1, 0]} textSize={0.075} height={0.1} on={width == 1} onToggleChanged={this.onWidthToogleChanged}>width: 1m</Toggle>
            <Toggle type={'checkbox'} localPosition={[-0.1, -0.2, 0]} textSize={0.075} height={0.1} on={height == 1} onToggleChanged={this.onHeightToogleChanged}>height: 1m</Toggle>
          </View>

          <Line color={[1, 1, 1, 1]} points={[[0.05, 0.1, 0], [0.05, -0.3, 0]]} />
          <Line color={[1, 1, 1, 1]} points={[[-0.75, -0.3, 0], [0.8, -0.3, 0]]} />
        </View>

        {/* 
            Explanation:
            - 'localPosition' of a child should not affect its position inside the grid, because it's managed by the parent,
            - 'alignment' property of a child should also have no effect (layout manages position of children)
         */}

        <GridLayout
          debug={true}
          width={width}
          height={height}
          alignment={'top-center'}
          columns={columns}
          defaultItemAlignment={alignment}
          defaultItemPadding={padding}
          localPosition={[0, -0.9, 0]}
          skipInvisibleItems={true}
        >
          <Text debug textSize={0.15}>Item 1</Text>
          <Text debug textColor={invisibleItemColor} textSize={0.15} visible={false}>Item Invisible</Text>
          <Text debug textSize={0.15} alignment={'bottom-right'} textColor={[1, 0, 0, 1]}>Lorem ipsum dolor</Text>
          <Text debug textSize={0.3} localScale={[0.5, 0.5, 1]}>Item 3</Text>
          <Button debug width={1} height={0.4} localScale={[0.3, 0.3, 1]}>Scaled</Button>
          <Model debug alignment={'center-left'} localScale={[0.2, 0.2, 0.2]} modelPath={require('../../assets/resources/models/static.glb')} />
          <Image debug width={0.5} height={0.4} alignment={'bottom-left'} localScale={[0.5, 0.5, 0.5]} color={[0, 0, 1, 1]} />
          <Image debug width={0.25} height={0.2} color={[0, 1, 0, 1]} />
          <TextEdit debug width={0.35} height={0.2} text={'text edit'} hintColor={[1, 0, 0, 1]} multiline />
          <Spinner debug height={0.15} localPosition={[0.5, 0, 0]} />
          <Slider debug width={0.4} height={0.08} />
          <Toggle debug textSize={0.08} height={0.15}>Toggle</Toggle>
          <Toggle debug textColor={invisibleItemColor} textSize={0.08} height={0.15} visible={false}>Toggle Invisible</Toggle>
          <GridLayout debug defaultItemAlignment={'center-center'} columns={2} skipInvisibleItems={true}>
            <Image width={0.1} height={0.1} color={[1, 1, 0.5, 1]} />
            <Image width={0.1} height={0.1} color={invisibleItemColor} visible={false} />
            <Image width={0.1} height={0.1} color={[1, 0.4, 0.4, 1]} />
            <Image width={0.1} height={0.1} color={[0.5, 1, 1, 1]} />
            <Image width={0.1} height={0.1} color={[1, 1, 1, 1]} />
          </GridLayout>

        </GridLayout>
      </View>
    );
  }
}

export { SceneGridLayout };
