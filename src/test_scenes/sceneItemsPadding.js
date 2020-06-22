import React from 'react';
import { PageView, Text, View, LinearLayout, GridLayout, Toggle } from 'magic-script-components';

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
      <View position={[0, 0.9, 0]}>
        <View position={[-0.7, 0, 0]}>
          <Text textColor={'white'} fontSize={0.08}>Linear layout</Text>
          <LinearLayout
            debug={true}
            defaultItemPadding={[0.02, 0.02, 0.02, 0.02]}
            itemPadding={[
              // The padding order is:  top, right, bottom, left
              { index: 0, padding: [0, 0, 0, 0] },
              { index: 1, padding: [0.01, 0, 0.02, 0] },
              { index: 2, padding: [0.04, 0, 0.04, 0] },
              { index: 3, padding: [0.08, 0, 0.08, 0] },
            ]}
            position={[0, -0.5, 0]}
          >
            {this.renderItem('blue')}
            {this.renderItem('green')}
            {this.renderItem('cyan')}
            {this.renderItem('red')}
            {this.renderItem('magenta')}
          </LinearLayout>
        </View>

        <View position={[-0.1, 0, 0]} >
          <Text textColor={'white'} fontSize={0.08}>Grid layout</Text>
          <GridLayout
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
            position={[0, -0.5, 0]}
          >
            {this.renderItem('blue')}
            {this.renderItem('green')}
            {this.renderItem('cyan')}
            {this.renderItem('red')}
            {this.renderItem('magenta')}
          </GridLayout>
        </View>

        <View position={[0.5, 0, 0]} >
          <Text textColor={'white'} fontSize={0.08}>Page view</Text>
          <Toggle position={[0.3, -0.1, 0]} height={0.05} text={'Switch page'} onToggleChanged={this.onSwitchHandler} />
          <PageView
            width={0.3}
            height={0.3}
            position={[0, -0.5, 0]}
            visiblePage={pageIndex}
            pagePadding={[
              // The padding order is:  top, right, bottom, left
              { index: 0, padding: [0.1, 0.1, 0, 0] },
              { index: 1, padding: [0.0, 0.0, 0.1, 0.1] }
            ]}>
            {this.renderItem('blue')}
            {this.renderItem('green')}
          </PageView>
        </View>
      </View>
    );
  }
}

export { SceneItemsPadding };
