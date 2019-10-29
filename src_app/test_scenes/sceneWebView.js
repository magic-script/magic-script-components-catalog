import React from 'react';

const WebViewActions = {
    back: "back",
    forward: "forward",
    reload: "reload"
};

class SceneWebView extends React.Component {

    constructor(props) {
        super(props);
        this.state = { width: 0.75, height: 2, alignment: 'center-center' };
    }

    onBackClicked = () => { this.setState({ action: WebViewActions.back }); }

    onReloadClicked = () => { this.setState({ action: WebViewActions.reload }); }

    onForwardClicked = () => { this.setState({ action: WebViewActions.forward }); }

    renderBackButton = (position) =>
            <button
                localPosition={position}
                textSize={0.1}
                width={0.35}
                height={0.12}
                onClick={this.onBackClicked}  >
                {WebViewActions.back}
            </button>

    renderReloadButton = (position) =>
            <button
                localPosition={position}
                textSize={0.1}
                width={0.35}
                height={0.12}
                onClick={this.onReloadClicked}  >
                {WebViewActions.reload}
            </button>

    renderForwardButton = (position) =>
            <button
                localPosition={position}
                textSize={0.1}
                width={0.35}
                height={0.12}
                onClick={this.onForwardClicked}  >
                {WebViewActions.forward}
            </button>

    render() {
        const { action, width, height } = this.state;
        return (
            <view localPosition={this.props.localPosition}>
                <webView
                    localPosition={[0, -0.25, -0.5]}
                    url="http://google.com"
                    action={action}
                    width={width}
                    height={height}
                    action={this.state.action} />

                {this.renderBackButton([0, 0.2, 0])}
                {this.renderReloadButton([-0.4, 0.2, 0])}
                {this.renderForwardButton([0.4, 0.2, 0])}

            </view>
        );
    }
}

export { SceneWebView };
