import React from 'react';
import { Alignment, LinearLayout, Orientation, Text, Toggle, ToggleGroup, ToggleType } from 'magic-script-components';

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
        type={ToggleType.checkbox}
        onToggleChanged={(e) => this.onToggleChanged(title, e.On)}
      >{title}</Toggle>
    );
  }

  render() {
    const { top, right, bottom, left } = this.state;

    return (
      <LinearLayout 
        anchorPoint={this.props.anchorPoint}
        debug={this.props.debug}
        defaultItemPadding={[0, 0, 0.02, 0]}
        position={this.props.position}
      >
        <Text fontSize={0.08}>{this.props.title}</Text>
        <ToggleGroup allowMultipleOn allowAllOff>
          <LinearLayout orientation={Orientation.vertical} defaultItemAlignment={Alignment.centerLeft}>
            <LinearLayout orientation={Orientation.horizontal} defaultItemAlignment={Alignment.centerLeft} defaultItemPadding={[0, 0, 0.01, 0.2]}>
              {this.renderCheckbox('top', top)}
            </LinearLayout>
            
            <LinearLayout orientation={Orientation.horizontal} defaultItemAlignment={Alignment.centerLeft} defaultItemPadding={[0, 0.15, 0.01, 0]}>
              {this.renderCheckbox('left', left)}
              {this.renderCheckbox('right', right)}
            </LinearLayout>

            <LinearLayout orientation={Orientation.horizontal} defaultItemAlignment={Alignment.centerLeft} defaultItemPadding={[0, 0, 0, 0.2]}>
              {this.renderCheckbox('bottom', bottom)}
            </LinearLayout>
          </LinearLayout>
        </ToggleGroup>
      </LinearLayout>
    );
  }
}

PaddingGroup.defaultProps = {
  anchorPoint: Alignment.topCenter,
  debug: false
}

export { PaddingGroup };