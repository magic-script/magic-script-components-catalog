import React from 'react';
import { Alignment, AnchorPoint, DropdownList, DropdownListItem, LinearLayout, Text } from 'magic-script-components';

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
      <LinearLayout 
        anchorPoint={AnchorPoint.bottomCenter}
        defaultItemAlignment={Alignment.centerCenter}
        defaultItemPadding={[0, 0, 0.05, 0]}
        itemPadding={[
          { index: 1, padding: [0, 0, 0.2, 0] },
        ]}
        position={this.props.position}
      >
          <Text fontSize={0.08}>Default dropdownList</Text>
          <DropdownList
            text={'DropDownList'}
            fontSize={0.08}
            onSelectionChanged={this.onSelectionChanged}
          >
            <DropdownListItem label={'Antidisestablishmentarianism'} />
            <DropdownListItem label={'Incomprehensibilities'} />
            <DropdownListItem label={'Acknowledgement'} />
            <DropdownListItem label={'Enuoia'} />
            <DropdownListItem label={'Cat'} />
          </DropdownList>

          <Text fontSize={0.08}>20 letter words</Text>
          <DropdownList
            text={selectedItemsCount > 0 ? `${selectedItemsCount} selected` : 'Select words'}
            onSelectionChanged={this.onMultiselectionChanged}
            fontSize={0.125}
            maxCharacterLimit={15}
            listMaxHeight={0.5}
            multiSelect={true}
          >
            {words.map((word, index) => <DropdownListItem key={index} id={index} label={word} />)}
          </DropdownList>
      </LinearLayout>
    );
  }
}

export { SceneDropdownList };
