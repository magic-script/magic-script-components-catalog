import React from 'react';
import { LinearLayout } from 'magic-script-components';

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

  render () {
    const { selectedTab } = this.state;
    const pageSize = { width: 1.0, height: 0.8 };
    return (
      <view localPosition={this.props.localPosition}>
        <linearLayout 
          alignment={'bottom-center'}
          defaultItemPadding={[0.03, 0.03, 0.03, 0.03]}
          orientation={'horizontal'}
        >
          {this.colors.map(index, item => <tab textSize={0.08} onActivate={() => this.onTabSelect(index)}>{index}</tab>)}
        </linearLayout>
        <pageView 
          alignment={'top-center'} 
          visiblePage={selectedTab}
        >
          {this.colors.map(item => {
            return <image color={item.value} width={pageSize.width} height={pageSize.height} />
          })}
        </pageView>
      </view>

    );
  }
}

export { ScenePageView };
