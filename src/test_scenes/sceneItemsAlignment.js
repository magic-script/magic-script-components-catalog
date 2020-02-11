import React from 'react';
import { Alignment } from '../utils/alignment';


class SceneItemsAlignment extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 1, height: 2, pageIndex: 0 };
    }

    renderItem(color) {
        return (
            <image debug={true} width={0.2} height={0.2} color={color} />
        );
    }

    onSwitchHandler = eventData => {
        this.setState({ pageIndex: eventData.On ? 1 : 0 });
    };

    render() {
        const { width, height, pageIndex } = this.state;

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
                        defaultItemAlignment={Alignment.centerCenter}
                        defaultItemPadding={[0.1, 0.1, 0.1, 0.1]}
                        itemAlignment={[
                            { column: 0, row: 0, alignment: Alignment.topLeft },
                            { column: 0, row: 1, alignment: Alignment.bottomCenter },
                            { column: 0, row: 2, alignment: Alignment.bottomLeft },
                            { column: 0, row: 3, alignment: Alignment.topRight },
                        ]}
                    >
                        {this.renderItem('blue')}
                        {this.renderItem('green')}
                        {this.renderItem('cyan')}
                        {this.renderItem('red')}
                        {this.renderItem('magenta')}

                    </gridLayout>
                </view>

                <view localPosition={[1, 0, 0]} >
                    <text
                        textColor={'white'}
                        textSize={0.08}
                    >PageView</text>
                    <toggle
                        localPosition={[0, -0.1, 0]}
                        text="Switch Page"
                        onToggleChanged={this.onSwitchHandler}
                    />
                    <pageView
                        localPosition={[0, -0.15, 0]}
                        width={1.5}
                        height={2}
                        visiblePage={pageIndex}
                        itemAlignment={[
                            // The padding order is:  top, right, bottom, left
                            { index: 0, alignment: Alignment.topLeft },
                            { index: 1, alignment: Alignment.bottomCenter }
                        ]}>
                        {this.renderItem('blue')}
                        {this.renderItem('green')}
                    </pageView>
                </view>
            </view>
        );
    }
}

export { SceneItemsAlignment };
