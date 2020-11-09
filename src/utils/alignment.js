import React from 'react';
import { Alignment, GridLayout, LinearLayout, Orientation, Text, Toggle, ToggleGroup, ToggleType } from 'magic-script-components';

const AlignmentList = {
  all: [
    Alignment.topLeft, Alignment.topCenter, Alignment.topRight,
    Alignment.centerLeft, Alignment.centerCenter, Alignment.centerRight,
    Alignment.bottomLeft, Alignment.bottomCenter, Alignment.bottomRight
  ],
  next: (alignment) => {
    const alignments = AlignmentList.all;
    const index = alignments.indexOf(alignment);
    return alignments[(index + 1) % alignments.length];
  },
  prev: (alignment) => {
    const alignments = AlignmentList.all;
    const index = alignments.indexOf(alignment);
    return alignments[(index + alignments.length - 1) % alignments.length];
  }
}

class AlignmentGroup extends React.Component {
  onVerticalAlignmentChanged = (text) => {
    const elements = this.props.alignment.split('-');
    if (elements.length > 0) {
      const newAlignment = `${text}-${elements[1]}`;
      this.props.onAlignmentChanged(newAlignment);
    }
  }

  onHorizontalAlignmentChanged = (text) => {
    const elements = this.props.alignment.split('-');
    if (elements.length > 1) {
      const newAlignment = `${elements[0]}-${text}`;
      this.props.onAlignmentChanged(newAlignment);
    }
  }

  renderRadio(title, selectedText, onChanged) {
    const on = (title === selectedText);
    return (
      <Toggle
        height={0.075}
        on={on}
        fontSize={0.075}
        type={ToggleType.radio}
        onToggleChanged={(e) => { 
          if (e.On) {  onChanged(title); }
        }}
      >{title}</Toggle>
    );
  }

  render() {
    const { alignment } = this.props;
    const elements = alignment.split('-');
    if (elements.length != 2) {
      return null;
    }
    const verticalAlignment = (elements.length > 0) ? elements[0] : '';
    const horizontalAlignment = (elements.length > 1) ? elements[1] : '';
    return (
      <LinearLayout 
        anchorPoint={this.props.anchorPoint}
        defaultItemPadding={[0, 0, 0.02, 0]}
        debug={this.props.debug}
        position={this.props.position}
      >
        <Text fontSize={0.08}>{this.props.title}</Text>
        <GridLayout defaultItemPadding={[0, 0.09, 0, 0]}>
          <ToggleGroup>
            <LinearLayout orientation={Orientation.vertical}>
              {this.renderRadio('top', verticalAlignment, this.onVerticalAlignmentChanged)}
              {this.renderRadio('center', verticalAlignment, this.onVerticalAlignmentChanged)}
              {this.renderRadio('bottom', verticalAlignment, this.onVerticalAlignmentChanged)}
            </LinearLayout>
          </ToggleGroup>
          <ToggleGroup>
            <LinearLayout orientation={Orientation.vertical}>
              {this.renderRadio('left', horizontalAlignment, this.onHorizontalAlignmentChanged)}
              {this.renderRadio('center', horizontalAlignment, this.onHorizontalAlignmentChanged)}
              {this.renderRadio('right', horizontalAlignment, this.onHorizontalAlignmentChanged)}
            </LinearLayout>
          </ToggleGroup>
        </GridLayout>
      </LinearLayout>
    );
  }
}

AlignmentGroup.defaultProps = {
  alignment: Alignment.topLeft,
  anchorPoint: Alignment.topCenter,
  debug: false,
  title: 'Alignment:',
  position: [0, 0, 0],
  onAlignmentChanged: () => {},
};

export { AlignmentGroup, AlignmentList };
