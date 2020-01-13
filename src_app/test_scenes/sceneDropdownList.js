import React from 'react';

class SceneDropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItemsCount: 0 }
  }
  onSelectionChanged = event => {
    console.log('Received event: ', event);
  };

  onMultiselectionChanged = event => {
    this.setState({ selectedItemsCount: event.SelectedItems.length})
  };

  render() {
    const { selectedItemsCount = 0 } = this.state;
    const words = [
      'Abetalipoproteinemia',
      'Compartmentalization',
      'Tetrahydrocannabinol',
      'Semiautobiographical',
      'Internationalization',
      'Compartmentalisation',
      'Electrogalvanization',
      'Counterrevolutionary',
      'Antiestablishmentism',
      'Histoincompatibility',
      'Electrocardiographic',
      'Keratoconjunctivitis',
      'Nephroangiosclerosis',
      'Philosophicojuristic',
      'Lipochondrodystrophy'
    ];
    return (
      <view localPosition={this.props.localPosition}>
          <text alignment={'center-center'} textSize={0.08} localPosition={[0.0, 1.0, 0.0]}>
            Default dropdownList
          </text>
          <dropdownList
            text={'DropDownList'}
            onSelectionChanged={this.onSelectionChanged}
            localPosition={[0.0, 0.87, 0.0]}
          >
            <dropdownListItem label={'Antidisestablishmentarianism'} />
            <dropdownListItem label={'Incomprehensibilities'} />
            <dropdownListItem label={'Acknowledgement'} />
            <dropdownListItem label={'Enuoia'} />
            <dropdownListItem label={'Cat'} />
          </dropdownList>

          <text alignment={'center-center'} textSize={0.08} localPosition={[0.0, 0.25, 0.0]}>
            20 letter words
          </text>
          <dropdownList
            text={selectedItemsCount > 0 ? `${selectedItemsCount} selected` : 'Select words'}
            onSelectionChanged={this.onMultiselectionChanged}
            textSize={0.125}
            localPosition={[0.0, 0.05, 0.0]}
            maxCharacterLimit={15}
            maxHeight={0.5}
            multiSelectMode={true}
          >
            {words.map((word, index) => <dropdownListItem key={index} id={index} label={word} />)}
          </dropdownList>
      </view>
    );
  }
}

export { SceneDropdownList };
