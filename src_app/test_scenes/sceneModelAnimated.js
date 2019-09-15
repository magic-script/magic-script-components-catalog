import React from 'react';

class SceneModelAnimated extends React.Component {
  render () {
    return (
      <view localPosition={this.props.localPosition}>
        <model
          modelPath={require('../../resources/hedra_anim.glb')}
          importScale={0.6}
        />
      </view>
    );
  }
}

export { SceneModelAnimated };
