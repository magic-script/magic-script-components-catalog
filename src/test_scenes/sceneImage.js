import React from 'react';
import { Image, Line, LinearLayout, Text, View } from 'magic-script-components';

class SceneImage extends React.Component {
  renderImage(color, fit, useFrame) {
    const width = 0.75;
    const height = 0.5;
    const border = 0.03;
    return (
      <LinearLayout 
        defaultItemAlignment={'top-center'}
        defaultItemPadding={[0, 0, 0.01, 0]}
      >
        <View>
          {this.renderRectangle(width + border, height + border)}
          <Image
            color={color}
            filePath={require('../../assets/resources/board.png')}
            fit={fit}
            width={width}
            height={height}
            useFrame={useFrame}
          />
        </View>
        
        <Text 
          textAlign={'center'}
          fontSize={0.06}
        >{fit}</Text>
      </LinearLayout>
    );
  }

  renderRectangle(width, height) {
    const w = 0.5 * width;
    const h = 0.5 * height;
    return (
      <Line 
        color={'yellow'}
        points={[[-w, h, 0], [w, h, 0], [w, -h, 0], [-w, -h, 0], [-w, h, 0] ]}
      />
    );
  }

  render () {
    return (
      <LinearLayout 
        anchorPoint={'center-center'}
        defaultItemAlignment={'center-center'}
        defaultItemPadding={[0, 0, 0.1, 0]}
      >
        {this.renderImage('yellow', 'stretch', false)}
        {this.renderImage('orange', 'aspect-fill', true)}
        {this.renderImage('white', 'aspect-fit', true)}
      </LinearLayout>
    );
  }
}

export { SceneImage };
