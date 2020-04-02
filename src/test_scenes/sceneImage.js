import React from 'react';
import { Image, LinearLayout, Text  } from 'magic-script-components';

class SceneImage extends React.Component {
  renderImage(color, fit, useFrame) {
    return (
      <LinearLayout 
        defaultItemAlignment={'top-center'}
        defaultItemPadding={[0, 0, 0.01, 0]}
      >
        <Image
          color={color}
          filePath={require('../../assets/resources/board.png')}
          fit={fit}
          width={0.75}
          height={0.5}
          useFrame={useFrame}
        />
        <Text 
          text={fit}
          textAlignment={'center'}
          textSize={0.06}
        />
      </LinearLayout>
    );
  }

  render () {
    return (
      <LinearLayout 
        alignment={'center-center'}
        defaultItemAlignment={'center-center'}
        defaultItemPadding={[0.05, 0, 0.05, 0]}
      >
        {this.renderImage('yellow', 'stretch', false)}
        {this.renderImage('orange', 'aspect-fill', true)}
        {this.renderImage('white', 'aspect-fit', true)}
      </LinearLayout>
    );
  }
}

export { SceneImage };
