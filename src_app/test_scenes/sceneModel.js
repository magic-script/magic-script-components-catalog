import React from 'react';

class SceneModel extends React.Component {
  render () {
    return (
      <view localPosition={this.props.localPosition}>
          <text alignment={'center-center'} localPosition={[-0.3, 0.4, 0]} textSize={0.08}>Static (.glb)</text>
          <text alignment={'center-center'} localPosition={[0.3, 0.4, 0]} textSize={0.08}>Animated (.glb)</text>
          <model debug modelPath={require('../../resources/models/static.glb')} localPosition={[-0.3, 0, 0]} localScale={[0.3, 0.3, 0.3]} />
          <model debug modelPath={require('../../resources/models/animated.glb')} localPosition={[0.3, 0, 0]} localScale={[0.2, 0.2, 0.2]} />
      </view>
    );
  }
}

export { SceneModel };
