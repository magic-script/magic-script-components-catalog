import React from 'react';
import { Alignment } from '../utils/alignment';

class SceneItemsAlignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageIndex: 0 };
  }

  renderItem(color) {
    return <image debug={true} width={0.1} height={0.1} color={color} />;
  }

  onSwitchHandler = eventData => {
    this.setState({ pageIndex: eventData.On ? 1 : 0 });
  };

  render() {
    const { pageIndex } = this.state;

    return (
      <view localPosition={[0, 0.9, 0]}>
        <view localPosition={[-0.9, 0, 0]} >
          <text textColor={'white'} textSize={0.08}>Linear layout</text>
          <linearLayout
            debug={true}
            width={0.4}
            height={0.8}
            defaultItemAlignment={Alignment.centerCenter}
            defaultItemPadding={[0.02, 0.02, 0.02, 0.02]}
            itemAlignment={[
              { index: 0, alignment: Alignment.topLeft },
              { index: 1, alignment: Alignment.bottomCenter },
              { index: 2, alignment: Alignment.bottomLeft },
              { index: 3, alignment: Alignment.topRight },
            ]}
            localPosition={[0, -0.2, 0]}
          >
            {this.renderItem('blue')}
            {this.renderItem('green')}
            {this.renderItem('cyan')}
            {this.renderItem('red')}
            {this.renderItem('magenta')}
          </linearLayout>
        </view>

        <view localPosition={[-0.2, 0, 0]} >
          <text textColor={'white'} textSize={0.08}>Grid layout</text>
          <gridLayout
            debug={true}
            width={0.4}
            height={0.8}
            columns={1}
            defaultItemAlignment={Alignment.centerCenter}
            defaultItemPadding={[0.02, 0.02, 0.02, 0.02]}
            itemAlignment={[
              { column: 0, row: 0, alignment: Alignment.topLeft },
              { column: 0, row: 1, alignment: Alignment.bottomCenter },
              { column: 0, row: 2, alignment: Alignment.bottomLeft },
              { column: 0, row: 3, alignment: Alignment.topRight },
            ]}
            localPosition={[0, -0.2, 0]}
          >
            {this.renderItem('blue')}
            {this.renderItem('green')}
            {this.renderItem('cyan')}
            {this.renderItem('red')}
            {this.renderItem('magenta')}
          </gridLayout>
        </view>

        <view localPosition={[0.5, 0, 0]} >
          <text textColor={'white'} textSize={0.08}>Page view</text>
          <toggle localPosition={[0.3, -0.1, 0]} height={0.05} text={'Switch page'} onToggleChanged={this.onSwitchHandler} />
          <pageView
            width={0.3}
            height={0.3}
            localPosition={[0, -0.2, 0]}
            visiblePage={pageIndex}
            pageAlignment={[
              { index: 0, alignment: Alignment.topLeft },
              { index: 1, alignment: Alignment.bottomCenter }
            ]}
          >
            {this.renderItem('blue')}
            {this.renderItem('green')}
          </pageView>
        </view>
      </view>
    );
  }
}

export { SceneItemsAlignment };
