import React from 'react';

const Orientation = {
  vertical: 'vertical',
  horizontal: 'horizontal',
};

class SceneScrollView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isVertical: true };
  }

  onOrientationChanged = (e) => {
    this.setState({ isVertical: e.On });
  }

  render() {
    const { isVertical } = this.state;
    const contentSize = { width: 1.25, height: 1.25 };
    const imageSize = { width: 1, height: 1};
    const aabb = { 
      min: [-0.5 * contentSize.width, -0.5 * contentSize.height, -0.1], 
      max: [0.5 * contentSize.width, 0.5 * contentSize.height, 0.1], 
    };
    const orientation = isVertical ? Orientation.vertical : Orientation.horizontal;
    const alpha = 0.2;
    return (
      <view localPosition={this.props.localPosition}>
        <toggle localPosition={[0.2, 0.8, 0]} height={0.08} textSize={0.08} on={isVertical} onToggleChanged={this.onOrientationChanged}>{'Vertical scroll'}</toggle>
        <scrollView debug scrollBounds={aabb} scrollBarVisibility={'always'} scrollDirection={orientation}>
          <scrollBar orientation={orientation} width={contentSize.height} height={0.04} />
          <linearLayout debug defaultItemAlignment={'center-center'} orientation={orientation}>
            <image width={imageSize.width} height={imageSize.height} color={[1,1,0.5,alpha]}/>
            <image width={imageSize.width} height={imageSize.height} color={[1,0.5,1,alpha]}/>
            <image width={imageSize.width} height={imageSize.height} color={[0.5,1,1,alpha]}/>
            <image width={imageSize.width} height={imageSize.height} color={[1,0.5,0.5,alpha]}/>
            <image width={imageSize.width} height={imageSize.height} color={[0.5,0.5,1,alpha]}/>
            <image width={imageSize.width} height={imageSize.height} color={[0.5,1,0.5,alpha]}/>
            <image width={imageSize.width} height={imageSize.height} color={[0.5,0.5,0.5,alpha]}/>
            <image width={imageSize.width} height={imageSize.height} color={[1,1,1,alpha]}/>
          </linearLayout>
        </scrollView>
      </view>
    );
  }
}

export { SceneScrollView };
