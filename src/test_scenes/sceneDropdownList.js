import React from 'react';
import { View, Text, DropdownList, DropdownListItem } from 'magic-script-components';

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
      <View position={this.props.position}>
          <Text alignment={'center-center'} fontSize={0.08} position={[0.0, 1.0, 0.0]}>
            Default dropdownList
          </Text>
          <DropdownList
            text={'DropDownList'}
            fontSize={0.08}
            onSelectionChanged={this.onSelectionChanged}
            position={[0.0, 0.87, 0.0]}
          >
            <DropdownListItem label={'Antidisestablishmentarianism'} />
            <DropdownListItem label={'Incomprehensibilities'} />
            <DropdownListItem label={'Acknowledgement'} />
            <DropdownListItem label={'Enuoia'} />
            <DropdownListItem label={'Cat'} />
          </DropdownList>

          <Text alignment={'center-center'} fontSize={0.08} position={[0.0, 0.25, 0.0]}>
            20 letter words
          </Text>
          <DropdownList
            text={selectedItemsCount > 0 ? `${selectedItemsCount} selected` : 'Select words'}
            onSelectionChanged={this.onMultiselectionChanged}
            fontSize={0.125}
            position={[0.0, 0.05, 0.0]}
            maxCharacterLimit={15}
            listMaxHeight={0.5}
            multiSelect={true}
          >
            {words.map((word, index) => <DropdownListItem key={index} id={index} label={word} />)}
          </DropdownList>
      </View>
    );
  }
}

export { SceneDropdownList };
