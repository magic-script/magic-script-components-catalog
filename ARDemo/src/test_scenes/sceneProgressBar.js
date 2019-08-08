import React from 'react';

class SceneProgressBar extends React.Component {
  render () {
    return (
      <view localPosition={this.props.localPosition}>
        <progressBar 
          alignment={'center-center'}
          localPosition={[0, 0.4, 0]} 
          value={0.33} min={0} max={1}
        />
        <progressBar 
          alignment={'center-center'}
          localPosition={[0, 0.0, 0]} 
          value={0.66}
          startColor={[0.83, 0.8, 0.2, 1]} 
          endColor={[0.2, 0.5, 0.7, 1]}
          width={0.75}
          height={0.05}
        />
        <progressBar 
          alignment={'center-center'}
          localPosition={[0, -0.4, 0]} 
          value={0.9} min={-10} max={10}
          startColor={[1, 0.2, 0.2, 1]}  
          width={1}
          height={0.1}
        />
      </view>
    );
  }
}

export { SceneProgressBar };
