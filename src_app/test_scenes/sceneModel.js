import React from 'react';
import { Platform } from 'magic-script-components';

class SceneModel extends React.Component {
  renderAnimatedModel(position) {
    const isAnimatedGlbSupported = (Platform.OS !== 'android');
    
    if (isAnimatedGlbSupported) {
      return <model modelPath={require('../../resources/models/animated.glb')} localPosition={position} localScale={[0.2, 0.2, 0.2]} />;
    } else {
      return <text 
        alignment={'center-center'} 
        boundsSize={{ boundsSize: [0.5, 0], wrap: true }} 
        localPosition={position} 
        text={'Animated models are not supported on Android.'} 
        textAlignment={'center'} 
        textColor={'red'}
        textSize={0.08}
      />;
    }
  }

  render () {
    
    return (
      <view localPosition={this.props.localPosition}>
          <text alignment={'center-center'} localPosition={[-0.3, 0.4, 0]} textSize={0.08}>Static (.glb)</text>
          <text alignment={'center-center'} localPosition={[0.3, 0.4, 0]} textSize={0.08}>Animated (.glb)</text>
          <model modelPath={require('../../resources/models/static.glb')} localPosition={[-0.3, 0, 0]} localScale={[0.3, 0.3, 0.3]} />
          {this.renderAnimatedModel([0.3, 0, 0])} 
      </view>
    );
  }
}

export { SceneModel };
