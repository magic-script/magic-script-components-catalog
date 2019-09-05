import React from 'react';

class SceneModelAnimated extends React.Component {
  render () {
    return (
      <view localPosition={this.props.localPosition}>
        <model
          modelPath={require('../../resources/hedra_anim.glb')}
          animationPauseState={false}
          animationPlaybackSpeed={1.0}
          // importScale={1}
        />
      </view>
    );
  }
}

export { SceneModelAnimated };
