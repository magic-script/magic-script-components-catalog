import React from 'react';
import { AnchorPoint, Button, Line, Text, TextAlign, Toggle, View } from 'magic-script-components';

const labels = {
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
      textAlign: TextAlign.left,
      text: labels.short
    };
  }

  onButtonClick_H0 = () => { this.setState({ boundsWidth: 0 }); }
  onButtonClick_H0_25 = () => { this.setState({ boundsWidth: 0.25 }); }
  onButtonClick_H1 = () => { this.setState({ boundsWidth: 1 }); }

  onButtonClick_V0 = () => { this.setState({ boundsHeight: 0 }); }
  onButtonClick_V0_25 = () => { this.setState({ boundsHeight: 0.25 }); }
  onButtonClick_V1 = () => { this.setState({ boundsHeight: 1 }); }

  onButtonClick_TA_Left = () => { this.setState({ textAlign: TextAlign.left }); }
  onButtonClick_TA_Center = () => { this.setState({ textAlign: TextAlign.center }); }
  onButtonClick_TA_Justify = () => { this.setState({ textAlign: TextAlign.justify }); }
  onButtonClick_TA_Right = () => { this.setState({ textAlign: TextAlign.right }); }

  onLongTextToggle = (event) => { this.setState({ text: event.On ? labels.long : labels.short }); }
  onWrapTextToggle = (event) => { this.setState({ wrap: event.On }); }

  renderGUI() {
    const fontSize = 0.08;
    const offset = 0.2;
    return (
      <View>
        <Button position={[0, offset, 0]} onClick={this.onButtonClick_H0} fontSize={fontSize}>0</Button>
        <Button position={[0.25, offset, 0]} onClick={this.onButtonClick_H0_25} fontSize={fontSize}>0.25</Button>
        <Button position={[1, offset, 0]} onClick={this.onButtonClick_H1} fontSize={fontSize}>1</Button>

        <Button position={[-offset, 0, 0]} onClick={this.onButtonClick_V0} fontSize={fontSize}>0</Button>
        <Button position={[-offset, -0.25, 0]} onClick={this.onButtonClick_V0_25} fontSize={fontSize}>0.25</Button>
        <Button position={[-offset, -1, 0]} onClick={this.onButtonClick_V1} fontSize={fontSize}>1</Button>

        <Button position={[0, -1.0 - offset, 0]} onClick={this.onButtonClick_TA_Left} fontSize={fontSize}>left</Button>
        <Button position={[0.5, -1.0 - offset, 0]} onClick={this.onButtonClick_TA_Center} fontSize={fontSize}>center</Button>
        <Button position={[0.5, -1.2 - offset, 0]} onClick={this.onButtonClick_TA_Justify} fontSize={fontSize}>justify</Button>
        <Button position={[1, -1.0 - offset, 0]} onClick={this.onButtonClick_TA_Right} fontSize={fontSize}>right</Button>

        <Toggle position={[1, -1.6, 0]} onToggleChanged={this.onLongTextToggle} on={this.state.text === labels.long} height={fontSize} fontSize={fontSize} anchorPoint={AnchorPoint.topRight}>Long text</Toggle>
        <Toggle position={[1, -1.8, 0]} onToggleChanged={this.onWrapTextToggle} on={this.state.wrap} height={fontSize} fontSize={fontSize} anchorPoint={AnchorPoint.topRight}>Wrap text</Toggle>
      </View>
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

    if (boundsHeight > 0) {
      points.push([maxX, maxY, 0]);
    }

    points.push([0,maxY,0]);
    points.push([0,0,0]);
    points.push([maxX,0,0]);

    if (boundsWidth > 0) {
      points.push([maxX, maxY, 0]);
    }

    if (points.length > 0) {
      return <Line points={points} color={[1, 1, 0.3, 1]} />;
    }

    return null;
  }

  renderText() {
    const { boundsWidth, boundsHeight, text, textAlign, wrap } = this.state;
    return <Text
      anchorPoint={AnchorPoint.topLeft}
      width={boundsWidth}
      height={boundsHeight}
      multiline={wrap}
      textAlign={textAlign}
      textColor={[1, 1, 1, 0.8]}
      fontSize={0.08}
    >{text}</Text>
  }

  render() {
    return (
      <View position={this.props.position}>
        <View position={[-0.5, 0, 0]}>
          {this.renderGUI()}
          {this.renderBounds()}
          {this.renderText()}
        </View>
      </View>
    );
  }
}

export { SceneText };
