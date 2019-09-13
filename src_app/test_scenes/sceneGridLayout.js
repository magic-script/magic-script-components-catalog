import React from 'react';

class SceneGridLayout extends React.Component {
  constructor(props) {
    super(props);
    // The padding order is:  top, right, bottom, left
    this.state = { padding: [0,0,0,0], alignment: 'center-center' };
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

  onTopToggleChanged = () => { this.togglePaddingAt(0); }
  onRightToggleChanged = () => { this.togglePaddingAt(1); }
  onBottomToggleChanged = () => { this.togglePaddingAt(2); }
  onLeftToggleChanged = () => { this.togglePaddingAt(3); }
  togglePaddingAt(index) {
    var values = [...this.state.padding];
    values[index] = Math.abs(values[index] - 0.04);
    this.setState({ padding: values });
  }

  onTopLeftButtonClick = () => { this.setState({ alignment: 'top-left' }); }
  onTopCenterButtonClick = () => { this.setState({ alignment: 'top-center' }); }
  onTopRightButtonClick = () => { this.setState({ alignment: 'top-right' }); }
  onCenterLeftButtonClick = () => { this.setState({ alignment: 'center-left' }); }
  onCenterCenterButtonClick = () => { this.setState({ alignment: 'center-center' }); }
  onCenterRightButtonClick = () => { this.setState({ alignment: 'center-right' }); }
  onBottomLeftButtonClick = () => { this.setState({ alignment: 'bottom-left' }); }
  onBottomCenterButtonClick = () => { this.setState({ alignment: 'bottom-center' }); }
  onBottomRightButtonClick = () => { this.setState({ alignment: 'bottom-right' }); }

  render () {
    const { padding, alignment } = this.state;
    const columns = 3;
    return (
      <view localPosition={this.props.localPosition}>
        <view>
          <text localPosition={[0, 0, 0]} textSize={0.08} alignment={'bottom-center'}>Set items padding:</text>
          <toggle localPosition={[0.4, -0.1, 0]} textSize={0.08} height={0.1} on={padding[0] > 0} onToggleChanged={this.onTopToggleChanged}>top</toggle>
          <toggle localPosition={[0.4, -0.25, 0]} textSize={0.08} height={0.1} on={padding[1] > 0} onToggleChanged={this.onRightToggleChanged}>right</toggle>
          <toggle localPosition={[0.4, -0.4, 0]} textSize={0.08} height={0.1} on={padding[2] > 0} onToggleChanged={this.onBottomToggleChanged}>bottom</toggle>
          <toggle localPosition={[-0.3, -0.25, 0]} textSize={0.08} height={0.1} on={padding[3] > 0} onToggleChanged={this.onLeftToggleChanged}>left</toggle>
        </view>

        <gridLayout
          debug={true}
          alignment={'top-center'}
          columns={columns}
          defaultItemAlignment={alignment}
          defaultItemPadding={padding}
          localPosition={[0, -0.5, 0]}
        >
          {this.renderItems(columns, 6)}
        </gridLayout>

        <view localPosition={[0, -2.0, 0]}>
          <text localPosition={[0, 0.05, 0]} textSize={0.08} alignment={'bottom-center'}>Set items alignment:</text>
          <button localPosition={[-0.3, -0.1, 0]} textSize={0.08} roundness={0} onClick={this.onTopLeftButtonClick}>TL</button>
          <button localPosition={[ 0.0, -0.1, 0]} textSize={0.08} roundness={0} onClick={this.onTopCenterButtonClick}>TC</button>
          <button localPosition={[ 0.3, -0.1, 0]} textSize={0.08} roundness={0} onClick={this.onTopRightButtonClick}>TR</button>
          <button localPosition={[-0.3, -0.3, 0]} textSize={0.08} roundness={0} onClick={this.onCenterLeftButtonClick}>CL</button>
          <button localPosition={[ 0.0, -0.3, 0]} textSize={0.08} roundness={0} onClick={this.onCenterCenterButtonClick}>CC</button>
          <button localPosition={[ 0.3, -0.3, 0]} textSize={0.08} roundness={0} onClick={this.onCenterRightButtonClick}>CR</button>
          <button localPosition={[-0.3, -0.5, 0]} textSize={0.08} roundness={0} onClick={this.onBottomLeftButtonClick}>BL</button>
          <button localPosition={[ 0.0, -0.5, 0]} textSize={0.08} roundness={0} onClick={this.onBottomCenterButtonClick}>BC</button>
          <button localPosition={[ 0.3, -0.5, 0]} textSize={0.08} roundness={0} onClick={this.onBottomRightButtonClick}>BR</button>
        </view>
        
      </view>
    );
  }
}

export { SceneGridLayout };
