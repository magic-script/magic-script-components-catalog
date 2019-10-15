import React from "react";

class SceneSlider extends React.Component {
  render() {
    return (
      <view localPosition={this.props.localPosition}>
        <gridLayout
          alignment={"top-center"}
          columns={1}
          defaultItemPadding={[0.05, 0, 0, 0]}
          localPosition={[0.0, 1.0, 0.0]}
        >
          <text alignment={"center-center"} textSize={0.05} >
            Default slider
          </text>
          <slider width={1.0}/>
          <text alignment={"center-center"} textSize={0.05}>
            User configured sliders
          </text>
          <slider
            value={5.2}
            min={0}
            max={10}
            minLabel={"-"}
            maxLabel={"+"}
            width={0.95}
            height={0.06}
          />
          <slider
            value={4.9}
            min={0}
            max={12}
            minLabel={"min"}
            maxLabel={"max"}
            width={0.75}
            height={0.08}
          />
        </gridLayout>
      </view>
    );
  }
}

export { SceneSlider };
