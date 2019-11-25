import React from 'react';

const Alignment = {
  topLeft: 'top-left',
  topCenter: 'top-center',
  topRight: 'top-right',
  centerLeft: 'center-left',
  centerCenter: 'center-center',
  centerRight: 'center-right',
  bottomLeft: 'bottom-left',
  bottomCenter: 'bottom-center',
  bottomRight: 'bottom-right',
};

class SceneRectLayout extends React.Component {

    constructor(props) {
      super(props);
      this.state = { contentAlignment: Alignment.topLeft, alignment: Alignment.topLeft, width: 0.5, height: 0.5 };
    }

      renderButton({width, height}) {
        return (
          <button
            width={width}
            height={height}
            roundness={0.0}
          >Button</button>
        );
      }

      selectNextContentAlignment = () => {
          const alignments = [
            Alignment.topLeft, Alignment.topCenter, Alignment.topRight,
            Alignment.centerLeft, Alignment.centerCenter, Alignment.centerRight,
            Alignment.bottomLeft, Alignment.bottomCenter, Alignment.bottomRight
          ];

          const currentIndex = alignments.indexOf(this.state.contentAlignment);
          const nextIndex = (currentIndex + 1) % alignments.length;
          this.setState({ contentAlignment: alignments[nextIndex].toString() });
      }

      selectNextAlignment = () => {
          const alignments = [
            Alignment.topLeft, Alignment.topCenter, Alignment.topRight,
            Alignment.centerLeft, Alignment.centerCenter, Alignment.centerRight,
            Alignment.bottomLeft, Alignment.bottomCenter, Alignment.bottomRight
          ];

          const currentIndex = alignments.indexOf(this.state.alignment);
          const nextIndex = (currentIndex + 1) % alignments.length;
          this.setState({ alignment: alignments[nextIndex].toString() });
        }

      selectNextSize = () => {
          const widths  = [0.5, 1.5, 0.6];
          const heights = [0.5, 0.6, 1.5];

          const currentWidthIndex  = widths.indexOf(this.state.width)
          const currentHeightIndex = heights.indexOf(this.state.height)

          const nextWidthIndex  = (currentWidthIndex + 1) % widths.length
          const nextHeightIndex = (currentHeightIndex + 1) % heights.length

          this.setState({ width: widths[nextWidthIndex], height: heights[nextHeightIndex]})
        }


      render() {
          const { contentAlignment, alignment, width, height } = this.state

          const rectPosition = [0, -0.5, 0]
          const rectWidth = 1.0
          const rectHeight = 1.0
          const textRect = `Rect: alignment=${alignment} contentAlignment=${contentAlignment} width=${rectWidth}, height=${rectHeight}`
          const textChild = `Content: width=${width} height=${height}`

          return (

            <view localPosition={this.props.localPosition}>
                <text localPosition={[-1, 1, 0]} textSize={0.08}>{textRect}</text>
                <text localPosition={[-0.4, 0.9, 0]} textSize={0.08}>{textChild}</text>

                <rectLayout
                  localPosition={rectPosition}
                  alignment={alignment}
                  contentAlignment={contentAlignment}
                  width = {rectWidth}
                  height = {rectHeight}
                  >
                    {this.renderButton({ width: width, height: height })}
                </rectLayout>

                <image localPosition={rectPosition} alignment={alignment} width={1} height={1} useFrame={true} color={[0.25, 1, 0.50, 0.8]}/>

                <linearLayout alignment={'top-center'} localPosition={[0, -1.5, 0.0]}>
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
                </linearLayout>

            </view>
          )
     }
}

export { SceneRectLayout };
