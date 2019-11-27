import React from 'react';

class SceneWebView extends React.Component {
  constructor(props) {
    super(props);
    const initialUrl = 'https://www.magicleap.com';
    this.state = {
      text: initialUrl,
      url: initialUrl,
    };
  }

  onTextChanged = event => {
    console.log('textEdit.onTextChanged: ', event);
    this.setState({ text: event.text });
  }

  onLoad = () => {
    this.setState({ url: this.state.text });
  }

  render () {
    const { text, url } = this.state;
    return (
      <view localPosition={this.props.localPosition}>
        <textEdit 
          hint={'Enter url...'}
          localPosition={[0, 0.5, 0]} 
          onTextChanged={this.onTextChanged}
          text={text}
          textColor={[1,1,1,0.75]}
          textSize={0.08}
        />
        <button 
          localPosition={[0.4, 0.5, 0]} 
          onClick={this.onLoad}
          text={'Load'}
          textSize={0.08}
        />
        <webView 
          url={url} 
          localPosition={[0, 0.4, 0]} 
          height={0.7} 
          width={1.0}
        />
      </view>
    );
  }
}

export { SceneWebView };
