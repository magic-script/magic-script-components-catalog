import React from 'react';

class SceneTextLetters extends React.Component {
  constructor(props) {
    super(props);
    this.state = { uppercase: false };
    this.onToggleChanged = this.onToggleChanged.bind(this);
  }

  onToggleChanged(event) {
    this.setState({ uppercase: event.On });
  }

  renderText (key, contents, textSize, textColor, localPosition) {
    return (<text
      key={key}
      localPosition={localPosition}
      textColor={textColor}
      textSize={textSize}
    >{contents}</text>);
  }

  lerpv4 (v1, v2, t) {
    if (t === undefined) { t = 0; }

    const x = v1[0] + t * (v2[0] - v1[0]);
    const y = v1[1] + t * (v2[1] - v1[1]);
    const z = v1[2] + t * (v2[2] - v1[2]);
    const w = v1[3] + t * (v2[3] - v1[3]);

    return [x, y, z, w];
  }

  getColor (x, y) {
    const d = 0.1;
    const colors = [
      [d, 1, 1, 1],
      [1, d, 1, 1],
      [1, 1, d, 1],
      [1, 1, 1, 1]
    ];
    const c1 = this.lerpv4(colors[0], colors[1], x);
    const c2 = this.lerpv4(colors[2], colors[3], x);
    return this.lerpv4(c1, c2, y);
  }

  renderLetters (uppercase) {
    // const letters = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789,.:_-!@#$%^&*()[]{}<>/\\~`假借字•łóźśćąę'];
    const string = '0123456789abcdefghijklmnopqrstuvwxyz';
    const letters = uppercase ? [...string.toUpperCase()] : [...string];
    const minTextSize = 0.01;
    const maxTextSize = 0.15;
    const size = 0.25;
    const columns = 5;
    const rows = Math.ceil(letters.length / columns);
    const minX = -0.5 * size * (columns - 1);
    const minY = 0;
    const textSizeFactor = (maxTextSize - minTextSize) / letters.length;

    return letters.map((char, index) => {
      const textSize = minTextSize + textSizeFactor * index;
      const column = index % columns;
      const row = Math.floor(index / columns);
      const x = minX + size * column;
      const y = minY - size * row;
      const textColor = this.getColor(column / (columns - 1), row / (rows - 1));
      return (
        <text
          key={index}
          localPosition={[x, y, 0]}
          textColor={textColor}
          textSize={textSize}
        >{char}</text>
      );
    });
  }

  render() {
    const { uppercase } = this.state;
    return (
      <view localPosition={this.props.localPosition}>
        {this.renderLetters(uppercase)}
        <toggle localPosition={[0.6,-2,0]} alignment={'center-right'} height={0.1} textSize={0.08} on={uppercase} onToggleChanged={this.onToggleChanged}>Uppercase</toggle>
      </view>
    );
  }
}

export { SceneTextLetters };
