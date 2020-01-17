import React from 'react';

class SceneTextEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      password: undefined,
      email: undefined,
      phone: '0048',
      info: undefined
    }
  }

  onFillDataButtonAction = () => {
    this.setState({
      username: 'john-doe',
      password: 'r_%77vkP*4Ts',
      email: 'john.doe@mail.com',
      phone: '123 456 789',
      info: '• profession: gardener\n• experience: 8yrs\n• hobby: sport and book\n• languages: English, French'
    });
  }

  renderTextEdit(y, title, textEditProps) {
    const validProps = {};
    for (let [key, value] of Object.entries(textEditProps)) {
      if (value !== undefined) {
        validProps[key] = value
      }
    }

    const width = 0.9;
    validProps.width = width;
    validProps.height = validProps.multiline ? 0.25 : 0.07

    const fontParams = {}
    if (validProps.weight !== undefined) {
      fontParams.weight = validProps.weight;
      delete validProps.weight;
    }
    if (validProps.style !== undefined) {
      fontParams.style = validProps.style;
      delete validProps.style;
    }
    if (validProps.allCaps !== undefined) {
      fontParams.allCaps = validProps.allCaps;
      delete validProps.allCaps;
    }
    if (validProps.textSize !== undefined) {
      fontParams.fontSize = validProps.textSize;
      delete validProps.textSize;
    }
    return (
      <view localPosition={[0, y, 0]}>
        <text 
          alignment={'bottom-left'} 
          localPosition={[-0.5 * width, 0.02, 0]}
          textColor={[255,255,255,1]}
          textSize={0.05}
        >{title}</text>
        <textEdit {...validProps} alignment={'top-center'} fontParameters={fontParams} />
      </view>
    );
  }

  render () {
    return (
      <view localPosition={this.props.localPosition}>
        {this.renderTextEdit(0.45, 'Username', { hint: 'Username', text: this.state.username, textAlignment: 'center', textColor: [0,255,0,1], textSize: 0.05, weight: 'bold', style: 'normal' })}
        {this.renderTextEdit(0.25, 'Password', { hint: 'Password', text: this.state.password, hintColor: [255,0,0,1], textAlignment: 'center', textSize: 0.05, password: true })}
        {this.renderTextEdit(0.05, 'E-mail', { text: this.state.email, textEntry: 'email', textSize: 0.05 })}
        {this.renderTextEdit(-0.15, 'Phone number', { text: this.state.phone, textEntry: 'numeric', textSize: 0.05, charLimit: 15, charSpacing: 0.1 })}
        {this.renderTextEdit(-0.35, 'Additional info', { hint: '*optional', text: this.state.info, textPadding: [0.03, 0.03, 0.03, 0.03], textSize: 0.05, lineSpacing: 1.2, multiline: true, scrolling: true, weight: 'light', style: 'italic', allCaps: true })}
        <button localPosition={[0.3, -0.8, 0]} textSize={0.05} onClick={this.onFillDataButtonAction}>Fill data</button>
      </view>
    );
  }
}

export { SceneTextEdit };
