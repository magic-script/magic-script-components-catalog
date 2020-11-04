import React from 'react';
import { Alignment, GridLayout, LinearLayout, Orientation, Text, Toggle, ToggleGroup, ToggleType } from 'magic-script-components';

class OptionGroup extends React.Component {

  constructor(props) {
    super(props);
    this.selectedOptionIndices = new Set();
  }
  state = { selectedOptionIndices: [] }

  renderRadio(option, index, selectedIndex) {
    const on = (index === selectedIndex);
    const type = this.props.multipleOptions ? ToggleType.checkbox : ToggleType.radio;
    return (
      <Toggle
        height={0.075}
        on={on}
        fontSize={0.075}
        key={index}
        type={type}
        onToggleChanged={(e) => {
          if (e.On) {
            this.selectedOptionIndices.add(index);
          } else {
            this.selectedOptionIndices.delete(index);
          }
          this.props.onOptionChanged(this.selectedOptionIndices); }
        }
      >{option}</Toggle>
    );
  }

  render() {
    const { selectedOptionIndex } = this.state;
    const { columns, options } = this.props;
    return (
      <LinearLayout 
        anchorPoint={this.props.anchorPoint}
        defaultItemPadding={[0, 0, 0.02, 0]}
        debug={this.props.debug}
        position={this.props.position}
      >
        <Text fontSize={0.08}>{this.props.title}</Text>
        <ToggleGroup allowMultipleOn={this.props.multipleOptions} allowAllOff={true}>
          <GridLayout columns={columns} defaultItemPadding={[0, 0, 0.01, 0]}>
            {options.map((option, index) => this.renderRadio(option, index, selectedOptionIndex))}
          </GridLayout>
        </ToggleGroup>
      </LinearLayout>
    );
  }
}

OptionGroup.defaultProps = {
  anchorPoint: Alignment.topCenter,
  columns: 1,
  debug: false,
  multipleOptions: false,
  onOptionChanged: () => {},
  options: [],
  title: 'Options:',
};

export { OptionGroup };
