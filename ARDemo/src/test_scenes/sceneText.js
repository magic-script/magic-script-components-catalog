import React from 'react';

class SceneText extends React.Component {

    renderText(key, contents, textSize, textColor, localPosition) {
        return (<text
            key={key}
            localPosition={localPosition}
            textColor={textColor}
            textSize={textSize}
        >{contents}</text>);
    }

    lerpv4(v1, v2, t) {
        if (t === undefined) { t = 0; }

        const x = v1[0] + t * (v2[0] - v1[0]);
        const y = v1[1] + t * (v2[1] - v1[1]);
        const z = v1[2] + t * (v2[2] - v1[2]);
        const w = v1[3] + t * (v2[3] - v1[3]);

        return [x, y, z, w];
    }

    getColor(x, y) {
        const d = 0.1
        const colors = [
            [d,1,1,1],
            [1,d,1,1],
            [1,1,d,1],
            [1,1,1,1],
        ];
        const c1 = this.lerpv4(colors[0], colors[1], x);
        const c2 = this.lerpv4(colors[2], colors[3], x);
        return this.lerpv4(c1, c2, y);
    }

    renderLetters() {
        const letters = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789,.:_-!@#$%^&*()[]{}<>/\\~`'];
        const minTextSize = 0.01;
        const maxTextSize = 0.15;
        const size = 0.15;
        const columns = 8;
        const rows = Math.ceil(letters.length / columns);
        const minX = -0.5 * size * (columns - 1);
        const minY = 0;
        const textSizeFactor = (maxTextSize - minTextSize) / letters.length;
        
        return letters.map((char, index) => {
            const textSize = minTextSize + textSizeFactor * index;
            const column = index % columns;
            const row = Math.floor(index / columns);
            const x = minX + size * column;
            const y = minY - size * row;
            const textColor = this.getColor(column / (columns - 1), row / (rows - 1));
            return (
                <text
                    key={index}
                    localPosition={[x, y, 0]}
                    textColor={textColor}
                    textSize={textSize}
                >{char}</text>
            );
        });
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
        const textAlignments = ['center', /*'justify',*/ 'left', 'right'];
        const size = 0.15;
        return texts.map((text, index) => {
            const y = -size * index;
            const textAlignment = textAlignments[(index / 2) % textAlignments.length];
            const wrap = (index >= (textAlignments.length / 2));
            return (
                <text 
                    key={index} 
                    localPosition={[0, y, 0]} 
                    textAlignment={textAlignment}
                    textColor={[1,1,1,0.8]} 
                    textSize={0.08}
                    wrap={wrap}
                >{text}</text>
            );
        });
    }

    render() {
        return (
            <view localPosition={this.props.localPosition}>
                <view localPosition={[0,0.3,0]}>
                    {this.renderLetters()}
                </view>
                <view localPosition={[0,-1.4,0]}>
                    {this.renderTexts()}
                </view>
            </view>
        );
    }
}

export { SceneText };
