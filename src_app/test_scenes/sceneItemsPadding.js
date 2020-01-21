import React from 'react';
import { PageView } from 'magic-script-components';

class SceneItemsPadding extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
    }

    renderItem(color) {
        return (
            <image debug={true} width={0.2} height={0.2} color={color} />
        );
    }

    render() {
        const { width, height } = this.state;

        return (
            <view localPosition={[0, 1, 0]}>
                <view localPosition={[-1, 0, 0]} >
                    <text
                        textColor={'white'}
                        textSize={0.08}
                    >linearLayout</text>
                    <linearLayout
                        debug={true}
                        width={width}
                        height={height}
                        defaultItemPadding={[0.1, 0.1, 0.1, 0.1]}
                        itemPadding={[
                            // The padding order is:  top, right, bottom, left
                            { index: 0, padding: [0, 0, 0, 0] },
                            { index: 1, padding: [0.01, 0, 0.02, 0] },
                            { index: 2, padding: [0.04, 0, 0.04, 0] },
                            { index: 3, padding: [0.08, 0, 0.08, 0] },
                        ]}
                    >
                        {this.renderItem('blue')}
                        {this.renderItem('green')}
                        {this.renderItem('cyan')}
                        {this.renderItem('red')}
                        {this.renderItem('magenta')}

                    </linearLayout>
                </view>

                <view localPosition={[0, 0, 0]} >
                    <text
                        textColor={'white'}
                        textSize={0.08}
                    >GridLayout</text>
                    <gridLayout
                        debug={true}
                        width={width}
                        height={height}
                        columns={2}
                        defaultItemPadding={[0.1, 0.1, 0.1, 0.1]}
                        itemPadding={[
                            // The padding order is:  top, right, bottom, left
                            { index: 0, padding: [0, 0, 0, 0] },
                            { index: 1, padding: [0.01, 0, 0.02, 0] },
                            { index: 2, padding: [0.04, 0, 0.04, 0] },
                            { index: 3, padding: [0.08, 0, 0.08, 0] },
                        ]}
                    >
                        {this.renderItem('blue')}
                        {this.renderItem('green')}
                        {this.renderItem('cyan')}
                        {this.renderItem('red')}
                        {this.renderItem('magenta')}

                    </gridLayout>
                </view>

                <view localPosition={[0, 1, 0]} >
                    <text
                        textColor={'white'}
                        textSize={0.08}
                    >PageView</text>
                    // TODO
                </view>
            </view>
        );
    }
}

export { SceneItemsPadding };
