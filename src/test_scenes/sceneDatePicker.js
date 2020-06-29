import React from "react";
import { View, LinearLayout, DatePicker } from "magic-script-components";

class SceneDatePicker extends React.Component {
  onDateChanged = event => {
    // event.Date, event.DateString
    console.log("onDateChanged event received: ", event);
  };

  onDateConfirmed = event => {
    // event.Date, event.DateString
    console.log("onDateConfirmed event received: ", event);
  };

  render() {
    return (
      <View position={this.props.position}>
        <LinearLayout
          position={[0, 0.5, 0]}
          anchorPoint={"center-center"}
          columns={1}
          defaultItemAlignment={"center-left"}
          defaultItemPadding={[0.07, 0, 0.07, 0]}
          orientation={"vertical"}
        >
          <DatePicker
            label={"Default date format (MM/DD/YYYY)"}
            onDateChanged={this.onDateChanged}
            onDateConfirmed={this.onDateConfirmed}
          />

          <DatePicker
            label={"Custom date format (DD/MM/YYYY)"}
            onDateChanged={this.onDateChanged}
            onDateConfirmed={this.onDateConfirmed}
            dateFormat={"DD/MM/YYYY"}
          />
          <DatePicker
            label={"Custom date format (MM/YYYY)"}
            onDateChanged={this.onDateChanged}
            onDateConfirmed={this.onDateConfirmed}
            dateFormat={"MM/YYYY"}
          />
          <DatePicker
            label={"Custom date format (DD/YYYY)"}
            onDateChanged={this.onDateChanged}
            onDateConfirmed={this.onDateConfirmed}
            dateFormat={"DD/YYYY"}
          />
        </LinearLayout>
      </View>
    );
  }
}

export { SceneDatePicker };
