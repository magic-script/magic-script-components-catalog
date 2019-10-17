import React from 'react';

class SceneScrollView extends React.Component {
  render() {
    const size = { width: 0.5, height: 0.5 };
    const aabb = { 
      min: [-0.5 * size.width, -0.5 * size.height, -0.1], 
      max: [0.5 * size.width, 0.5 * size.height, 0.1], 
    };
    return (
      <view localPosition={this.props.localPosition}>
        <scrollView scrollBounds={aabb} scrollBarVisibility={'always'} scrollDirection={'vertical'}>
          <scrollBar orientation={'vertical'} width={0.4} />
          {/* <image width={2 * size.width} height={2 * size.height} color={[1,1,0.5,1]}/> */}
          {/* <image icon={'keyboard-capital'} height={2 * size.height} /> */}

          <gridLayout defaultItemAlignment={'center-center'} columns={1}>
            <image width={size.width} height={size.height} color={[1,1,0.5,1]}/>
            <image width={size.width} height={size.height} color={[1,0.5,1,1]}/>
            <image width={size.width} height={size.height} color={[0.5,1,1,1]}/>
            <image width={size.width} height={size.height} color={[1,1,1,1]}/>
          </gridLayout>
        </scrollView>
      </view>
    );
  }
}

export { SceneScrollView };
