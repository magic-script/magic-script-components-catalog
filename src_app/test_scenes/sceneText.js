import React from 'react';

const TextAlignment = {
  left: 'left',
  center: 'center',
  justify: 'justify',
  right: 'right'
};

const Text = {
  short: 'Some text',
  long: 'With time and patience the mulberry leaf becomes a silk gown.',
}

class SceneText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boundsWidth: 0,
      boundsHeight: 0,
      wrap: false,
      textAlignment: TextAlignment.left,
      text: Text.short
    };
  }

  onButtonClick_H0 = () => { this.setState({ boundsWidth: 0 }); }
  onButtonClick_H0_25 = () => { this.setState({ boundsWidth: 0.25 }); }
  onButtonClick_H1 = () => { this.setState({ boundsWidth: 1 }); }

  onButtonClick_V0 = () => { this.setState({ boundsHeight: 0 }); }
  onButtonClick_V0_25 = () => { this.setState({ boundsHeight: 0.25 }); }
  onButtonClick_V1 = () => { this.setState({ boundsHeight: 1 }); }

  onButtonClick_TA_Left = () => { this.setState({ textAlignment: 'left' }); }
  onButtonClick_TA_Center = () => { this.setState({ textAlignment: 'center' }); }
  onButtonClick_TA_Justify = () => { this.setState({ textAlignment: 'justify' }); }
  onButtonClick_TA_Right = () => { this.setState({ textAlignment: 'right' }); }

  onLongTextToggle = (event) => { this.setState({ text: event.On ? Text.long : Text.short }); }
  onWrapTextToggle = (event) => { this.setState({ wrap: event.On }); }

  renderGUI() {
    return (
      <view>
        <button localPosition={[0, 0.1, 0]} onClick={this.onButtonClick_H0} textSize={0.08} alignment={'bottom-center'}>0</button>
        <button localPosition={[0.25, 0.1, 0]} onClick={this.onButtonClick_H0_25} textSize={0.08} alignment={'bottom-center'}>0.25</button>
        <button localPosition={[1, 0.1, 0]} onClick={this.onButtonClick_H1} textSize={0.08} alignment={'bottom-center'}>1</button>

        <button localPosition={[-0.1, 0, 0]} onClick={this.onButtonClick_V0} textSize={0.08} alignment={'center-right'}>0</button>
        <button localPosition={[-0.1, -0.25, 0]} onClick={this.onButtonClick_V0_25} textSize={0.08} alignment={'center-right'}>0.25</button>
        <button localPosition={[-0.1, -1, 0]} onClick={this.onButtonClick_V1} textSize={0.08} alignment={'center-right'}>1</button>

        <button localPosition={[0, -1.1, 0]} onClick={this.onButtonClick_TA_Left} textSize={0.08} alignment={'top-left'}>left</button>
        <button localPosition={[0.5, -1.1, 0]} onClick={this.onButtonClick_TA_Center} textSize={0.08} alignment={'top-center'}>center</button>
        <button localPosition={[0.5, -1.3, 0]} onClick={this.onButtonClick_TA_Justify} textSize={0.08} alignment={'top-center'}>justify</button>
        <button localPosition={[1, -1.1, 0]} onClick={this.onButtonClick_TA_Right} textSize={0.08} alignment={'top-right'}>right</button>

        <toggle localPosition={[1, -1.5, 0]} onToggleChanged={this.onLongTextToggle} on={this.state.text === Text.long} height={0.08} textSize={0.08} alignment={'top-right'}>Long text</toggle>
        <toggle localPosition={[1, -1.7, 0]} onToggleChanged={this.onWrapTextToggle} on={this.state.wrap} height={0.08} textSize={0.08} alignment={'top-right'}>Wrap text</toggle>

      </view>
    );
  }

  renderBounds() {
    const { boundsWidth, boundsHeight } = this.state;
    const maxX = (boundsWidth > 0) ? boundsWidth : 1;
    const maxY = (boundsHeight > 0) ? -boundsHeight : -1;
    var points = [
      [0,0,0], [maxX,0,0],
      [0,0,0], [0,maxY,0]
    ];

    if (boundsWidth > 0) {
      points.push([boundsWidth, 0, 0]);
      points.push([boundsWidth, maxY, 0]);
    }

    if (boundsHeight > 0) {
      points.push([0, -boundsHeight, 0]);
      points.push([maxX, -boundsHeight, 0]);
    }

    if (points.length > 0) {
      return <line points={points} color={[1, 1, 0.3, 1]} />;
    }

    return null;
  }

  renderText() {
    const { boundsWidth, boundsHeight, text, textAlignment, wrap } = this.state;
    return <text
      alignment={'top-left'}
      boundsSize={{ boundsSize: [boundsWidth, boundsHeight], wrap }}
      textAlignment={textAlignment}
      textColor={[1, 1, 1, 0.8]}
      textSize={0.08}
    >{text}</text>
  }

  render() {
    return (
      <view localPosition={this.props.localPosition}>
        <view localPosition={[-0.5, 0, 0]}>
          {this.renderGUI()}
          {this.renderBounds()}
          {this.renderText()}
        </view>
      </view>
    );
  }
}

export { SceneText };
