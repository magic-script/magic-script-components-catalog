import React from "react";

class SceneDropdownList extends React.Component {
  onSelectionChanged = event => {
    console.log("Received event: ", event);
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
            <dropdownListItem text={"Item very long, long"} />
            <dropdownListItem text={"Item long, long"} />
            <dropdownListItem text={"Item long"} />
            <dropdownListItem text={"Item"} />
            <dropdownListItem text={"Item short"} />
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
            <dropdownListItem text={"Item very long, long"} textSize={0.095} />
            <dropdownListItem text={"Item long, long"} textSize={0.095} />
            <dropdownListItem text={"Item long"} textSize={0.095} />
            <dropdownListItem text={"Item"} textSize={0.095} />
            <dropdownListItem text={"Item short"} textSize={0.095} />
          </dropdownList>
      </view>
    );
  }
}

export { SceneDropdownList };
