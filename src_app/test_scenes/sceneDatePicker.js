import React from "react";

class SceneDatePicker extends React.Component {
  onDateChanged = event => {
    console.log("Received evet: ", event);
  };

  onDateConfirmed = event => {
    console.log("Received evet: ", event);
  };

  render() {
    return (
      <view localPosition={this.props.localPosition}>
        <gridLayout
          alignment={"top-center"}
          columns={1}
          defaultItemPadding={[0.15, 0, 0, 0]}
          localPosition={[0.0, 1.0, 0.0]}
        >
          <datePicker
            label={"Default date format (MM/DD/YYYY)"}
            onDateChanged={this.onDateChanged}
            onDateConfirmed={this.onDateConfirmed}
            debug={true}
          />

                    <datePicker
            label={"Custom date format (DD/MM/YYYY)"}
            onDateChanged={this.onDateChanged}
            onDateConfirmed={this.onDateConfirmed}
            dateFormat={"DD/MM/YYYY"}
            debug={true}
          />
                                        <datePicker
            label={"Custom date format (MM/YYYY)"}
            onDateChanged={this.onDateChanged}
            onDateConfirmed={this.onDateConfirmed}
            dateFormat={"MM/YYYY"}
            debug={true}
          />
                    <datePicker
            label={"Custom date format (DD/YYYY)"}
            onDateChanged={this.onDateChanged}
            onDateConfirmed={this.onDateConfirmed}
            dateFormat={"DD/YYYY"}
            debug={true}
          />
        </gridLayout>
      </view>
    );
  }
}

export { SceneDatePicker };
