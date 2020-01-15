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
    const web = { width: 1.0, height: 0.75 };
    return (
      <linearLayout 
        alignment={'top-center'}
        localPosition={this.props.localPosition}
        orientation={'vertical'}
        defaultItemAlignment={'center-right'}
        defaultItemPadding={[0.03, 0, 0.03, 0]}
      >
        <textEdit 
          hint={'Enter url...'}
          height={0.08}
          onTextChanged={this.onTextChanged}
          text={text}
          textColor={[255,255,255,0.75]}
          textSize={0.05}
          width={web.width}
        />
        <button 
          height={0.1}
          onClick={this.onLoad}
          text={'Load'}
          textSize={0.08}
        />
        <webView 
          url={url} 
          height={web.height} 
          width={web.width}
        />
      </linearLayout>
    );
  }
}

export { SceneWebView };
