import React from "react";
import { Alignment, AnchorPoint, Image, LinearLayout, ListView, ListViewItem, Orientation, Text, Toggle, View } from "magic-script-components";

class SceneListView extends React.Component {
  constructor(props) {
    super(props);
    this.resources = [
      require("../../assets/resources/DemoPicture1.jpg"),
      require("../../assets/resources/DemoPicture2.jpg"),
      require("../../assets/resources/DemoPicture3.jpg"),
      require("../../assets/resources/DemoPicture4.jpg"),
      require("../../assets/resources/DemoPicture5.jpg"),
    ];
    this.state = {
      listViewOrientation: Orientation.vertical,
      width: 0.0,
      height: 1.0,
    };
  }

  renderItems() {
    var items = [];
    for (var i = 0; i < 5; ++i) {
      items.push(
        <ListViewItem backgroundColor={[1, 0.9, 0, 1]} key={i}>
          <LinearLayout
            anchorPoint={AnchorPoint.centerCenter}
            defaultItemAlignment={Alignment.centerCenter}
            defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}
            orientation={Orientation.horizontal}
          >
            <LinearLayout
              anchorPoint={AnchorPoint.centerCenter}
              defaultItemAlignment={Alignment.centerCenter}
              defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}
              orientation={Orientation.horizontal}
            >
              <Image
                path={this.resources[i]}
                width={0.5}
                height={0.5}
                debug
              />
            </LinearLayout>
            <LinearLayout
              anchorPoint={AnchorPoint.centerCenter}
              defaultItemAlignment={Alignment.centerCenter}
              defaultItemPadding={[0.1, 0.1, 0.1, 0.1]}
              orientation={Orientation.horizontal}
            >
              <Text
                anchorPoint={AnchorPoint.centerCenter}
                textColor={"black"}
                fontSize={0.08}
              >
                {"Item no. " + i}
              </Text>
            </LinearLayout>
          </LinearLayout>
        </ListViewItem>
      );
    }
    return items;
  }

  toggleListViewOrientation = (event) => {
    const { listViewOrientation } = this.state;
    if (listViewOrientation === Orientation.vertical) {
      this.setState({
        listViewOrientation: Orientation.horizontal,
        width: 1.0,
        height: 0.0,
      });
    } else {
      this.setState({
        listViewOrientation: Orientation.vertical,
        width: 0.0,
        height: 1.0,
      });
    }
  };

  render() {
    const { listViewOrientation, height, width } = this.state;
    return (
      <View position={this.props.position}>
        <LinearLayout
          position={[0, 0.5, 0]}
          anchorPoint={AnchorPoint.centerCenter}
          defaultItemAlignment={Alignment.centerCenter}
          defaultItemPadding={[0.07, 0, 0.07, 0]}
          orientation={Orientation.vertical}
        >
          <Toggle
            anchorPoint={AnchorPoint.centerCenter}
            on={false}
            fontSize={0.05}
            textColor={"white"}
            height={0.075}
            onToggleChanged={this.toggleListViewOrientation}
          >
            List view orientation
          </Toggle>
          <ListView
            orientation={listViewOrientation}
            defaultItemAlignment={Alignment.centerCenter}
            defaultItemPadding={[0, 0.05, 0, 0.0]}
            height={height}
            width={width}
          >
            {this.renderItems()}
          </ListView>
        </LinearLayout>
      </View>
    );
  }
}

export { SceneListView };
