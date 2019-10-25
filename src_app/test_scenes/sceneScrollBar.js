import React from 'react';
import { MathUtils } from '../utils/mathUtils';

class SceneScrollBar extends React.Component {
  render() {
    const quat = MathUtils.rotateBy(1.5707963268, [0, 0, -1]);
    return (
      <view localPosition={this.props.localPosition}>
        <linearLayout
          alignment={'center-center'}
          defaultItemPadding={[0.07, 0, 0.07, 0]}
          orientation={'horizontal'}>
          <scrollBar thumbSize={0.25} thumbPosition={0.33} height={0.04} width={2.0} localRotation={quat} />
          <linearLayout>
            <linearLayout
              defaultItemPadding={[0.07, 0.07, 0.07, 0.07]} orientation={'horizontal'}>
              <scrollBar thumbPosition={0.1} width={1.2} height={0.07} localRotation={quat} />
              <scrollBar thumbSize={7.0} thumbPosition={0.33} width={0.7} height={0.11} localRotation={quat} />
            </linearLayout>
            <linearLayout defaultItemPadding={[0.07, 0.07, 0.07, 0.07]}>
              <scrollBar thumbPosition={0.1} width={1.2} height={0.07} orientation={'horizontal'} />
              <scrollBar thumbSize={0.33} thumbPosition={0.33} width={1} height={0.11} orientation={'horizontal'} />
              <scrollBar thumbSize={0.5} thumbPosition={2.0} width={1.2} height={0.08} orientation={'horizontal'} />
            </linearLayout>
          </linearLayout>
        </linearLayout>
      </view>
    );
  }
}

export { SceneScrollBar };
