import React from 'react';

class SceneGridLayout extends React.Component {
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

    return items.map((item, index) => <text key={index} textSize={(index === indexMidRow) ? 0.2 : 0.08}>{item}</text>);
  }

  render () {
    const columns = 3;
    return (
      <view localPosition={this.props.localPosition}>
        <gridLayout
          alignment={'center-center'}
          columns={columns}
          defaultItemAlignment={'center-center'}
          defaultItemPadding={[0.03, 0.03, 0.03, 0.03]}
        >
          {this.renderItems(columns, 6)}
        </gridLayout>
      </view>
    );
  }
}

export { SceneGridLayout };
