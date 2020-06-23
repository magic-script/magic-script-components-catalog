import React from 'react';
import { View, Text, Toggle, LinearLayout,ToggleGroup } from 'magic-script-components';

class PaddingGroup extends React.Component {
  static defaultProps = {
    title: 'Padding:',
    position: [0, 0, 0],
    values: [0, 0, 0, 0],
    onPaddingChanged: () => {},
  };

  state = { top: false, right: false, bottom: false, left: false }

  onToggleChanged = (text, on) => {
    this.setState({ [text]: on }, () => {
      const padding = this.getCurrentPadding();
      this.props.onPaddingChanged(padding);
    });
  }

  getCurrentPadding = () => {
    const { top, right, bottom, left } = this.state;
    const { values } = this.props;
    return [
      top ? values[0] : 0,
      right ? values[1] : 0,
      bottom ? values[2] : 0,
      left ? values[3] : 0,
    ];
  }

  renderCheckbox(title, on) {
    return (
      <Toggle
        height={0.075}
        on={on}
        fontSize={0.075}
        type={'checkbox'}
        onToggleChanged={(e) => this.onToggleChanged(title, e.On)}
      >{title}</Toggle>
    );
  }

  render() {
    const { top, right, bottom, left } = this.state;

    return (
      <View position={this.props.position}>
        <Text position={[0, 0.13, 0]} anchorPoint={'bottom-center'} fontSize={0.08}>{this.props.title}</Text>
          <ToggleGroup allowMultipleOn allowAllOff>
            <LinearLayout orientation={'vertical'} defaultItemAlignment={'center-left'}>
              <LinearLayout orientation={'horizontal'} defaultItemAlignment={'center-left'} defaultItemPadding={[0, 0, 0, 0.2]}>
                {this.renderCheckbox('top', top)}
              </LinearLayout>
              
              <LinearLayout orientation={'horizontal'} defaultItemAlignment={'center-left'} defaultItemPadding={[0, 0.15, 0, 0]}>
                {this.renderCheckbox('left', left)}
                {this.renderCheckbox('right', right)}
              </LinearLayout>

              <LinearLayout orientation={'horizontal'} defaultItemAlignment={'center-left'} defaultItemPadding={[0, 0, 0, 0.2]}>
                {this.renderCheckbox('bottom', bottom)}
              </LinearLayout>
            </LinearLayout>
          </ToggleGroup>
      </View>
    );
  }
}

export { PaddingGroup };