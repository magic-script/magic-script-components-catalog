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

  onToggleHandler(event, param) {
    console.log("onChanged event received: ", event);
    this.setState(param);
  }

  renderToggle({
    onValue = false,
    height = 0.05,
    localPosition = [],
    textSize = 0.05,
    title = ""
  }) {
    return (
      <toggle
        type={"radio"}
        on={onValue}
        height={height}
        localPosition={localPosition}
        textSize={textSize}
        onToggleChanged={event => {
          console.log("onChanged event received: ", event);
        }}
      >
        {title}
      </toggle>
    );
  }

  render() {
    const { allowMultipleOn, allowAllOff, innerLayout } = this.state;
    return (
      <view localPosition={this.props.localPosition}>
        <linearLayout orientation={"vertical"} alignment={"center-left"}>
          <linearLayout
            alignment={"center-center"}
            orientation={"horizontal"}
            defaultItemPadding={[0.025, 0.025, 0.025, 0.025]}
          >
            <toggle
              on={allowMultipleOn}
              height={0.05}
              textSize={0.05}
              onToggleChanged={e =>
                this.onToggleHandler(e, {
                  allowMultipleOn: !this.state.allowMultipleOn
                })
              }
            >
              allowMultipleOn
            </toggle>
            <toggle
              on={allowAllOff}
              height={0.05}
              textSize={0.05}
              onToggleChanged={e =>
                this.onToggleHandler(e, {
                  allowAllOff: !this.state.allowAllOff
                })
              }
            >
              allowAllOff
            </toggle>
            <toggle
              on={innerLayout}
              height={0.05}
              textSize={0.05}
              onToggleChanged={e =>
                this.onToggleHandler(e, {
                  innerLayout: !this.state.innerLayout
                })
              }
            >
              innerLayout
            </toggle>
          </linearLayout>
          {innerLayout && (
            <linearLayout alignment={"center-center"}>
              <text textSize={0.06} textAlignment={"left"}>
                Toggles layouted "by linearLayout"
              </text>
              <toggleGroup
                allowMultipleOn={allowMultipleOn}
                allowAllOff={allowAllOff}
              >
                <linearLayout
                  alignment={"center-center"}
                  orientation={"vertical"}
                >
                  {this.renderToggle({
                    title: "Element 1",
                    textSize: 0.075,
                    height: 0.075
                  })}
                  {this.renderToggle({
                    title: "Element 2",
                    textSize: 0.075,
                    height: 0.075
                  })}
                  {this.renderToggle({
                    title: "Element 3",
                    textSize: 0.075,
                    height: 0.075
                  })}
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
                {this.renderToggle({
                  title: "Item 1",
                  textSize: 0.075,
                  height: 0.075,
                  localPosition: [-0.125, -0.125, 0.0]
                })}
                {this.renderToggle({
                  title: "Item 2",
                  textSize: 0.075,
                  height: 0.075,
                  localPosition: [0, -0.25, 0.0]
                })}
                {this.renderToggle({
                  title: "Item 3",
                  textSize: 0.075,
                  height: 0.075,
                  localPosition: [0.125, -0.375, 0.0]
                })}
              </toggleGroup>
            </linearLayout>
          )}
        </linearLayout>
      </view>
    );
  }
}

export { SceneToggleGroup };
