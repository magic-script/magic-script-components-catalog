import React from "react";
import { Alignment, AnchorPoint, DateFormat, DatePicker, LinearLayout, Orientation, View } from "magic-script-components";

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
          anchorPoint={AnchorPoint.centerCenter}
          columns={1}
          defaultItemAlignment={Alignment.centerLeft}
          defaultItemPadding={[0.07, 0, 0.07, 0]}
          orientation={Orientation.vertical}
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
            dateFormat={DateFormat.DDMMYYYY}
          />
          <DatePicker
            label={"Custom date format (MM/YYYY)"}
            onDateChanged={this.onDateChanged}
            onDateConfirmed={this.onDateConfirmed}
            dateFormat={DateFormat.MMYYYY}
          />
          <DatePicker
            label={"Custom date format (DD/YYYY)"}
            onDateChanged={this.onDateChanged}
            onDateConfirmed={this.onDateConfirmed}
            dateFormat={DateFormat.DDYYYY}
          />
        </LinearLayout>
      </View>
    );
  }
}

export { SceneDatePicker };
