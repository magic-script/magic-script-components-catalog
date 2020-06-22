import React from 'react';
import { Alignment } from '../utils/alignment';
import { View, Text, LinearLayout, Toggle, GridLayout, PageView } from 'magic-script-components';

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
      <View position={[0, 0.3, 0]}>
        <View position={[-0.5, 0, 0]} >
          <Text textColor={'white'} fontSize={0.08} position={[0, 0.35, 0]}>Linear layout</Text>
          <LinearLayout
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
            position={[0, -0.2, 0]}
          >
            {this.renderItem('blue')}
            {this.renderItem('green')}
            {this.renderItem('cyan')}
            {this.renderItem('red')}
            {this.renderItem('magenta')}
          </LinearLayout>
        </View>

        <View position={[0, 0, 0]} >
          <Text textColor={'white'} fontSize={0.08} position={[0, 0.35, 0]}>Grid layout</Text>
          <GridLayout
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
            position={[0, -0.2, 0]}
          >
            {this.renderItem('blue')}
            {this.renderItem('green')}
            {this.renderItem('cyan')}
            {this.renderItem('red')}
            {this.renderItem('magenta')}
          </GridLayout>
        </View>

        <View position={[0.4, 0, 0]} >
          <Text textColor={'white'} fontSize={0.08} position={[0, 0.35, 0]}>Page view</Text>
          <Toggle position={[0.3, 0.275, 0]} height={0.05} onToggleChanged={this.onSwitchHandler} fontSize={0.05}>Switch page</Toggle>
          <PageView
            width={0.3}
            height={0.3}
            visiblePage={pageIndex}
            pageAlignment={[
              { index: 0, alignment: Alignment.topLeft },
              { index: 1, alignment: Alignment.bottomCenter }
            ]}
          >
            {this.renderItem('blue')}
            {this.renderItem('green')}
          </PageView>
        </View>
      </View>
    );
  }
}

export { SceneItemsAlignment };
