import React from 'react';
import { Alignment, AnchorPoint, Button, GridLayout, Image, Line, Model, Slider, Spinner, Text, TextEdit, Toggle, View, RectLayout } from 'magic-script-components';
import { AlignmentGroup } from '../utils/alignment';
import { PaddingGroup } from '../utils/padding';
import { OptionGroup } from '../utils/optionGroup';

class SceneGridLayout extends React.Component {
  constructor(props) {
    super(props);
    // The padding order is:  top, right, bottom, left
    this.state = { width: 0, height: 0, padding: [0, 0, 0, 0], alignment: Alignment.centerCenter };
  }

  onItemsAlignmentChanged = (alignment) => this.setState({ alignment });
  onPaddingChanged = (padding) => this.setState({ padding });
  onOptionChanged = (selectedIndices) => this.setState({ width: selectedIndices.includes(0) ? 1 : 0, height: selectedIndices.includes(1) ? 1 : 0 });

  render() {
    const { width, height, padding, alignment } = this.state;
    const columns = 3;
    const invisibleItemColor = '#FF69B4';
    const size = this.props.size;
    return (
      <View position={this.props.position}>
        <View>
          <AlignmentGroup
            alignment={alignment}
            anchorPoint={AnchorPoint.topCenter}
            onAlignmentChanged={this.onItemsAlignmentChanged}
            position={[-0.35, 0, 0]}
            title={'Set items alignment:'}
          />

          <PaddingGroup
            anchorPoint={AnchorPoint.topCenter}
            onPaddingChanged={this.onPaddingChanged}
            position={[0.55, 0, 0]}
            title={'Set items padding:'}
            values={[0.04, 0.04, 0.04, 0.04]}
          />

          <OptionGroup 
            anchorPoint={AnchorPoint.topCenter}
            multipleOptions={true}
            onOptionChanged={this.onOptionChanged}
            options={['1m width', '1m height']}
            position={[0, -0.45, 0]}
            title={'Set size:'}
          />

          <Line color={[1, 1, 1, 1]} points={[[0.05, 0, 0], [0.05, -0.4, 0]]} />
          <Line color={[1, 1, 1, 1]} points={[[-0.8, -0.4, 0], [0.8, -0.4, 0]]} />
        </View>

        {/* 
            Explanation:
            - 'position' of a child should not affect its position inside the grid, because it's managed by the parent,
            - 'alignment' property of a child should also have no effect (layout manages position of children)
         */}

        <GridLayout
          debug={true}
          width={width}
          height={height}
          anchorPoint={AnchorPoint.topCenter}
          columns={columns}
          defaultItemAlignment={alignment}
          defaultItemPadding={padding}
          position={[0, -0.9, 0]}
          skipInvisibleItems={true}
        >
          <Text debug fontSize={0.15}>Item 1</Text>
          <Text debug textColor={invisibleItemColor} fontSize={0.15} visible={false}>Item Invisible</Text>
          <Text debug fontSize={0.15} anchorPoint={AnchorPoint.bottomRight} textColor={[1, 0, 0, 1]}>Lorem ipsum dolor</Text>
          <Text debug fontSize={0.3} scale={[0.5, 0.5, 1]}>Item 3</Text>
          <Button debug width={1} height={0.4} scale={[0.3, 0.3, 1]}>Scaled</Button>
          <Model debug anchorPoint={AnchorPoint.centerLeft} scale={[0.2, 0.2, 0.2]} path={require('../../assets/resources/models/static.glb')} />
          <Image debug width={0.5} height={0.4} anchorPoint={AnchorPoint.bottomLeft} scale={[0.5, 0.5, 0.5]} color={[0, 0, 1, 1]} />
          <Image debug width={0.25} height={0.2} color={[0, 1, 0, 1]} />
          <TextEdit debug width={0.35} height={0.2} hintColor={[1, 0, 0, 1]} multiline>text edit</TextEdit>
          <Spinner debug height={0.15} position={[0.5, 0, 0]} />
          <Slider debug width={0.4} height={0.08} />
          <Toggle debug fontSize={0.08} height={0.15}>Toggle</Toggle>
          <Toggle debug textColor={invisibleItemColor} fontSize={0.08} height={0.15} visible={false}>Toggle Invisible</Toggle>
          <GridLayout debug defaultItemAlignment={Alignment.centerCenter} columns={2} skipInvisibleItems={true}>
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
