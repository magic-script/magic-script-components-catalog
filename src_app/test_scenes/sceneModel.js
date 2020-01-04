import React from 'react';

class SceneModel extends React.Component {
  constructor(props) {
    super(props);
    require('../../resources/models/static.mtl');
    require('../../resources/models/maps/static_obj_BaseColor.png');
    require('../../resources/models/maps/static_obj_Normal.png');
  }

  render () {
    return (
      <view localPosition={this.props.localPosition}>
        <gridLayout
          alignment={'center-center'}
          columns={3}
          debug
          defaultItemsAlignment={'center-center'}
          defaultItemsPadding={[0.05, 0.05, 0.05, 0.05]}
          width={1}
          height={1}
        >
          <text textSize={0.08}></text>
          <text textSize={0.08}>Static</text>
          <text textSize={0.08}>Animated</text>

          <text textSize={0.08}>.obj</text>
          <model debug modelPath={require('../../resources/models/static.obj')} localScale={[0.1, 0.1, 0.1]} />
          <text textSize={0.08}>Not supported</text>

          <text textSize={0.08}>.gltf</text>
          <model debug modelPath={require('../../resources/models/static.gltf')} localScale={[0.1, 0.1, 0.1]} />
          <model debug modelPath={require('../../resources/models/animated.gltf')} localScale={[0.1, 0.1, 0.1]} />

          <text textSize={0.08}>.glb</text>
          <model debug modelPath={require('../../resources/models/static.glb')} localScale={[0.15, 0.15, 0.15]} />
          <model debug modelPath={require('../../resources/models/animated.glb')} localScale={[0.1, 0.1, 0.1]} />
        </gridLayout>
        
      </view>
    );
  }
}

export { SceneModel };
