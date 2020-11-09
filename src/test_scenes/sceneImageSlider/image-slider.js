import React from 'react';
import { Button, FitMode, Image, Text, TextAlign, View } from 'magic-script-components';

export default class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items,
      currentPosition: props.initialPosition
    };

    this.onPreviousClick = this.onPreviousClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
  }

  onPreviousClick(event) {
    const position = this.state.currentPosition === 0
      ? this.state.items.length - 1
      : this.state.currentPosition - 1;

    this.setState({ currentPosition:  position });
  }

  onNextClick(event) {
    const position = this.state.currentPosition + 1 === this.state.items.length
      ? 0
      : this.state.currentPosition + 1;

    this.setState({ currentPosition: position });
  }

  render() {
    return (
      <View position={this.props.position}>
        <Text
            position={[0, 0.30, 0]}
            fontSize={0.07}
            textAlign={TextAlign.center}
        >{this.props.caption}</Text>
        <Image
          fit={FitMode.aspectFit}
          key={this.state.currentPosition}
          path={this.state.items[this.state.currentPosition]}
          width={0.75}
          height={0.5}
        />

        <Button
          position={[-0.25, -0.35, 0]}
          width={0.25}
          height={0.10}
          roundness={0.5}
          fontSize={0.035}
          onClick={this.onPreviousClick}
        >previous</Button>
        <Button
          position={[ 0.25, -0.35, 0]}
          width={0.25}
          height={0.10}
          roundness={0.5}
          fontSize={0.035}
          onClick={this.onNextClick}
        >next</Button>
      </View>
    );
  }
}
