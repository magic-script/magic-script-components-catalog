import React from 'react';

class SceneTextEdit extends React.Component {

  renderTextEdit({ y, charSpacing, charLimit=30, hint, hintColor=[0.75,0.75,0.75,0.75], lineSpacing, title='', text='', textAlignment='left', textColor, textPadding=[0.0, 0.03, 0.0, 0.03], textSize, textEntry='normal', multiline=false, password=false, scrolling=false, weight, style }) {
    const size = { width: 0.9, height: multiline ? 0.25 : 0.07 };
    const fontParams = {}
    if (weight !== undefined) {
      fontParams.weight = weight;
    }
    if (style !== undefined) {
      fontParams.style = style;
    }
    return (
      <view localPosition={[0, y, 0]}>
        <text 
          alignment={'bottom-left'} 
          localPosition={[-0.5 * size.width, 0, 0]}
          textColor={[1,1,1,1]}
          textSize={0.05}
        >{title}</text>
        <textEdit 
          alignment={'top-center'} 
          charSpacing={charSpacing}
          charLimit={charLimit}
          fontParams={fontParams}
          hint={hint} 
          hintColor={hintColor}
          lineSpacing={lineSpacing} 
          localPosition={[0, 0, 0]} 
          multiline={multiline}
          width={size.width} 
          height={size.height} 
          password={password}
          textAlignment={textAlignment}
          textColor={textColor}
          textPadding={textPadding}
          textSize={textSize} 
          textEntry={textEntry}
          scrolling={scrolling}
        >{text}</textEdit>
      </view>
    );
  }

  render () {
    return (
      <view localPosition={this.props.localPosition}>
        {this.renderTextEdit({ y: 0.45, title: 'Username', hint: 'Username', textAlignment: 'center', textColor: [0,1,0,1], textSize: 0.05, weight: 'bold', style: 'normal' })}
        {this.renderTextEdit({ y: 0.25, title: 'Password', hint: 'Password', hintColor: [1,0,0,1], textAlignment: 'center', textSize: 0.05, password: true })}
        {this.renderTextEdit({ y: 0.05, title: 'E-mail', textEntry: 'email', textSize: 0.05 })}
        {this.renderTextEdit({ y:-0.15, title: 'Phone number', textEntry: 'numeric', text: '0048', charLimit: 15, charSpacing: 0.1 })}
        {this.renderTextEdit({ y:-0.35, title: 'Additional info', hint: '*optional', textPadding: [0.03, 0.03, 0.03, 0.03], charLimit: 80, textSize: 0.05, lineSpacing: 2, multiline: true, scrolling: true, weight: 'light', style: 'italic' })}
      </view>
    );
  }
}

export { SceneTextEdit };
