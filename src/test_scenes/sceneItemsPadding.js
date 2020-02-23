import React from 'react';
import { PageView } from 'magic-script-components';

class SceneItemsPadding extends React.Component {
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
        <view localPosition={[-0.9, 0, 0]}>
          <text textColor={'white'} textSize={0.08}>Linear layout</text>
          <linearLayout
            debug={true}
            defaultItemPadding={[0.02, 0.02, 0.02, 0.02]}
            itemPadding={[
              // The padding order is:  top, right, bottom, left
              { index: 0, padding: [0, 0, 0, 0] },
              { index: 1, padding: [0.01, 0, 0.02, 0] },
              { index: 2, padding: [0.04, 0, 0.04, 0] },
              { index: 3, padding: [0.08, 0, 0.08, 0] },
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
            columns={2}
            defaultItemPadding={[0.02, 0.02, 0.02, 0.02]}
            itemPadding={[
              // The padding order is:  top, right, bottom, left
              { column: 0, row: 0, padding: [0, 0, 0, 0] },
              { column: 0, row: 1, padding: [0.01, 0, 0.02, 0] },
              { column: 1, row: 0, padding: [0.04, 0, 0.04, 0] },
              { column: 1, row: 1, padding: [0.08, 0, 0.08, 0] },
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
            pagePadding={[
              // The padding order is:  top, right, bottom, left
              { index: 0, padding: [0.1, 0.1, 0, 0] },
              { index: 1, padding: [0.0, 0.0, 0.1, 0.1] }
            ]}>
            {this.renderItem('blue')}
            {this.renderItem('green')}
          </pageView>
        </view>
      </view>
    );
  }
}

export { SceneItemsPadding };
