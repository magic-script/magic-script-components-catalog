import React from 'react';

class SceneModel extends React.Component {
  render () {
    return (
      <view localPosition={this.props.localPosition}>
        <model
          modelPath={require('../../resources/BoxTextured.glb')}
        />
      </view>
    );
  }
}

export { SceneModel };
