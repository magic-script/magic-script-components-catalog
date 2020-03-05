import React from 'react';

class SceneImageRemote extends React.Component {

  render() {
    const frameSize = 0.75;
    return (
      <view localPosition={this.props.localPosition}>
        <image
          filePath={'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'}
          color={[0.3, 0.7, 0.5, 1]}
          localPosition={[0, 0.7, 0.01]}
          width={frameSize}
          height={frameSize}
          useFrame
        />
        <image
          filePath={'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'}
          color={'blue'}
          localPosition={[-0.35, 0, 0]}
          width={frameSize}
          height={frameSize}
          useFrame
        />
        <image
          filePath={'https://homepages.cae.wisc.edu/~ece533/images/girl.png'}
          localPosition={[0.325, 0, 0.05]}
          width={frameSize}
          height={frameSize}
          useFrame
        />
        <image
          filePath={'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
          color={'hotpink'}
          localPosition={[-0.425, -0.85, 0]}
          width={frameSize}
          height={frameSize}
          useFrame
        />
      </view>
    );
  }
}

export { SceneImageRemote };
