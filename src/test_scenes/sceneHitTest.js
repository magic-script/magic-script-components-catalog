import React from 'react';
import { Button, View } from 'magic-script-components';

class SceneHitTest extends React.Component {
  render() {
    return (
      <View position={this.props.position}>
        <Button 
          key={'back'}
          position={[0, 0, -0.2]}
          width={0.9}
          height={0.3}
          fontSize={0.14}
        >Back button</Button>
        <Button 
          key={'front'}
          position={[0, 0, 0.2]} 
          width={0.9}
          height={0.3}
          fontSize={0.14}
        >Front button</Button>
      </View>
    );
  }
}

export { SceneHitTest };
