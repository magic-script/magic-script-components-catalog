import React from 'react';
import { Alignment, AnchorPoint, GridLayout, Image, LinearLayout, PageView, Text, Toggle, View } from 'magic-script-components';

class SceneItemsAlignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageIndex: 0 };
  }

  renderItem(color) {
    return <Image debug={true} width={0.1} height={0.1} color={color} />;
  }

  onSwitchHandler = eventData => {
    this.setState({ pageIndex: eventData.On ? 1 : 0 });
  };

  render() {
    const { pageIndex } = this.state;

    return (
      <View position={[0, 0.8, 0]}>
        <View position={[-0.5, 0, 0]} >
          <Text textColor={'white'} fontSize={0.08}>Linear layout</Text>
          <LinearLayout
            anchorPoint={AnchorPoint.topCenter}
            debug
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
          <Text textColor={'white'} fontSize={0.08}>Grid layout</Text>
          <GridLayout
            anchorPoint={AnchorPoint.topCenter}
            debug
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

        <View position={[0.45, 0, 0]} >
          <Text textColor={'white'} fontSize={0.08}>Page view</Text>
          <Toggle position={[0.2, -0.1, 0]} height={0.05} onToggleChanged={this.onSwitchHandler} fontSize={0.05}>Switch page</Toggle>
          <PageView
            anchorPoint={AnchorPoint.topCenter}
            debug
            width={0.3}
            height={0.3}
            visiblePage={pageIndex}
            pageAlignment={[
              { index: 0, alignment: Alignment.topLeft },
              { index: 1, alignment: Alignment.bottomCenter }
            ]}
            position={[0, -0.2, 0]}
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
