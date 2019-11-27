import React from "react";
import { ToggleGroup } from "magic-script-components";

class SceneToggleGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allowMultipleOn: false,
      allowAllOff: false,
      innerLayout: true
    };
  }

  onToggleChanged_allowMultipleOn = event => {
    console.log("onChanged event received: ", event);
    const allowMultipleOn = this.state.allowMultipleOn;
    this.setState({ allowMultipleOn: !allowMultipleOn });
  };

  onToggleChanged_allowAllOff = event => {
    console.log("onChanged event received: ", event);
    const allowAllOff = this.state.allowAllOff;
    this.setState({ allowAllOff: !allowAllOff });
  };

  onToggleChanged_innerLayout = event => {
    console.log("onChanged event received: ", event);
    const innerLayout = this.state.innerLayout;
    this.setState({ innerLayout: !innerLayout });
  };

  onToggleChanged(param) {
    return () => {
      this.setState(param);
    };
  }

  render() {
    const { allowMultipleOn, allowAllOff, innerLayout } = this.state;
    return (
      <view localPosition={this.props.localPosition}>
        <linearLayout orientation={"vertical"} alignment={"left-center"}>
          <linearLayout
            alignment={"center-center"}
            orientation={"horizontal"}
            defaultItemPadding={[0.025, 0.025, 0.025, 0.025]}
          >
            <toggle
              on={allowMultipleOn}
              height={0.05}
              textSize={0.05}
              onToggleChanged={this.onToggleChanged_allowMultipleOn}
            >
              allowMultipleOn
            </toggle>
            <toggle
              on={allowAllOff}
              height={0.05}
              textSize={0.05}
              onToggleChanged={this.onToggleChanged_allowAllOff}
            >
              allowAllOff
            </toggle>
            <toggle
              on={innerLayout}
              height={0.05}
              textSize={0.05}
              onToggleChanged={this.onToggleChanged_innerLayout}
            >
              innerLayout
            </toggle>
          </linearLayout>
          {innerLayout && (
            <linearLayout alignment={"center-center"} >
              <text textSize={0.06} textAlignment={"left"}>Toggles layouted "by linearLayout"</text>
              <toggleGroup
                allowMultipleOn={allowMultipleOn}
                allowAllOff={allowAllOff}
              >
                <linearLayout
                  alignment={"center-center"}
                  orientation={"vertical"}
                >
                  <toggle
                    type={"radio"}
                    alignment={"center-center"}
                    on={false}
                    height={0.075}
                    textSize={0.075}
                  >
                    Element 1
                  </toggle>
                  <toggle
                    type={"radio"}
                    alignment={"center-center"}
                    on={false}
                    height={0.075}
                    textSize={0.075}
                  >
                    Element 2
                  </toggle>
                  <toggle
                    type={"radio"}
                    alignment={"center-center"}
                    on={false}
                    height={0.075}
                    textSize={0.075}
                  >
                    Element 3
                  </toggle>
                </linearLayout>
              </toggleGroup>
            </linearLayout>
          )}
          {!innerLayout && (
            <linearLayout>
              <text textSize={0.06}>
                Toggles layouted "by hand" (with localPosition)
              </text>
              <toggleGroup
                allowMultipleOn={allowMultipleOn}
                allowAllOff={allowAllOff}
              >
                <toggle
                  type={"radio"}
                  on={false}
                  height={0.075}
                  textSize={0.075}
                  localPosition={[-0.125, -0.125, 0.0]}
                >
                  Item 1
                </toggle>
                <toggle
                  type={"radio"}
                  on={false}
                  height={0.075}
                  textSize={0.075}
                  localPosition={[0, -0.25, 0.0]}
                >
                  Item 2
                </toggle>
                <toggle
                  type={"radio"}
                  on={false}
                  height={0.075}
                  textSize={0.075}
                  localPosition={[0.125, -0.375, 0.0]}
                >
                  Item 3
                </toggle>
              </toggleGroup>
            </linearLayout>
          )}
        </linearLayout>
      </view>
    );
  }
}

export { SceneToggleGroup };
