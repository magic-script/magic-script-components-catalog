import React from 'react';

class SceneTextEdit extends React.Component {

  renderTextEdit({ y, hint, hintColor, title, text, multiline, password }) {
    const width = 0.9;
    const height = multiline ? 0.6 : 0.08;
    return (
      <view localPosition={[0, y, 0]}>
        <text 
          // debug={true} 
          alignment={'bottom-center'} 
          boundsSize={{ boundsSize: [width, 0], wrap: false }}
          textColor={[1,1,1,1]}
          textSize={0.08}
        >{title}</text>
        <line points={[[-0.5 * width, 0, 0], [0.5 * width, 0, 0]]} color={[1,1,1,0.75]}/>
        <textEdit 
          // debug={true} 
          alignment={'top-center'} 
          hint={hint} 
          hintColor={hintColor} 
          localPosition={[0, -0.05, 0]} 
          multiline={multiline}
          textSize={0.06} 
          width={width} 
          height={height} 
          password={password}
        >{text}</textEdit>
      </view>
    );
  }

  render () {
    return (
      <view localPosition={this.props.localPosition}>
        {this.renderTextEdit({ y: 0.45, hint: 'Placeholder', title: 'Default', text: '' })}
        {this.renderTextEdit({ y: 0.05, hint: 'Password', title: 'Password', text: '', password: true })}
        {this.renderTextEdit({ y: -0.3, hint: '', multiline: true, title: 'Multiline', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' })}
      </view>
    );
  }
}

export { SceneTextEdit };
