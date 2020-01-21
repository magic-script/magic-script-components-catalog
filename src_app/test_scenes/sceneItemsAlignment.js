import React from 'react';
import { Alignment } from '../utils/alignment';


class SceneItemsAlignment extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 1, height: 2 };
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
                        defaultItemAlignment={Alignment.centerCenter}
                        defaultItemPadding={[0.5, 0.5, 0.5, 0.5]}
                        itemAlignment={[
                            { index: 0, alignment: Alignment.topLeft },
                            { index: 1, alignment: Alignment.bottomCenter },
                            { index: 2, alignment: Alignment.bottomLeft },
                            { index: 3, alignment: Alignment.topRight },
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
                        columns={1}
                        defaultItemAlignment={Alignment.topRight}
                        defaultItemPadding={[0.1, 0.1, 0.1, 0.1]}
                        itemAlignment={[
                            { index: 0, alignment: Alignment.topLeft },
                            { index: 1, alignment: Alignment.bottomCenter },
                            { index: 2, alignment: Alignment.bottomLeft },
                            { index: 3, alignment: Alignment.topRight },
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

export { SceneItemsAlignment };
