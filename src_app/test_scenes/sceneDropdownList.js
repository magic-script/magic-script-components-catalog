import React from "react";
import { DropdownList, DropdownListItem } from "magic-script-components";

class SceneDropdownList extends React.Component {
  onSelectionChanged = event => {
    console.log("Received evet: ", event);
  };

  render() {
    return (
      <view localPosition={this.props.localPosition}>
          <text alignment={"center-center"} textSize={0.05} localPosition={[0.0, 1.0, 0.0]}>
            Default dropdownList
          </text>
          <dropdownList
            text={"DropDownList"}
            onSelectionChanged={this.onSelectionChanged}
            localPosition={[0.0, 0.90, 0.0]}
          >
            <dropdownListItem label={"Item very long, long"} debug={true}/>
            <dropdownListItem label={"Item long, long"} debug={true}/>
            <dropdownListItem label={"Item long"} debug={true}/>
            <dropdownListItem label={"Item"} debug={true}/>
            <dropdownListItem label={"Item short"} debug={true}/>
          </dropdownList>

          <text alignment={"center-center"} textSize={0.05} localPosition={[0.0, 0.45, 0.0]}>
            Custom dropdownList (text size)
          </text>
          <dropdownList
            text={"DropDownList"}
            onSelectionChanged={this.onSelectionChanged}
            textSize={0.125}
            localPosition={[0.0, 0.30, 0.0]}
          >
            <dropdownListItem label={"Item very long, long"} textSize={0.095} />
            <dropdownListItem label={"Item long, long"} textSize={0.095} />
            <dropdownListItem label={"Item long"} textSize={0.095} />
            <dropdownListItem label={"Item"} textSize={0.095} />
            <dropdownListItem label={"Item short"} textSize={0.095} />
          </dropdownList>
      </view>
    );
  }
}

export { SceneDropdownList };
