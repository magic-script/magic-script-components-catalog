import React from 'react';
import { AnchorPoint, Model, Text, View } from 'magic-script-components';

class SceneTransformations extends React.Component {

  render() {
    return (
      <View position={this.props.position}>
        <Text 
          position={[0, 1, 0]}
          fontSize={0.08}
          multiline={true}
          anchorPoint={AnchorPoint.topCenter}
          width={1.0}
          height={0.3}
        >
          Should display 2 identical boxes (same scale, rotation, horizontal position)
        </Text> 

        <View position={[0, 0.1, 0]}>
          <Model 
            path={require('../../assets/resources/models/static.glb')}
            position={[0, 0.2, -0.2]}
            rotation={[0.0, 0.38268346, 0.0, 0.9238795]}
            scale={[0.5, 0.5, 0.5]}
          />
        </View>

        <View position={[0, -0.7, 0]}>
          <Model 
            path={require('../../assets/resources/models/static.glb')}
            transform={[0.3535534, 0.0, -0.35355334, 0.0, 0.0, 0.5, 0.0, 0.0, 0.35355334, 0.0, 0.3535534, 0.0, 0.0, 0.2, -0.2, 1.0]}
          />  
        </View>
      </View>
    );
  }
}

export { SceneTransformations };
