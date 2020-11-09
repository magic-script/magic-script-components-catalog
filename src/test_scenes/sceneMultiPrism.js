import React from "react";
import { Alignment, AnchorPoint, Button, LinearLayout, Prism, TextAlign } from "magic-script-components";

class SceneMultiPrism extends React.Component {
  onAddPrism = () => {
    const createPrismFunc = (text, index) => {
      const columns = 3;
      const rows = 4;
      const origin = { x: 0.75, y: 0.5, z: 0 };
      const size = { width: 0.2, height: 0.2, depth: 0.1 };
      const gap = 0.05;
      const idx = {
        column: index % columns,
        row: Math.floor((index % (columns * rows)) / columns),
        layer: Math.floor(index / (columns * rows)),
      };
      const x = origin.x + idx.column * (size.width + gap);
      const y = origin.y - idx.row * (size.height + gap);
      const z = origin.z - idx.layer * (size.depth + gap);
      return (
        <Prism
          key={index}
          onDestroy={() => this.props.onPrismAction(index)}
          position={[x, y, z]}
          size={[size.width, size.height, size.depth]}
          debug
        >
          <Button
            position={[0, 0, 0]}
            alignment={Alignment.centerCenter}
            onClick={() => this.props.onPrismAction(index)}
            textAlign={TextAlign.center}
            fontSize={0.03}
          >
            {text}
          </Button>
        </Prism>
      );
    };

    this.props.onPrismAction(createPrismFunc);
  };

  onDeletePrism = () => {
    this.props.onPrismAction();
  };

  render() {
    const buttonProps = {
      alignment: Alignment.centerCenter,
      fontSize: 0.08,
    };
    return (
      <LinearLayout 
        anchorPoint={AnchorPoint.bottomCenter}
        defaultItemAlignment={Alignment.centerCenter}
        defaultItemPadding={[0, 0, 0.1, 0]}
      >
        <Button {...buttonProps} onClick={this.onAddPrism}>Add prism</Button>
        <Button {...buttonProps} onClick={this.onDeletePrism}>Add prism</Button>
      </LinearLayout>
    );
  }
}

export { SceneMultiPrism };
