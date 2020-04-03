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
    console.log('onTextChanged.event: ', event)
    this.setState({ text: event.Text });
  }

  onLoad = () => {
    this.setState({ url: this.state.text });
  }

  onOpenUrl = () => {
    const url = this.state.text;
    Platform.canOpenUrl(url)
    .then(() => Platform.openUrl(url))
    .catch(e => {
      this.setState({ error: e.message });
    });
  }

  onDialogConfirmed = () => {
    this.setState({ error: undefined });
  }

  renderWebView() {
    const { text, url } = this.state;
    const web = { width: 1.0, height: 0.75 };
    return (
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
    );
  }

  render() {
    const { error } = this.state;
    return (
      <View localPosition={this.props.localPosition}>
        {!error && this.renderWebView()}
        {error && (
          <Dialog
            confirmText={'Ok'}
            localScale={[2,2,2]}
            message={error}
            onDialogConfirmed={this.onDialogConfirmed}
            title={'Cannot open url'}
            type={'single-action'}
          />
        )}
      </View>
    );
  }
}

export { SceneWebView };
