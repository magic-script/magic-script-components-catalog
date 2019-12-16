import React from 'react';
import { Alignment, AlignmentGroup } from '../utils/alignment';

class SceneRectLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alignment: Alignment.topLeft, contentAlignment: Alignment.topLeft, width: 0.25, height: 0.25 };
  }

  // selectNextContentAlignment = () => {
  //   const alignments = [
  //     Alignment.topLeft, Alignment.topCenter, Alignment.topRight,
  //     Alignment.centerLeft, Alignment.centerCenter, Alignment.centerRight,
  //     Alignment.bottomLeft, Alignment.bottomCenter, Alignment.bottomRight
  //   ];

  //   const currentIndex = alignments.indexOf(this.state.contentAlignment);
  //   const nextIndex = (currentIndex + 1) % alignments.length;
  //   this.setState({ contentAlignment: alignments[nextIndex].toString() });
  // }

  // selectNextAlignment = () => {
  //   const alignments = [
  //     Alignment.topLeft, Alignment.topCenter, Alignment.topRight,
  //     Alignment.centerLeft, Alignment.centerCenter, Alignment.centerRight,
  //     Alignment.bottomLeft, Alignment.bottomCenter, Alignment.bottomRight
  //   ];

  //   const currentIndex = alignments.indexOf(this.state.alignment);
  //   const nextIndex = (currentIndex + 1) % alignments.length;
  //   this.setState({ alignment: alignments[nextIndex].toString() });
  // }

  // selectNextSize = () => {
  //   const widths  = [0.5, 1.5, 0.6];
  //   const heights = [0.5, 0.6, 1.5];

  //   const currentWidthIndex  = widths.indexOf(this.state.width)
  //   const currentHeightIndex = heights.indexOf(this.state.height)

  //   const nextWidthIndex  = (currentWidthIndex + 1) % widths.length
  //   const nextHeightIndex = (currentHeightIndex + 1) % heights.length

  //   this.setState({ width: widths[nextWidthIndex], height: heights[nextHeightIndex]})
  // }

  onAlignmentChanged = (alignment) => {
    this.setState({ alignment });
  }

  onAContentAlignmentChanged = (alignment) => {
    this.setState({ contentAlignment: alignment });
  }

  renderButton({width, height}) {
    return (
      <button
        localPosition={[0, 0, 0.01]}
        width={width}
        height={height}
        roundness={0.0}
      >Button</button>
    );
  }

  renderGrid(position, size,) {
    const min = { x: -0.5 * size, y: -0.5 * size };
    const max = { x: 0.5 * size, y: 0.5 * size };
    const points = [ [min.x, min.y, 0], [min.x, max.y, 0], [max.x, max.y, 0], [max.x, min.y, 0], [min.x, min.y, 0] ];
    return (
      <view alignment={'center-center'} localPosition={position}>
        <line points={points} color={[1,1,0,1]}/>
        <line points={[[min.x, 0, 0], [max.x, 0, 0]]} color={[1,1,0,0.5]}/>
        <line points={[[0, min.y, 0], [0, max.y, 0]]} color={[1,1,0,0.5]}/>
      </view>
    );
  }

  render() {
    const { contentAlignment, alignment, width, height } = this.state

    const rectPosition = [0, 0.5, 0]
    const alignmentSectionPosition = [-0.5, -0.2, 0]
    const contentAlignmentSectionPosition = [-0.5, -0.6, 0]
    const rectSize = { width: 0.5, height: 0.5 };
    const textRect = `Rect: alignment=${alignment} contentAlignment=${contentAlignment} width=${rectSize.width}, height=${rectSize.height}`
    const textChild = `Content: width=${width} height=${height}`

    return (
      <view localPosition={this.props.localPosition}>
        <image 
          alignment={alignment} 
          color={[0.25, 1, 0.50, 0.8]}
          localPosition={rectPosition} 
          useFrame={true}
          width={rectSize.width}
          height={rectSize.height}
        />
        <rectLayout
          alignment={alignment}
          contentAlignment={contentAlignment}
          localPosition={rectPosition}
          width={rectSize.width}
          height={rectSize.height}
        >
          {this.renderButton({ width: width, height: height })}
        </rectLayout>

        {this.renderGrid(rectPosition, 1.0)}

        {/* <linearLayout alignment={'top-center'} localPosition={[0, -0.5, 0.0]}>
          <button
            textSize={0.08}
            roundness={0.0}
            onClick={this.selectNextContentAlignment}>Change contentAlignment</button>
          <button
            textSize={0.08}
            roundness={0.0}
            onClick={this.selectNextAlignment}>Change rect alignment</button>
          <button
            textSize={0.08}
            roundness={0.0}
            onClick={this.selectNextSize}>Change content size</button>
        </linearLayout> */}

        <AlignmentGroup 
          alignment={'center-center'}
          localPosition={alignmentSectionPosition}
          onAlignmentChanged={this.onAlignmentChanged}
          title={'Alignment:'}  
        />
        <AlignmentGroup 
          alignment={'top-center'}
          localPosition={contentAlignmentSectionPosition}
          onAlignmentChanged={this.onContentAlignmentChanged}
          title={'Content alignment:'} 
        />
      </view>
    )
  }
}

export { SceneRectLayout };
