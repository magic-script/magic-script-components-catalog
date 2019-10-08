import React from "react";

class SceneSlider extends React.Component {
  render() {
    return (
      <view localPosition={this.props.localPosition}>
        <gridLayout
          alignment={"top-center"}
          columns={1}
          defaultItemPadding={[0.1, 0, 0, 0]}
        >
          <slider />
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
