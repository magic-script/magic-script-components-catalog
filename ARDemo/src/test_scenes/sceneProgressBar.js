import React from 'react';

class SceneProgressBar extends React.Component {
  render () {
    return (
      <view localPosition={this.props.localPosition}>
        <progressBar 
          alignment={'center-center'}
          localPosition={[0, 0.2, 0]} 
          value={0.33} min={0} max={1}
        />
        <progressBar 
          alignment={'center-center'}
          localPosition={[0, 0.0, 0]} 
          value={0.66}
          progressColor={{
            beginColor: [0.1, 0.5, 0.9, 1],
            endColor: [0.1, 0.9, 0.5, 1]
          }}
          width={0.75}
          height={0.05}
        />
        <progressBar 
          alignment={'center-center'}
          localPosition={[0, -0.1, 0]} 
          value={0.0}
          progressColor={{
            beginColor: [0.1, 0.5, 0.9, 1],
            endColor: [0.1, 0.9, 0.5, 1]
          }}
          width={0.75}
          height={0.05}
        />
        <progressBar 
          alignment={'center-center'}
          localPosition={[0, -0.2, 0]} 
          value={0.1}
          progressColor={{
            beginColor: [0.1, 0.5, 0.9, 1],
            endColor: [0.1, 0.9, 0.5, 1]
          }}
          width={0.75}
          height={0.05}
        />
        <progressBar 
          alignment={'center-center'}
          localPosition={[0, -0.4, 0]} 
          value={0.9} min={-10} max={10}
          progressColor={{
            beginColor: [1, 0.1, 0.1, 1]
          }}
          width={1}
          height={0.1}
        />
      </view>
    );
  }
}

export { SceneProgressBar };
