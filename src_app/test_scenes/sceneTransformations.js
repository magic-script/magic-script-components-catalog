import React from 'react';

class SceneTransformations extends React.Component {

  render() {
    return (
      <view localPosition={this.props.localPosition}>

       <text 
          localPosition={[0, 1, 0]}
          textSize={0.08}
          multiline={true}
          alignment={'top-center'} 
         >
          Should display 2 identical boxes (same scale, rotation, horizontal position)
        </text> 

        <view localPosition={[0, 0.1, 0]}>
          <model 
            modelPath={require('../../resources/BoxTextured.glb')}
            localPosition={[0, 0.2, -0.2]}
            localRotation={[0.0, 0.30510157, 0.0, 0.9523198]}
            localScale={[0.5, 0.5, 0.5]}
          />
        </view>

        <view localPosition={[0, -0.7, 0]}>
           <model 
            modelPath={require('../../resources/BoxTextured.glb')}
            localTransform={[0.3535534, 0.0, -0.35355338, 0.0, 0.0, 0.5, 0.0, 0.0, 0.35355338, 0.0, 0.3535534, 0.0, 0.0, 0.2, -0.2, 1.0]}
          />  
        </view>
      </view>
    );
  }
}

export { SceneTransformations };
