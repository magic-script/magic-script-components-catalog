import React from 'react';

class SceneVideo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLooping: false };
    this.onToggleChanged = this.onToggleChanged.bind(this);
  }

  onToggleChanged(event) {
    this.setState({ isLooping: event.On });
  }

  render () {
    return (
      <view localPosition={this.props.localPosition}>
      
        <video 
          localPosition={[0, 0.4, 0]}
          alignment={'top-center'}
          videoPath={require('../../resources/video.mp4')}
          isLooping={this.state.isLooping}
        />

        <toggle 
          localPosition={[0, -0.5, 0]} 
          height={0.1} 
          textSize={0.08} 
          on={this.state.isLooping} 
          onToggleChanged={this.onToggleChanged}>
          Looping
        </toggle>

      </view>
    );
  }
}

export { SceneVideo };
