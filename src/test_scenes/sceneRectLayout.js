import React from 'react';
import { Alignment, AnchorPoint, Button, Image, Line, LinearLayout, Orientation, RectLayout, Toggle, View } from 'magic-script-components';
import { AlignmentGroup, AlignmentList } from '../utils/alignment';
import { OptionGroup } from '../utils/optionGroup';

const ContentSizes = [
  { width: 0.25, height: 0.25 },
  { width: 0.5, height: 0.25 },
  { width: 0.25, height: 0.5 },
];

class SceneRectLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { anchorPoint: AnchorPoint.centerCenter, contentAlignment: Alignment.topRight, contentSizeIndex: 0 };
    this.interval = 0.5;
  }

  componentDidMount() {
    this.handler = setInterval(this.updateAlignment, this.interval * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handler);
  }

  updateAlignment = () => {
    this.setState({ contentAlignment: AlignmentList.next(this.state.contentAlignment) });
  }

  onAnchorPointChanged = (anchorPoint) => {
    this.setState({ anchorPoint });
  }

  onContentAlignmentChanged = (alignment) => {
    this.setState({ contentAlignment: alignment });
  }

  onContentSizeChanged = (selectedIndices) => {
    this.setState({ contentSizeIndex: (selectedIndices.length > 0) ? selectedIndices[0] : 0 });
  }

  getContentSizeOptions = () => {
    var items = [];
    for (var i = 0; i < ContentSizes.length; i += 1) {
      const size = ContentSizes[i];
      items.push(`${size.width}x${size.height}`);
    }

    return items;
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
      <View anchorPoint={AnchorPoint.centerCenter} position={position}>
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
        type={ToggleType.radio}
        onToggleChanged={() => onChanged(index)}
      >{`${contentSize.width} x ${contentSize.height} m`}</Toggle>
    );
  }

  render() {
    const { contentAlignment, anchorPoint, contentSizeIndex } = this.state
    const rectPosition = [0, 0.5, 0];
    const rectSize = { width: 0.5, height: 0.5 };

    return (
      <View position={this.props.position}>
        <Image
          anchorPoint={anchorPoint}
          color={[0.1, 0.25, 0.5, 0.8]}
          position={rectPosition}
          useFrame={true}
          width={rectSize.width}
          height={rectSize.height}
        />
        <RectLayout
          anchorPoint={anchorPoint}
          alignment={contentAlignment}
          position={rectPosition}
          width={rectSize.width}
          height={rectSize.height}
        >
          {this.renderButton(ContentSizes[contentSizeIndex])}
        </RectLayout>

        {this.renderGrid(rectPosition, 1.0)}

        <LinearLayout 
          anchorPoint={AnchorPoint.topCenter}
          defaultItemAlignment={Alignment.centerCenter}
          defaultItemPadding={[0, 0, 0.15, 0]}
          position={[0, -0.2, 0]}
        >
          <LinearLayout orientation={Orientation.horizontal}>
            <AlignmentGroup
              alignment={anchorPoint}
              onAlignmentChanged={this.onAnchorPointChanged}
              title={'Anchor point:'}
            />
            <AlignmentGroup
              alignment={contentAlignment}
              onAlignmentChanged={this.onContentAlignmentChanged}
              title={'Content alignment:'}
            />
          </LinearLayout>

          <OptionGroup 
            anchorPoint={AnchorPoint.topCenter}
            multipleOptions={false}
            onOptionChanged={this.onContentSizeChanged}
            options={this.getContentSizeOptions()}
            initialSelectedOptionsIndices={[contentSizeIndex]}
            title={'Content size:'}
          />
        </LinearLayout>
      </View>
    )
  }
}

export { SceneRectLayout };
