import React from "react";

class SceneListView extends React.Component {
  constructor(props) {
    super(props);
    this.resources = [
      require("../../resources/DemoPicture1.jpg"),
      require("../../resources/DemoPicture2.jpg"),
      require("../../resources/DemoPicture3.jpg"),
      require("../../resources/DemoPicture4.jpg"),
      require("../../resources/DemoPicture5.jpg")
    ];
  }

  renderItems() {
    var items = [];
    for (var i=0; i<5; ++i) {
      items.push(
        <listViewItem backgroundColor={[1.0, 0.9, 0, 1]} key={i}>
          <linearLayout
            alignment={"center-center"}
            columns={1}
            defaultItemAlignment={"center-center"}
            defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}
            orientation={"horizontal"}
          >
            <image
              filePath={this.resources[i]}
              width={0.5}
              height={0.5}
            />
            <text
              alignment={"center-center"}
              textColor={[0, 0, 0, 1.0]}
              textSize={0.08}
            >
              {"Item no. " + i}
            </text>
          </linearLayout>
        </listViewItem>
      );
    }
    return items;
  }

  render() {
    return (
      <view localPosition={this.props.localPosition}>
        <listView
          debug={false}
          defaultItemAlignment={"center-left"}
          defaultItemPadding={[0, 0.05, 0, 0.0]}
          height={1.0}
        >
        { this.renderItems() }
        </listView>
      </view>
    );
  }
}

export { SceneListView };
