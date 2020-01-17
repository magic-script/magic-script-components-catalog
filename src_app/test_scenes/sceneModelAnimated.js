import React from 'react';
import { Factory } from 'magic-script-components';

class SceneModelAnimated extends React.Component {
  render () {
    const path = (Platform.OS === 'Android') ? require('../../resources/hedra_anim.glb') : require('../../resources/hedra_anim.glb')
    return (
      <view localPosition={this.props.localPosition}>
        <model
          modelPath={path}
          importScale={0.6}
        />
      </view>
    );
  }
}

export { SceneModelAnimated };
