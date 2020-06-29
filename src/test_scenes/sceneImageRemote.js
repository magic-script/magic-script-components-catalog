import React from 'react';
import { Image, View } from 'magic-script-components';

class SceneImageRemote extends React.Component {

  render() {
    const frameSize = 0.75;
    return (
      <View position={this.props.position}>
        <Image
          filePath={'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'}
          color={[0.3, 0.7, 0.5, 1]}
          position={[0, 0.7, 0.01]}
          width={frameSize}
          height={frameSize}
          useFrame
        />
        <Image
          filePath={'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'}
          color={'blue'}
          position={[-0.35, 0, 0]}
          width={frameSize}
          height={frameSize}
          useFrame
        />
        <Image
          filePath={'https://homepages.cae.wisc.edu/~ece533/images/girl.png'}
          position={[0.325, 0, 0.05]}
          width={frameSize}
          height={frameSize}
          useFrame
        />
        <Image
          filePath={'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
          color={'hotpink'}
          position={[-0.425, -0.85, 0]}
          width={frameSize}
          height={frameSize}
          useFrame
        />
      </View>
    );
  }
}

export { SceneImageRemote };
