import React from 'react';
import { AnchorPoint, Model, Platform, Text, TextAlign, View } from 'magic-script-components';

class SceneModel extends React.Component {
  renderAnimatedModel(position) {
    const isAnimatedGlbSupported = (Platform.OS !== 'android');
    
    if (isAnimatedGlbSupported) {
      return <Model path={require('../../assets/resources/models/animated.glb')} animation={{ name: 'All Animations' }} position={position} scale={[0.2, 0.2, 0.2]} />;
    } else {
      return <Text 
        anchorPoint={AnchorPoint.centerCenter} 
        boundsSize={{ boundsSize: [0.5, 0], wrap: true }} 
        position={position} 
        textAlignment={TextAlign.center} 
        textColor={'red'}
        fontSize={0.08}
      >Animated models are not supported on Android.</Text>;
    }
  }

  render () {
    return (
      <View position={this.props.position}>
          <Text anchorPoint={AnchorPoint.centerCenter} position={[-0.3, 0.4, 0]} textSize={0.08}>Static (.glb)</Text>
          <Text anchorPoint={AnchorPoint.centerCenter} position={[0.3, 0.4, 0]} textSize={0.08}>Animated (.glb)</Text>
          <Model path={require('../../assets/resources/models/static.glb')} position={[-0.3, 0, 0]} scale={[0.3, 0.3, 0.3]} />
          {this.renderAnimatedModel([0.3, 0, 0])} 
      </View>
    );
  }
}

export { SceneModel };
