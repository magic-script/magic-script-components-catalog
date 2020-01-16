import React from 'react';

class SceneImage extends React.Component {
  render () {
    return (
      <view localPosition={this.props.localPosition}>
        <image
          filePath={require('../../resources/DemoPicture1.jpg')}
          localPosition={[-0.25, 0.25, 0]}
          width={0.25}
          height={0.25}
        />
        <image
          filePath={require('../../resources/DemoPicture2.jpg')}
          localPosition={[-0.25, 0, 0]}
          width={0.25}
          height={0.25}
        />
        <image
          filePath={require('../../resources/DemoPicture3.jpg')}
          localPosition={[0.125, 0.125, 0]}
          width={0.5}
          height={0.5}
        ></image>
        <image
          filePath={require('../../resources/DemoPicture4.jpg')}
          localPosition={[-0.125, -0.25, 0]}
          width={0.5}
          height={0.25}
        ></image>
        <image
          filePath={require('../../resources/DemoPicture5.jpg')}
          localPosition={[0.25, -0.25, 0]}
          width={0.25}
          height={0.25}
        ></image>
      </view>
    );
  }
}

export { SceneImage };
