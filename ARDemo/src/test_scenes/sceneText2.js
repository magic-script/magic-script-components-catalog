import React from 'react';

class SceneText2 extends React.Component {

    state = { timeDiff: undefined }

    componentWillMount() {
        this.startTime = new Date();
    }

    componentDidMount() {
        const endTime = new Date();
        const timeDiff = (endTime - this.startTime) / 1000;
        this.setState({ timeDiff });
    }

    renderTimeDiff() {
        const { timeDiff } = this.state;
        if (timeDiff === undefined) {
            return null;
        }

        return (
            <text localPosition={[0, 1.3, 0]} textColor={[1,1,1,0.8]} textSize={0.05}>{`${timeDiff}`}</text>
        );
    }

    renderTexts() {
        const texts = [
            'The quick brown fox jumps over the lazy dog.',
            'With time and patience the mulberry leaf becomes a silk gown.',
            'Man is a pupil, pain is his teacher.',
            'A journey of a thousand miles begins with a single step.',
            'A smile will gain you ten more years of life.',
            'He who asks is a fool for five minutes, but he who does not ask remains a fool forever.',
        ];
        const textAlignments = ['left', 'center', /*'justify',*/, 'right'];
        const height = 0.35;
        return texts.map((text, index) => {
            const y = 0.5 - height * index;
            const textAlignment = textAlignments[(index / 2) % textAlignments.length];
            const wrap = (index >= (textAlignments.length / 2));
            return (
                <text 
                    key={index} 
                    localPosition={[0, y, 0]} 
                    textAlignment={textAlignment}
                    textColor={[1,1,1,0.8]} 
                    textSize={0.08}
                    wrap={true}
                    boundsSize={[1.0,height]}
                >{text}</text>
            );
        });
    }

    render() {
        return (
            <view localPosition={this.props.localPosition}>
                {this.renderTimeDiff()}
                <view localPosition={[0,0.5,0]}>
                    {this.renderTexts()}
                </view>
            </view>
        );
    }
}

export { SceneText2 };
