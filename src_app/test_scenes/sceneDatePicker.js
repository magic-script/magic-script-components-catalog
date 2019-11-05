import React from "react";

class SceneDatePicker extends React.Component {
  onDateChanged = event => {
    console.log("onDateChanged event received: ", event);
  };

  onDateConfirmed = event => {
    console.log("onDateConfirmed event received: ", event);
  };

  render() {
    return (
      <view localPosition={this.props.localPosition}>
        <linearLayout
          localPosition={[0, 0.5, 0]}
          alignment={"center-center"}
          columns={1}
          defaultItemAlignment={"center-center"}
          defaultItemPadding={[0.07, 0, 0.07, 0]}
          orientation={"vertical"}
        >
          <datePicker
            label={"Default date format (MM/DD/YYYY)"}
            onDateChanged={this.onDateChanged}
            onDateConfirmed={this.onDateConfirmed}
          />

          <datePicker
            label={"Custom date format (DD/MM/YYYY)"}
            onDateChanged={this.onDateChanged}
            onDateConfirmed={this.onDateConfirmed}
            dateFormat={"DD/MM/YYYY"}
          />
          <datePicker
            label={"Custom date format (MM/YYYY)"}
            onDateChanged={this.onDateChanged}
            onDateConfirmed={this.onDateConfirmed}
            dateFormat={"MM/YYYY"}
          />
          <datePicker
            label={"Custom date format (DD/YYYY)"}
            onDateChanged={this.onDateChanged}
            onDateConfirmed={this.onDateConfirmed}
            dateFormat={"DD/YYYY"}
          />
        </linearLayout>
      </view>
    );
  }
}

export { SceneDatePicker };
