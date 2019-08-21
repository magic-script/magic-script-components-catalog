import React from 'react';

class SceneToggle extends React.Component {
  render () {
    return (
      <view localPosition={this.props.localPosition}>
        <toggle alignment={'center-center'} localPosition={[0, 0.4, 0]} on={false} textSize={0.08} textColor={[1, 0, 0, 1]} height={0.3}>Toggle 1</toggle>
        <toggle alignment={'center-center'} localPosition={[0, 0.0, 0]} on={true} textSize={0.1} textColor={[0, 1, 0, 1]} height={0.15}>Toggle 2</toggle>
        <toggle alignment={'center-center'} localPosition={[0, -0.4, 0]} on={false} textSize={0.12} textColor={[1, 1, 0, 1]} height={0.08}>Toggle 3</toggle>
      </view>

    );
  }
}

export { SceneToggle };
