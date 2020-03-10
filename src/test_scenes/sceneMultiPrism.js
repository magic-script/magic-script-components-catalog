import React from 'react';
import { Button, Text, View } from 'magic-script-components';

class SceneMultiPrism extends React.Component {

  onAddPrism = () => {
    const createPrismFunc = (text, index) => {
      console.log('createPrismFunc.index: ', index);
      const columns = 4;
      const origin = { x: -0.5, y: 0.5 };
      const size = { width: 0.2, height: 0.2 }
      const gap = 0.05
      const x = origin.x + (index % columns) * (size.width + gap);
      const y = origin.y - Math.floor(index / columns) * (size.height + gap);
      console.log(`createPrismFunc: ${x}, ${y} `);
      return (
        <prism key={index} size={[size.width, size.height, 0.1]} position={[x, y, -0.3]}>
          <Text
            alignment={'center-center'}
            textAlignment={'center'} 
            text={text}
            textSize={0.03}
          />
        </prism>
      );
    }
      
    this.props.onPrismAction(createPrismFunc);
  }

  onDeletePrism = () => {
    this.props.onPrismAction();
  }

  render () {
    const buttonProps = {
      alignment: 'center-center',
      textSize: 0.08
    };
    return (
      <View localPosition={this.props.localPosition}>
        <Button {...buttonProps} localPosition={[0, 0.7, 0]} onClick={this.onAddPrism}>Add prism</Button>
        <Button {...buttonProps} localPosition={[0, 0.45, 0]} onClick={this.onDeletePrism}>Delete prism</Button>
      </View>
    );
  }
}

export { SceneMultiPrism };
