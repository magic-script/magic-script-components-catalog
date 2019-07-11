import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <view localPosition={this.props.localPosition}>
                <text
                    localPosition={[0, 0.04, 0]}
                    textSize={0.07}
                >{this.props.title}</text>
                <text
                    localPosition={[0, -0.03, 0]}
                    textSize={0.04}
                >{this.props.subtitle}</text>
            </view>
        );
    }
}
