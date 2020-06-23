import React from 'react';
import {  View, Text, Toggle, ToggleGroup,GridLayout, LinearLayout } from 'magic-script-components';


const Alignment = {
  topLeft: 'top-left',
  topCenter: 'top-center',
  topRight: 'top-right',
  centerLeft: 'center-left',
  centerCenter: 'center-center',
  centerRight: 'center-right',
  bottomLeft: 'bottom-left',
  bottomCenter: 'bottom-center',
  bottomRight: 'bottom-right',
  next: (alignment) => {
    const index = AlignmentList.indexOf(alignment);
    return AlignmentList[(index + 1) % AlignmentList.length];
  },
  prev: (alignment) => {
    const index = AlignmentList.indexOf(alignment);
    return AlignmentList[(index + AlignmentList.length - 1) % AlignmentList.length];
  }
};

const AlignmentList = [
  Alignment.topLeft, Alignment.topCenter, Alignment.topRight,
  Alignment.centerLeft, Alignment.centerCenter, Alignment.centerRight,
  Alignment.bottomLeft, Alignment.bottomCenter, Alignment.bottomRight
];

class AlignmentGroup extends React.Component {
  static defaultProps = {
    title: 'Alignment:',
    position: [0, 0, 0],
    alignment: Alignment.topLeft,
    onAlignmentChanged: () => {},
  };

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
        type={'radio'}
        onToggleChanged={(e) => { 
          if (e.On) { 
            onChanged(title); 
          }
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
      <View position={this.props.position}>
        <Text position={[0, 0.13, 0]} anchorPoint={'bottom-center'} fontSize={0.08}>{this.props.title}</Text>
        <GridLayout defaultItemPadding={[0, 0.09, 0, 0]}>
          <ToggleGroup>
            <LinearLayout orientation={'vertical'}>
              {this.renderRadio('top', verticalAlignment, this.onVerticalAlignmentChanged)}
              {this.renderRadio('center', verticalAlignment, this.onVerticalAlignmentChanged)}
              {this.renderRadio('bottom', verticalAlignment, this.onVerticalAlignmentChanged)}
            </LinearLayout>
          </ToggleGroup>
          <ToggleGroup>
            <LinearLayout orientation={'vertical'}>
              {this.renderRadio('left', horizontalAlignment, this.onHorizontalAlignmentChanged)}
              {this.renderRadio('center', horizontalAlignment, this.onHorizontalAlignmentChanged)}
              {this.renderRadio('right', horizontalAlignment, this.onHorizontalAlignmentChanged)}
            </LinearLayout>
          </ToggleGroup>
        </GridLayout>
      </View>
    );
  }
}

export { Alignment, AlignmentGroup };
