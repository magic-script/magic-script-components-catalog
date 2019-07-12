import React from 'react';

class SceneTextEdit extends React.Component {
    render () {
        return (
            <view localPosition={this.props.localPosition}>
                <text localPosition={[-0.3, 0.45, 0]} textSize={0.05}>Default</text>
                <textEdit localPosition={[-0.3, 0.425, 0]} width={0.7} height={0.05} hint={'Placeholder'} text={' '}></textEdit>

                <text localPosition={[-0.3, 0.25, 0]} textSize={0.05}>Password</text>
                <textEdit localPosition={[-0.3, 0.225, 0]} width={0.7} height={0.05} password> </textEdit>

                <text localPosition={[-0.3, 0.05, 0]} textSize={0.05}>Multiline</text>
                <textEdit localPosition={[-0.3, 0.025, 0]} width={0.7} height={0.25} multiline>Multiline text edit</textEdit>
            </view>
        );
    }
}

export { SceneTextEdit };
