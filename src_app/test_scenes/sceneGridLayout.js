import React from 'react';

class SceneGridLayout extends React.Component {
  constructor(props) {
    super(props);
    // The padding order is:  top, right, bottom, left
    this.state = { padding: [0,0,0,0] };
  }

  renderItems (columns, rows) {
    var items = [];
    const itemsCount = rows * columns;
    const indexMidRow = Math.floor(rows / 2) * columns;
    const indexMidCol = itemsCount - Math.floor(columns / 2) - 1;
    for (var i = 0; i < itemsCount; ++i) {
      if (i === indexMidRow) {
        items.push(`Item\n${i}`);
      } else if (i === indexMidCol) {
        items.push(`default item alignment`);
      } else {
        items.push(`Item ${i}`);
      }
    }

    return items.map((item, index) => <text debug={true} key={index} textSize={(index === indexMidRow) ? 0.2 : 0.08}>{item}</text>);
  }

  onTopToggleChanged = () => {
    this.togglePaddingAt(0);
  }

  onRightToggleChanged = () => {
    this.togglePaddingAt(1);
  }

  onBottomToggleChanged = () => {
    this.togglePaddingAt(2);
  }

  onLeftToggleChanged = () => {
    this.togglePaddingAt(3);
  }

  togglePaddingAt(index) {
    var values = [...this.state.padding];
    values[index] = Math.abs(values[index] - 0.1);
    this.setState({ padding: values });
  }

  render () {
    const { padding } = this.state;
    const columns = 3;
    return (
      <view localPosition={this.props.localPosition}>
        <gridLayout
          debug={true}
          alignment={'top-center'}
          columns={columns}
          defaultItemAlignment={'top-left'}
          defaultItemPadding={padding}
          localPosition={[0, -0.5, 0]}
        >
          {this.renderItems(columns, 6)}
        </gridLayout>
        <view>
          <text localPosition={[0, 0, 0]} textSize={0.08} alignment={'bottom-center'}>Set items padding:</text>
          <toggle localPosition={[0.4, -0.1, 0]} textSize={0.08} height={0.1} on={padding[0] > 0} onToggleChanged={this.onTopToggleChanged}>top</toggle>
          <toggle localPosition={[0.4, -0.25, 0]} textSize={0.08} height={0.1} on={padding[1] > 0} onToggleChanged={this.onRightToggleChanged}>right</toggle>
          <toggle localPosition={[0.4, -0.4, 0]} textSize={0.08} height={0.1} on={padding[2] > 0} onToggleChanged={this.onBottomToggleChanged}>bottom</toggle>
          <toggle localPosition={[-0.3, -0.25, 0]} textSize={0.08} height={0.1} on={padding[3] > 0} onToggleChanged={this.onLeftToggleChanged}>left</toggle>
        </view>
        
      </view>
    );
  }
}

export { SceneGridLayout };
