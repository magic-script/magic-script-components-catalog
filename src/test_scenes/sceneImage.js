import React from 'react';
import { Alignment, AnchorPoint, FitMode, Image, Line, LinearLayout, Text, TextAlign, View } from 'magic-script-components';

class SceneImage extends React.Component {
  renderImage(color, fit, useFrame) {
    const width = 0.75;
    const height = 0.5;
    const border = 0.03;
    return (
      <LinearLayout 
        defaultItemAlignment={Alignment.topCenter}
        defaultItemPadding={[0, 0, 0.01, 0]}
      >
        <View>
          {this.renderRectangle(width + border, height + border)}
          <Image
            color={color}
            path={require('../../assets/resources/board.png')}
            fit={fit}
            width={width}
            height={height}
            useFrame={useFrame}
          />
        </View>
        
        <Text 
          textAlign={TextAlign.center}
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
        anchorPoint={AnchorPoint.centerCenter}
        defaultItemAlignment={Alignment.centerCenter}
        defaultItemPadding={[0, 0, 0.1, 0]}
      >
        {this.renderImage('yellow', FitMode.stretch, false)}
        {this.renderImage('orange', FitMode.aspectFill, true)}
        {this.renderImage('white', FitMode.aspectFit, true)}
      </LinearLayout>
    );
  }
}

export { SceneImage };
