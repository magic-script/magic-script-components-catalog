import React from 'react';

class SceneToggle extends React.Component {
  render () {
    return (
      <view localPosition={this.props.localPosition}>
        <toggle alignment={'center-center'} localPosition={[0, 0.4, 0]} on={false} textSize={0.1} textColor={[1, 0, 0, 1]} height={0.3}>Default</toggle>
        <toggle type={'checkbox'} alignment={'center-center'} localPosition={[0, 0.0, 0]} textSize={0.1} on={true} textColor={[0, 1, 0, 1]} height={0.3}>Checkbox</toggle>
        <toggle type={'radio'} alignment={'center-center'} localPosition={[0, -0.4, 0]} textSize={0.1} on={false}  textColor={[1, 1, 0, 1]} height={0.3}>Radio</toggle>
      </view>

    );
  }
}

export { SceneToggle };
