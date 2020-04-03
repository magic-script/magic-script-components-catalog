import React from 'react';
import { Button, Dialog, LinearLayout, Platform, TextEdit, View, WebView } from 'magic-script-components';

class SceneWebView extends React.Component {
  constructor(props) {
    super(props);
    const initialUrl = 'https://www.magicleap.com';
    this.state = {
      text: initialUrl,
      url: initialUrl,
      error: undefined,
    };
  }

  onTextChanged = event => {
    this.setState({ text: event.text });
  }

  onLoad = () => {
    this.setState({ url: this.state.text });
  }

  onOpenUrl = async () => {
    const url = this.state.text;
    Platform.canOpenUrl(url)
    .then(() => Platform.openUrl(url))
    .catch(e => this.setState({ error: e.message }));
  }

  onDialogConfirmed = () => {
    this.setState({ error: undefined });
  }

  render () {
    const { text, url, error } = this.state;
    const web = { width: 1.0, height: 0.75 };
    return (
      <View localPosition={this.props.localPosition}>
        <LinearLayout 
          alignment={'top-center'}
          orientation={'vertical'}
          defaultItemAlignment={'center-center'}
          defaultItemPadding={[0.03, 0, 0.03, 0]}
          itemAlignment={[
            { index: 1, alignment: 'center-right' }
          ]}
          itemPadding={[
            { index: 1, padding: [0, 0.03, 0.1, 0]}
          ]}
        >
          <TextEdit 
            hint={'Enter url...'}
            height={0.08}
            onTextChanged={this.onTextChanged}
            text={text}
            textColor={[1,1,1,0.75]}
            textSize={0.05}
            width={web.width}
          />
          <Button height={0.1} onClick={this.onLoad} text={'Load'} textSize={0.08} />
          <WebView url={url} height={web.height} width={web.width} />
          <Button height={0.1} onClick={this.onOpenUrl} text={'Open in browser'} textSize={0.08} />
        </LinearLayout>
        {error && (
          <Dialog
            onDialogConfirmed={this.onDialogConfirmed}
            title={'Cannot open url'}
            message={error}
            confirmText={'Ok'}
          />
        )}
        
      </View>
    );
  }
}

export { SceneWebView };
