import React from 'react';
import { Alignment, AnchorPoint, Button, FontStyle, FontWeight, Text, TextAlign, TextEdit, TextEntryMode, View } from "magic-script-components";

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
    validProps.height = validProps.multiline ? 0.25 : 0.07;
    const text = textEditProps.text;

    return (
      <View position={[0, y, 0]}>
        <Text 
          anchorPoint={AnchorPoint.bottomLeft} 
          position={[-0.5 * width, 0.02, 0]}
          textColor={[1,1,1,1]}
          fontSize={0.05}
        >{title}</Text>
        <TextEdit {...validProps} anchorPoint={AnchorPoint.topCenter}>{text}</TextEdit>
      </View>
    );
  }

  render () {
    return (
      <View position={this.props.position}>
        {this.renderTextEdit(0.45, 'Username', { hint: 'Username', text: this.state.username, textAlign: TextAlign.center, textColor: [0,1,0,1], fontSize: 0.05, fontWeight: FontWeight.bold, fontStyle: FontStyle.normal })}
        {this.renderTextEdit(0.25, 'Password', { hint: 'Password', text: this.state.password, hintColor: [1,0,0,1], textAlign: TextAlign.center, fontSize: 0.05, password: true })}
        {this.renderTextEdit(0.05, 'E-mail', { text: this.state.email, textEntry: TextEntryMode.email, fontSize: 0.05 })}
        {this.renderTextEdit(-0.15, 'Phone number', { text: this.state.phone, textEntry: TextEntryMode.numeric, fontSize: 0.05, charLimit: 15, charSpacing: 0.1 })}
        {this.renderTextEdit(-0.35, 'Additional info', { hint: '*optional', text: this.state.info, textPadding: [0.03, 0.03, 0.03, 0.03], fontSize: 0.05, lineSpacing: 1.2, multiline: true, scrolling: true, fontWeight: FontWeight.light, fontStyle: FontStyle.italic, allCaps: true })}
        <Button position={[0.3, -0.8, 0]} fontSize={0.05} onClick={this.onFillDataButtonAction}>Fill data</Button>
      </View>
    );
  }
}

export { SceneTextEdit };
