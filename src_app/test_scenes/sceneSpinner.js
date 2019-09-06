import React from 'react';

class SceneSpinner extends React.Component {

  render() {
    return (
      <view localPosition={this.props.localPosition}>
        <spinner 
          alignment={'top-center'}
          localPosition={[-0.2, 0, 0]} 
          height={0.2}
        />
        
        <spinner 
          alignment={'bottom-center'}
          localPosition={[0.2, 0, 0]} 
          height={0.4}
          localScale={[0.5,0.5,0]}
        />

        <spinner 
            alignment={'center-center'}
            localPosition={[0, -0.5, 0]} 
        />

      </view>
    );
  }
}

export { SceneSpinner };
