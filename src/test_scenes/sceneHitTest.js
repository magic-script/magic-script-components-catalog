import React from 'react';
import { Button, View } from 'magic-script-components';

class SceneHitTest extends React.Component {
  render() {
    return (
      <View localPosition={this.props.localPosition}>
        <Button 
          key={'back'}
          localPosition={[0, 0, -0.2]}
          width={0.9}
          height={0.3}
          textSize={0.14}
        >Back button</Button>
        <Button 
          key={'front'}
          localPosition={[0, 0, 0.2]} 
          width={0.9}
          height={0.3}
          textSize={0.14}
        >Front button</Button>
      </View>
    );
  }
}

export { SceneHitTest };
