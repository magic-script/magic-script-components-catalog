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
          boundsSize={{ boundsSize: [1.0, 0.3], wrap: true }} 
         >
          Should display 2 identical boxes (same scale, rotation, horizontal position)
        </text> 

        <view localPosition={[0, 0.1, 0]}>
          <model 
            modelPath={require('../../resources/models/static.glb')}
            localPosition={[0, 0.2, -0.2]}
            localRotation={[0.0, 0.38268346, 0.0, 0.9238795]}
            localScale={[0.5, 0.5, 0.5]}
          />
        </view>

        <view localPosition={[0, -0.7, 0]}>
           <model 
            modelPath={require('../../resources/models/static.glb')}
            localTransform={[0.3535534, 0.0, -0.35355334, 0.0, 0.0, 0.5, 0.0, 0.0, 0.35355334, 0.0, 0.3535534, 0.0, 0.0, 0.2, -0.2, 1.0]}
          />  
        </view>
      </view>
    );
  }
}

export { SceneTransformations };
