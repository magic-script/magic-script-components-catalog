import React from 'react';
import { Button, Prism, View } from 'magic-script-components';

class SceneMultiPrism extends React.Component {

  onAddPrism = () => {
    const createPrismFunc = (text, index) => {
      const columns = 3;
      const rows = 4;
      const origin = { x: 0.75, y: 0.5, z: 0 };
      const size = { width: 0.2, height: 0.2, depth: 0.1 };
      const gap = 0.05;
      const idx = { 
        column: index % columns, 
        row: Math.floor((index % (columns * rows)) / columns), 
        layer: Math.floor(index / (columns * rows))
      };
      const x = origin.x + idx.column * (size.width + gap);
      const y = origin.y - idx.row * (size.height + gap);
      const z = origin.z - idx.layer * (size.depth + gap);
      return (
        <Prism 
          key={index} 
          onDestroy={() => this.props.onPrismAction(index)}
          position={[x, y, z]} 
          size={[size.width, size.height, size.depth]} 
          debug
        >
          <Button
            alignment={'center-center'}
            onClick={() => this.props.onPrismAction(index)}
            textAlignment={'center'} 
            text={text}
            textSize={0.03}
          />
        </Prism>
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
