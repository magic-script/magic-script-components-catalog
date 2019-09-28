import React from 'react';

class SceneScrollBar extends React.Component {
  render() {
    return (
      <view localPosition={this.props.localPosition}>
        <linearLayout
          alignment={'center-center'}
          defaultItemPadding={[0.07, 0, 0.07, 0]}
          orientation={'horizontal'}>
          <scrollBar thumbSize={0.25} thumbPosition={0.33} height={2.0} width={0.04}></scrollBar>
          <linearLayout>
            <linearLayout
              defaultItemPadding={[0.07, 0.07, 0.07, 0.07]} orientation={'horizontal'}>
              <scrollBar width={0.07} thumbPosition={0.1} height={1.2}></scrollBar>
              <scrollBar thumbSize={7.0} thumbPosition={0.33} width={0.11} height={0.7}></scrollBar>
              <scrollBar ></scrollBar>
            </linearLayout>
            <linearLayout
              defaultItemPadding={[0.07, 0.07, 0.07, 0.07]}>
              <scrollBar width={1.2} thumbPosition={0.1} height={0.07} orientation={'horizontal'}></scrollBar>
              <scrollBar thumbSize={0.33} thumbPosition={0.33} width={1} height={0.11} orientation={'horizontal'}></scrollBar>
              <scrollBar thumbSize={0.5} thumbPosition={2.0} width={1.2} height={0.08} orientation={'horizontal'}></scrollBar>
            </linearLayout>
          </linearLayout>
        </linearLayout>
      </view>
    );
  }
}

export { SceneScrollBar };
