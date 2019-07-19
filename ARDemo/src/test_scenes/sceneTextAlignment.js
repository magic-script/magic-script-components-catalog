import React from 'react';

class SceneTextAlignment extends React.Component {

    renderTexts() {
        const textAlignments = ['left', 'center', 'justify', 'right'];
        const height = 0.2;
        return textAlignments.map((alignment, index) => {
            const y = 0.5 - height * index;
            return (
                <text 
                    key={index} 
                    localPosition={[0, y, 0]} 
                    textAlignment={alignment}
                    textColor={[1,0.9,0.9,0.8]} 
                    textSize={0.08}
                >{`TextAlignment.${alignment}`}</text>
            );
        });
    }

    render() {
        return (
            <view localPosition={this.props.localPosition}>
                <view localPosition={[0,0.5,0]}>
                    {this.renderTexts()}
                </view>
            </view>
        );
    }
}

export { SceneTextAlignment };
