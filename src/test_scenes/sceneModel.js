import React from 'react';
import { Platform, View, Text, Model } from 'magic-script-components';

class SceneModel extends React.Component {
  renderAnimatedModel(position) {
    const isAnimatedGlbSupported = (Platform.OS !== 'android');
    
    if (isAnimatedGlbSupported) {
      return <Model path={require('../../assets/resources/models/animated.glb')} animation={{ name: 'All Animations' }} position={position} scale={[0.2, 0.2, 0.2]} />;
    } else {
      return <Text 
        anchorPoint={'center-center'} 
        boundsSize={{ boundsSize: [0.5, 0], wrap: true }} 
        position={position} 
        textAlignment={'center'} 
        textColor={'red'}
        fontSize={0.08}
      >Animated models are not supported on Android.</Text>;
    }
  }

  render () {
    return (
      <View position={this.props.localPosition}>
          <Text anchorPoint={'center-center'} position={[-0.3, 0.4, 0]} textSize={0.08}>Static (.glb)</Text>
          <Text anchorPoint={'center-center'} position={[0.3, 0.4, 0]} textSize={0.08}>Animated (.glb)</Text>
          <Model path={require('../../assets/resources/models/static.glb')} position={[-0.3, 0, 0]} scale={[0.3, 0.3, 0.3]} />
          {this.renderAnimatedModel([0.3, 0, 0])} 
      </View>
    );
  }
}

export { SceneModel };
