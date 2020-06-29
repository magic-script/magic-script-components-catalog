import React from 'react';
import { PageView, Line, LinearLayout, Tab, Image, View } from 'magic-script-components';

class ScenePageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 0 };
    this.colors = [
      { name: 'red', value: [1,0,0,1] },
      { name: 'green', value: [0,1,0,1] },
      { name: 'blue', value: [0,0,1,1] },
      { name: 'magenta', value: [1,0,1,1] },
      { name: 'cyan', value: [0,1,1,1] },
      { name: 'orange', value: [1,0.5,0,1] },
      { name: 'gray', value: [0.5,0.5,0.5,1] },
    ];
  }

  onTabSelect = index => {
    this.setState({ selectedTab: index });
  }

  renderTab = (item, index, pageWidth, tabHeight) => {
    const w = pageWidth / this.colors.length;
    const h = tabHeight;
    const p = { x: -0.5 * w, y: -0.5 * h };
    const f = 0.3 * h; // fold size
    const points = [
      [p.x, p.y, 0], 
      [p.x, p.y + h - f, 0], 
      [p.x + f, p.y + h, 0], 
      [p.x + w, p.y + h, 0], 
      [p.x + w, p.y, 0], 
    ];
    const a = (index === this.state.selectedTab) ? 1 : 0.5;
    return (
      <View key={index}>
        <Tab textColor={[1,1,1,a]} fontSize={0.12} text={`${index + 1}`} onActivate={() => this.onTabSelect(index)} />
        <Line color={[1,1,1,1]} points={points} />
      </View>
    );
  }

  renderPage = (item, size) => {
    return <Image key={item.name} color={item.value} width={size.width} height={size.height} />;
  }

  render () {
    const { selectedTab } = this.state;
    const pageSize = { width: 1.0, height: 0.8 };
    const tabHeight = 0.13;
    const pp = 0.02; // page padding
    const outline = [
      [0, 0, 0],
      [0, pageSize.height, 0],
      [pageSize.width, pageSize.height, 0],
      [pageSize.width, 0, 0],
      [0, 0, 0],
    ];
    return (
      <View position={this.props.position}>
        <LinearLayout defaultItemAlignment={'top-center'} anchorPoint={'top-center'} orientation={'vertical'}>
          <LinearLayout defaultItemPadding={[0.0, 0.0, 0.0, 0.0]} orientation={'horizontal'}>
            {this.colors.map((item, index) => this.renderTab(item, index, pageSize.width, tabHeight))}
          </LinearLayout>
          <PageView 
            defaultPagePadding={[pp, pp, pp, pp]}
            visiblePage={selectedTab}
            width={pageSize.width}
            height={pageSize.height}
          >
            {this.colors.map(item => this.renderPage(item, { width: pageSize.width - 2 * pp, height: pageSize.height - 2 * pp }))}
          </PageView>
        </LinearLayout>
        <Line position={[-0.5 * pageSize.width, -pageSize.height - tabHeight, 0]} color={'white'} points={outline} />
      </View>
      
    );
  }
}

export { ScenePageView };
