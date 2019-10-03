import React from 'react';

class SceneSystemIcons extends React.Component {
  render () {
    return (
      <view localPosition={this.props.localPosition}>
        <image
          filePath={require('../../assets/lumin_system_icons/Actions.png')}
          width={0.3}
          height={0.3}
        />
      </view>
    );
  }
}

export { SceneSystemIcons };
