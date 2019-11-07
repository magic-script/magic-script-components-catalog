import React from 'react';

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
    const alpha = 0.2;
    return (
      <view localPosition={this.props.localPosition}>
        <toggle localPosition={[0.3, 0.1, 0]} height={0.08} textSize={0.08} on={isVertical} onToggleChanged={this.onOrientationChanged}>{'Vertical scroll'}</toggle>
        <scrollView 
          localPosition={[0, -0.7, 0]}
          onScrollChanged={this.onScrollChanged}
          scrollBarVisibility={'always'} 
          scrollBounds={aabb} 
          scrollDirection={direction}
          scrollValue={scrollValue}
        >
          <scrollBar localPosition={scrollBarPosition} Orientation={orientation} width={scrollBarLength} height={scrollBarThickness} />
          <linearLayout alignment={alignment} defaultItemAlignment={'center-center'} orientation={orientation}>
            <image width={size} height={size} color={[1,1,0.5,alpha]}/>
            <image width={size} height={size} color={[1,0.5,1,alpha]}/>
            <image width={size} height={size} color={[0.5,1,1,alpha]}/>
            <image width={size} height={size} color={[1,0.5,0.5,alpha]}/>
            <image width={size} height={size} color={[0.5,0.5,1,alpha]}/>
            <image width={size} height={size} color={[0.5,1,0.5,alpha]}/>
            <image width={size} height={size} color={[0.75,.75,0.75,alpha]}/>
            <image width={size} height={size} color={[1,1,1,alpha]}/>
          </linearLayout>
        </scrollView>

        <view localPosition={[0, -1.5, 0]}>
          <text localPosition={[0, 0.05, 0]} textSize={0.08} alignment={'bottom-center'}>Set content alignment:</text>
          <button localPosition={[-0.3, -0.1, 0]} textSize={0.08} roundness={0} onClick={this.onTopLeftButtonClick}>TL</button>
          <button localPosition={[ 0.0, -0.1, 0]} textSize={0.08} roundness={0} onClick={this.onTopCenterButtonClick}>TC</button>
          <button localPosition={[ 0.3, -0.1, 0]} textSize={0.08} roundness={0} onClick={this.onTopRightButtonClick}>TR</button>
          <button localPosition={[-0.3, -0.3, 0]} textSize={0.08} roundness={0} onClick={this.onCenterLeftButtonClick}>CL</button>
          <button localPosition={[ 0.0, -0.3, 0]} textSize={0.08} roundness={0} onClick={this.onCenterCenterButtonClick}>CC</button>
          <button localPosition={[ 0.3, -0.3, 0]} textSize={0.08} roundness={0} onClick={this.onCenterRightButtonClick}>CR</button>
          <button localPosition={[-0.3, -0.5, 0]} textSize={0.08} roundness={0} onClick={this.onBottomLeftButtonClick}>BL</button>
          <button localPosition={[ 0.0, -0.5, 0]} textSize={0.08} roundness={0} onClick={this.onBottomCenterButtonClick}>BC</button>
          <button localPosition={[ 0.3, -0.5, 0]} textSize={0.08} roundness={0} onClick={this.onBottomRightButtonClick}>BR</button>
        </view>
      </view>
    );
  }
}

export { SceneScrollView };
