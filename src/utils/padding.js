import React from 'react';

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
      <toggle
        height={0.075}
        on={on}
        text={title}
        textSize={0.075}
        type={'checkbox'}
        onToggleChanged={(e) => this.onToggleChanged(title, e.On)}
      />
    );
  }

  render() {
    const { top, right, bottom, left } = this.state;

    return (
      <view localPosition={this.props.localPosition}>
        <text textSize={0.08}>{this.props.title}</text>
          <toggleGroup allowMultipleOn allowAllOff>
            <linearLayout orientation={'vertical'} defaultItemAlignment={'center-left'}>
              <linearLayout orientation={'horizontal'} defaultItemAlignment={'center-left'} defaultItemPadding={[0, 0, 0, 0.2]}>
                {this.renderCheckbox('top', top)}
              </linearLayout>
              
              <linearLayout orientation={'horizontal'} defaultItemAlignment={'center-left'} defaultItemPadding={[0, 0.15, 0, 0]}>
                {this.renderCheckbox('left', left)}
                {this.renderCheckbox('right', right)}
              </linearLayout>

              <linearLayout orientation={'horizontal'} defaultItemAlignment={'center-left'} defaultItemPadding={[0, 0, 0, 0.2]}>
                {this.renderCheckbox('bottom', bottom)}
              </linearLayout>
            </linearLayout>
          </toggleGroup>
      </view>
    );
  }
}

export { PaddingGroup };