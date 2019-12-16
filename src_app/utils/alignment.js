import React from 'react';

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
};

class AlignmentGroup extends React.Component {
  static defaultProps = {
    title: 'Alignment:',
    position: [0, 0, 0],
    alignment: Alignment.topLeft,
    onAlignmentChanged: () => {},
  };

  onVerticalAlignmentChanged = (text) => {
    const elements = alignment.split('-');
    if (elements.length > 0) {
      const newAlignment = `${elements[0]}-${text}`;
      this.props.onAlignmentChanged(newAlignment);
    }
  }

  onHorizontalAlignmentChanged = (text) => {
    const elements = alignment.split('-');
    if (elements.length > 1) {
      const newAlignment = `${text}-${elements[1]}`;
      this.props.onAlignmentChanged(newAlignment);
    }
  }

  renderRadio(title, selectedText, onChanged) {
    const on = (title === selectedText);
    return (
      <toggle
        height={0.075}
        on={on}
        text={title}
        textSize={0.075}
        type={'radio'}
        onToggleChanged={() => onChanged(title)}
      />
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
      <view localPosition={this.props.localPosition}>
        <text textSize={0.08}>{this.props.title}</text>
        <gridLayout 
          debug
          alignment={'top-left'}
          defaultItemPadding={[0, 0.05, 0, 0]}
        >
          <toggleGroup>
            <linearLayout 
              debug={true}
              orientation={'vertical'}
            >
              {this.renderRadio('top', verticalAlignment, this.onVerticalAlignmentChanged)}
              {this.renderRadio('center', verticalAlignment, this.onVerticalAlignmentChanged)}
              {this.renderRadio('bottom', verticalAlignment, this.onVerticalAlignmentChanged)}
            </linearLayout>
          </toggleGroup>
          <toggleGroup>
            <linearLayout  
              debug={true}
              orientation={'vertical'}
            >
              {this.renderRadio('left', horizontalAlignment, this.onHorizontalAlignmentChanged)}
              {this.renderRadio('center', horizontalAlignment, this.onHorizontalAlignmentChanged)}
              {this.renderRadio('right', horizontalAlignment, this.onHorizontalAlignmentChanged)}
            </linearLayout>
          </toggleGroup>
        </gridLayout>
      </view>
    );
  }
}

export { Alignment, AlignmentGroup };
