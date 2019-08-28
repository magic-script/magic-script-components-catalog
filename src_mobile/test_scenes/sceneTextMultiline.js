import React from 'react';

class SceneTextMultiline extends React.Component {
  renderTexts () {
    const texts = [
      'The quick brown fox jumps over the lazy dog.',
      'With time and patience the mulberry leaf becomes a silk gown.',
      'Man is a pupil, pain is his teacher.',
      'A journey of a thousand miles begins with a single step.',
      'A smile will gain you ten more years of life.',
      'He who asks is a fool for five minutes, but he who does not ask remains a fool forever.'
    ];
    const textAlignments = ['left', 'center', 'right'];
    const height = 0.3;
    return texts.map((text, index) => {
      const groupIndex = Math.floor(index / 2);
      const y = 0.5 - height * index - groupIndex * 0.2;
      const textAlignment = textAlignments[groupIndex % textAlignments.length];
      return (
        <text
          key={index}
          alignment={'top-center'}
          boundsSize={{ boundsSize: [1.1, height], wrap: true }}
          localPosition={[0, y, 0]}
          textAlignment={textAlignment}
          textColor={[1, 1, 1, 0.8]}
          textSize={0.08}
        >{text}</text>
      );
    });
  }

  render () {
    return (
      <view localPosition={this.props.localPosition}>
        {this.renderTexts()}
      </view>
    );
  }
}

export { SceneTextMultiline };
