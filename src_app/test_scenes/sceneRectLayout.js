import React from 'react';
import { Alignment, AlignmentGroup } from '../utils/alignment';

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
    console.log('next: ', Alignment.next(this.state.contentAlignment));
    this.setState({ contentAlignment: Alignment.next(this.state.contentAlignment) });
  }

  onAlignmentChanged = (alignment) => {
    console.log('onAlignmentChanged');
    this.setState({ alignment });
  }

  onContentAlignmentChanged = (alignment) => {
    console.log('onContentAlignmentChanged');
    this.setState({ contentAlignment: alignment });
  }

  onContentSizeChanged = (index) => {
    this.setState({ contentSizeIndex: index });
  }

  renderButton(size) {
    return (
      <button
        key={`${size.width}x${size.height}`}
        localPosition={[0, 0, 0.01]}
        width={size.width}
        height={size.height}
        roundness={0.0}
        textSize={0.08}
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

  renderRadio(index, selectedIndex, onChanged) {
    const contentSize = ContentSizes[index];
    const on = (index === selectedIndex);
    return (
      <toggle
        height={0.075}
        on={on}
        text={`${contentSize.width} x ${contentSize.height} m`}
        textSize={0.075}
        type={'radio'}
        onToggleChanged={() => onChanged(index)}
      />
    );
  }

  render() {
    const { contentAlignment, alignment, contentSizeIndex } = this.state

    const rectPosition = [0, 0.5, 0];
    const alignmentSectionPosition = [-0.5, -0.2, 0];
    const contentAlignmentSectionPosition = [-0.5, -0.6, 0];
    const contentSizeSectionPosition = [-0.5, -1.0, 0];
    const rectSize = { width: 0.5, height: 0.5 };

    return (
      <view localPosition={this.props.localPosition}>
        <image 
          alignment={alignment} 
          color={[0.1, 0.25, 0.50, 0.8]}
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
          {this.renderButton(ContentSizes[contentSizeIndex])}
        </rectLayout>

        {this.renderGrid(rectPosition, 1.0)}

        <AlignmentGroup 
          alignment={alignment}
          localPosition={alignmentSectionPosition}
          onAlignmentChanged={this.onAlignmentChanged}
          title={'Alignment:'}  
        />
        <AlignmentGroup 
          alignment={contentAlignment}
          localPosition={contentAlignmentSectionPosition}
          onAlignmentChanged={this.onContentAlignmentChanged}
          title={'Content alignment:'} 
        />

        <view localPosition={contentSizeSectionPosition}>
          <text textSize={0.08}>Content size:</text>
          <gridLayout defaultItemPadding={[0, 0.05, 0, 0]}>
            <toggleGroup>
              <linearLayout orientation={'vertical'}>
                {this.renderRadio(0, contentSizeIndex, this.onContentSizeChanged)}
                {this.renderRadio(1, contentSizeIndex, this.onContentSizeChanged)}
                {this.renderRadio(2, contentSizeIndex, this.onContentSizeChanged)}
              </linearLayout>
            </toggleGroup>
          </gridLayout>
        </view>
      </view>
    )
  }
}

export { SceneRectLayout };
