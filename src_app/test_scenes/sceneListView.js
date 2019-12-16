import React from "react";

const ListViewOrientation = {
  vertical: "vertical",
  horizontal: "horizontal"
};
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
    this.state = {
      listViewOrientation: ListViewOrientation.vertical,
      width: 0.0,
      height: 1.0
    };
  }

  renderItems() {
    var items = [];
    for (var i = 0; i < 5; ++i) {
      items.push(
        <listViewItem backgroundColor={[1.0, 0.9, 0, 1]} key={i}>
          <linearLayout
            alignment={"center-center"}
            columns={1}
            defaultItemAlignment={"center-center"}
            defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}
            orientation={"horizontal"}
          >
            <image filePath={this.resources[i]} width={0.5} height={0.5} />
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

  toggleListViewOrientation = event => {
    const { listViewOrientation } = this.state;
    if (listViewOrientation === "vertical") {
      this.setState({
        listViewOrientation: ListViewOrientation.horizontal,
        width: 1.0,
        height: 0.0
      });
    } else {
      this.setState({
        listViewOrientation: ListViewOrientation.vertical,
        width: 0.0,
        height: 1.0
      });
    }
  };

  render() {
    const { listViewOrientation, height, width } = this.state;
    return (
      <view localPosition={this.props.localPosition}>
        <linearLayout
          localPosition={[0, 0.5, 0]}
          alignment={"center-center"}
          defaultItemAlignment={"center-center"}
          defaultItemPadding={[0.07, 0, 0.07, 0]}
          orientation={"vertical"}
        >
          <toggle
            alignment={"center-center"}
            on={false}
            textSize={0.05}
            textColor={[1, 1, 1, 1]}
            height={0.075}
            onToggleChanged={this.toggleListViewOrientation}
          >
            List view orientation
          </toggle>
          <listView
            orientation={listViewOrientation}
            defaultItemAlignment={"center-center"}
            defaultItemPadding={[0, 0.05, 0, 0.0]}
            height={height}
            width={width}
          >
            {this.renderItems()}
          </listView>
        </linearLayout>
      </view>
    );
  }
}

export { SceneListView };
