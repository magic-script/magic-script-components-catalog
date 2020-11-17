import React from 'react';
import { MathUtils } from '../utils/mathUtils';
import { AnchorPoint, LinearLayout, Orientation, Platform, ScrollBar, View } from 'magic-script-components';

class SceneScrollBar extends React.Component {
  render() {
    const quat = (Platform.OS == 'Lumin') ? MathUtils.rotateBy(1.5707963268, [0, 0, -1]) : [0,0,0,0];
    return (
      <View position={this.props.position}>
        <LinearLayout
          anchorPoint={AnchorPoint.centerCenter}
          defaultItemPadding={[0.07, 0, 0.07, 0]}
          orientation={Orientation.horizontal}>
          <ScrollBar thumbSize={0.25} thumbPosition={0.33} length={2.0} thickness={0.04} rotation={quat} />
          <LinearLayout>
            <LinearLayout defaultItemPadding={[0.07, 0.07, 0.07, 0.07]} orientation={Orientation.horizontal}>
              <ScrollBar thumbPosition={0.1} length={1.2} thickness={0.07} rotation={quat} />
              <ScrollBar thumbSize={1.0} thumbPosition={0.33} length={0.7} thickness={0.11} rotation={quat} />
            </LinearLayout>
            <LinearLayout defaultItemPadding={[0.07, 0.07, 0.07, 0.07]}>
              <ScrollBar thumbPosition={0.1} length={1.2} thickness={0.07} orientation={Orientation.horizontal} />
              <ScrollBar thumbSize={0.33} thumbPosition={0.33} length={1} thickness={0.11} orientation={Orientation.horizontal} />
              <ScrollBar thumbSize={0.5} thumbPosition={1.0} length={1.2} thickness={0.08} orientation={Orientation.horizontal} />
            </LinearLayout>
          </LinearLayout>
        </LinearLayout>
      </View>
    );
  }
}

export { SceneScrollBar };
