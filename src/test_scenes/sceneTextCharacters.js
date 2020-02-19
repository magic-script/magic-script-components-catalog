import React from 'react';
import { MathUtils } from '../utils/mathUtils';

class SceneTextCharacters extends React.Component {
  static defaultProps = {
    columns: 5,
    localPosition: [0, 0, 0],
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
      return <text key={index} textColor={textColor} textSize={textSize}>{char}</text>;
    });
  }

  render() {
    const { uppercase, specialCharacters } = this.state;
    return (
      <view localPosition={this.props.localPosition}>
        <gridLayout 
          alignment={'top-center'} 
          defaultItemAlignment={'center-center'}
          columns={this.props.columns} 
          localPosition={[0, 1, 0]}
          width={1.2} 
          height={1.7}
        >
          {this.renderCharacters()}
        </gridLayout>
        
        <toggle 
          alignment={'center-right'}
          localPosition={[0.5, -0.9, 0]}  
          height={0.1} 
          on={specialCharacters} 
          onToggleChanged={this.onContentChanged}
          textSize={0.08} 
        >Special characters</toggle>
        <toggle 
          alignment={'center-right'}
          localPosition={[0.5, -1.1, 0]}  
          height={0.1} 
          on={uppercase} 
          onToggleChanged={this.onUppercaseChanged}
          textSize={0.08} 
        >Uppercase</toggle>
      </view>
    );
  }
}

export { SceneTextCharacters };
