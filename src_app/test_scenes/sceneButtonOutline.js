import React from 'react';

class SceneButtonOutline extends React.Component {

  renderButtons() {
    let buttons = [];

    for (let i = 1; i < 10; i += 2) {
      const textSize = 0.01 + 0.01 * i * i;
      buttons.push(
        <button 
          key={`button_${i}`}
          enabled={false}
          textSize={textSize} 
          textColor={[1,1,1,0]}
        >{`${i}`}</button>
      );
    }
    return buttons;
  }

  render() {
    return (
      <view localPosition={this.props.localPosition}>
        {this.renderButtons()}
      </view>
    );
  }
}

export { SceneButtonOutline };
