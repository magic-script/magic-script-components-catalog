import React from 'react';

class SceneTextAlignment extends React.Component {
  renderTexts () {
    const textAlignments = ['left', 'center', 'justify', 'right'];
    const height = 0.3;
    return textAlignments.map((alignment, index) => {
      const y = 0.5 - height * index;
      return (
        <view key={index} localPosition={[0, y, 0]}>
          <text
            alignment={'top-center'}
            // boundsSize={{ boundsSize: [1.0, height], wrap: true }}
            textAlignment={alignment}
            textColor={[1.0, 0.9, 0.9, 0.8]}
            textSize={0.08}
          >{`Text alignment : ${alignment}`}</text>
        </view>
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

export { SceneTextAlignment };
