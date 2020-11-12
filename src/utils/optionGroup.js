import React from 'react';
import { Alignment, GridLayout, LinearLayout, Orientation, Text, Toggle, ToggleGroup, ToggleType } from 'magic-script-components';

class OptionGroup extends React.Component {

  state = { selectedOptionIndices: new Set(this.props.initialSelectedOptionsIndices) }

  onToggleChanged = (on, index) => {
    const { multipleOptions } = this.props;
    var { selectedOptionIndices } = this.state;
    if (multipleOptions) {
      if (on) {
        selectedOptionIndices.add(index);
      } else {
        selectedOptionIndices.delete(index);
      }
    } else {
      selectedOptionIndices.clear();
      selectedOptionIndices.add(index);
    }

    this.setState({ selectedOptionIndices }, () => {
      this.props.onOptionChanged(Array.from(selectedOptionIndices)); 
    });
  }

  renderRadio(option, index, on) {
    const type = this.props.multipleOptions ? ToggleType.checkbox : ToggleType.radio;
    return (
      <Toggle
        height={0.075}
        on={on}
        fontSize={0.075}
        key={index}
        type={type}
        onToggleChanged={(e) => this.onToggleChanged(e.On, index)}
      >{option}</Toggle>
    );
  }

  render() {
    const { selectedOptionIndices } = this.state;
    const { columns, options } = this.props;
    return (
      <LinearLayout 
        anchorPoint={this.props.anchorPoint}
        defaultItemPadding={[0, 0, 0.02, 0]}
        debug={this.props.debug}
        position={this.props.position}
      >
        <Text fontSize={0.08}>{this.props.title}</Text>
        <ToggleGroup allowMultipleOn={this.props.multipleOptions} allowAllOff={this.props.multipleOptions}>
          <GridLayout columns={columns} defaultItemPadding={[0, 0, 0.01, 0]}>
            {options.map((option, index) => this.renderRadio(option, index, selectedOptionIndices.has(index)))}
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
  onOptionChanged: ([]) => {},
  options: [],
  initialSelectedOptionsIndices: [],
  title: 'Options:',
};

export { OptionGroup };
