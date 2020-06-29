import React from 'react';
import { Alignment, AlignmentGroup } from '../utils/alignment';
import { Button, View, Text, RectLayout, Image, Toggle, ToggleGroup, GridLayout, Line, LinearLayout } from 'magic-script-components';

const ContentSizes = [
  { width: 0.25, height: 0.25 },
  { width: 0.5, height: 0.25 },
  { width: 0.25, height: 0.5 },
];

class SceneRectLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alignment: Alignment.centerCenter, contentAlignment: Alignment.topRight, contentSizeIndex: 0 };
    this.interval = 0.5;
  }

  componentDidMount() {
    this.handler = setInterval(this.updateAlignment, this.interval * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handler);
  }

  updateAlignment = () => {
    this.setState({ contentAlignment: Alignment.next(this.state.contentAlignment) });
  }

  onAlignmentChanged = (alignment) => {
    this.setState({ alignment });
  }

  onContentAlignmentChanged = (alignment) => {
    this.setState({ contentAlignment: alignment });
  }

  onContentSizeChanged = (index) => {
    this.setState({ contentSizeIndex: index });
  }

  renderButton(size) {
    return (
      <Button
        key={`${size.width}x${size.height}`}
        position={[0, 0, 0.01]}
        width={size.width}
        height={size.height}
        roundness={0.0}
        fontSize={0.08}
      >Button</Button>
    );
  }

  renderGrid(position, size,) {
    const min = { x: -0.5 * size, y: -0.5 * size };
    const max = { x: 0.5 * size, y: 0.5 * size };
    const points = [[min.x, min.y, 0], [min.x, max.y, 0], [max.x, max.y, 0], [max.x, min.y, 0], [min.x, min.y, 0]];
    return (
      <View anchorPoint={'center-center'} position={position}>
        <Line points={points} color={[1, 1, 0, 1]} />
        <Line points={[[min.x, 0, 0], [max.x, 0, 0]]} color={[1, 1, 0, 0.5]} />
        <Line points={[[0, min.y, 0], [0, max.y, 0]]} color={[1, 1, 0, 0.5]} />
      </View>
    );
  }

  renderRadio(index, selectedIndex, onChanged) {
    const contentSize = ContentSizes[index];
    const on = (index === selectedIndex);
    return (
      <Toggle
        height={0.075}
        on={on}
        fontSize={0.075}
        type={'radio'}
        onToggleChanged={() => onChanged(index)}
      >{`${contentSize.width} x ${contentSize.height} m`}</Toggle>
    );
  }

  render() {
    const { contentAlignment, alignment, contentSizeIndex } = this.state

    const rectPosition = [0, 0.5, 0];
    const alignmentSectionPosition = [0, -0.25, 0];
    const contentAlignmentSectionPosition = [0, -0.65, 0];
    const contentSizeSectionPosition = [0, -1.05, 0];
    const rectSize = { width: 0.5, height: 0.5 };

    return (
      <View position={this.props.position}>
        <Image
          anchorPoint={alignment}
          color={[0.1, 0.25, 0.5, 0.8]}
          position={rectPosition}
          useFrame={true}
          width={rectSize.width}
          height={rectSize.height}
        />
        <RectLayout
          anchorPoint={alignment}
          alignment={contentAlignment}
          position={rectPosition}
          width={rectSize.width}
          height={rectSize.height}
        >
          {this.renderButton(ContentSizes[contentSizeIndex])}
        </RectLayout>

        {this.renderGrid(rectPosition, 1.0)}

        <AlignmentGroup
          alignment={alignment}
          position={alignmentSectionPosition}
          onAlignmentChanged={this.onAlignmentChanged}
          title={'Alignment:'}
        />
        <AlignmentGroup
          alignment={contentAlignment}
          position={contentAlignmentSectionPosition}
          onAlignmentChanged={this.onContentAlignmentChanged}
          title={'Content alignment:'}
        />

        <View position={contentSizeSectionPosition}>
          <Text fontSize={0.08} position={[0, 0.13, 0]} anchorPoint={'bottom-center'}>Content size:</Text>
          <GridLayout defaultItemPadding={[0, 0.05, 0, 0]}>
            <ToggleGroup>
              <LinearLayout orientation={'vertical'}>
                {this.renderRadio(0, contentSizeIndex, this.onContentSizeChanged)}
                {this.renderRadio(1, contentSizeIndex, this.onContentSizeChanged)}
                {this.renderRadio(2, contentSizeIndex, this.onContentSizeChanged)}
              </LinearLayout>
            </ToggleGroup>
          </GridLayout>
        </View>
      </View>
    )
  }
}

export { SceneRectLayout };
