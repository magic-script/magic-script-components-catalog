import React from 'react';
import { Button, View} from 'magic-script-components';

class SceneButtonOutline extends React.Component {

  renderButtons() {
    let buttons = [];

    for (let i = 1; i < 10; i += 2) {
      const textSize = 0.01 + 0.01 * i * i;
      buttons.push(
        <Button 
          key={`button_${i}`}
          enabled={false}
          fontSize={textSize} 
          textColor={[1,1,1,0]}
        >{`${i}`}</Button>
      );
    }
    return buttons;
  }

  render() {
    return (
      <View position={this.props.position}>
        {this.renderButtons()}
      </View>
    );
  }
}

export { SceneButtonOutline };
