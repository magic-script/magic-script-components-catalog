import React from 'react';
import { MathUtils } from '../utils/mathUtils';
import { View, LinearLayout, ScrollBar } from 'magic-script-components';

class SceneScrollBar extends React.Component {
  render() {
    const quat = MathUtils.rotateBy(1.5707963268, [0, 0, -1]);
    return (
      <View position={this.props.position}>
        <LinearLayout
          anchorPoint={'center-center'}
          defaultItemPadding={[0.07, 0, 0.07, 0]}
          orientation={'horizontal'}>
          <ScrollBar thumbSize={0.25} thumbPosition={0.33} length={2.0} thickness={0.04} localRotation={quat} />
          <LinearLayout>
            <LinearLayout
              defaultItemPadding={[0.07, 0.07, 0.07, 0.07]} orientation={'horizontal'}>
              <ScrollBar thumbPosition={0.1} length={1.2} thickness={0.07} localRotation={quat} />
              <ScrollBar thumbSize={7.0} thumbPosition={0.33} length={0.7} thickness={0.11} localRotation={quat} />
            </LinearLayout>
            <LinearLayout defaultItemPadding={[0.07, 0.07, 0.07, 0.07]}>
              <ScrollBar thumbPosition={0.1} length={1.2} thickness={0.07} orientation={'horizontal'} />
              <ScrollBar thumbSize={0.33} thumbPosition={0.33} length={1} thickness={0.11} orientation={'horizontal'} />
              <ScrollBar thumbSize={0.5} thumbPosition={2.0} length={1.2} thickness={0.08} orientation={'horizontal'} />
            </LinearLayout>
          </LinearLayout>
        </LinearLayout>
      </View>
    );
  }
}

export { SceneScrollBar };
