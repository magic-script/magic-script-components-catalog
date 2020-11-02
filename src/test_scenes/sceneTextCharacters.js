import React from 'react';
import { MathUtils } from '../utils/mathUtils';
import { View, Text, GridLayout, Toggle } from 'magic-script-components';

class SceneTextCharacters extends React.Component {
  static defaultProps = {
    columns: 5,
  };

  constructor(props) {
    super(props);
    this.state = { uppercase: false, specialCharacters: false };
  }

  onUppercaseChanged = event => {
    this.setState({ uppercase: event.On });
  }

  onContentChanged = event => {
    this.setState({ specialCharacters: event.On });
  }

  renderCharacters () {
    const { uppercase, specialCharacters } = this.state;
    const string = specialCharacters ? ',.:_-!@#$%^&*()[]{}<>/\\~`假借字•łóźśćąę' : '0123456789abcdefghijklmnopqrstuvwxyz';
    const characters = uppercase ? [...string.toUpperCase()] : [...string];
    const minTextSize = specialCharacters ? 0.2 : 0.05;
    const maxTextSize = 0.2;
    const columns = this.props.columns;
    const rows = Math.ceil(characters.length / columns);
    const textSizeFactor = (maxTextSize - minTextSize) / characters.length;

    return characters.map((char, index) => {
      const textSize = minTextSize + textSizeFactor * index;
      const column = index % columns;
      const row = Math.floor(index / columns);
      const textColor = MathUtils.getGridColor(column / (columns - 1), row / (rows - 1));
      return <Text key={index} textColor={textColor} fontSize={textSize}>{char}</Text>;
    });
  }

  render() {
    const { uppercase, specialCharacters } = this.state;
    return (
      <View position={this.props.position}>
        <GridLayout 
          anchorPoint={'top-center'} 
          defaultItemAlignment={'center-center'}
          columns={this.props.columns} 
          position={[0, 1, 0]}
          width={1.2} 
          height={1.7}
        >
          {this.renderCharacters()}
        </GridLayout>
        
        <Toggle 
          anchorPoint={'center-right'}
          position={[0.5, -0.9, 0]}  
          height={0.1} 
          on={specialCharacters} 
          onToggleChanged={this.onContentChanged}
          fontSize={0.08} 
        >Special characters</Toggle>
        <Toggle 
          anchorPoint={'center-right'}
          position={[0.5, -1.1, 0]}  
          height={0.1} 
          on={uppercase} 
          onToggleChanged={this.onUppercaseChanged}
          fontSize={0.08} 
        >Uppercase</Toggle>
      </View>
    );
  }
}

export { SceneTextCharacters };
