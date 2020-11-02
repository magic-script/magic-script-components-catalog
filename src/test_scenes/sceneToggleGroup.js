import React from 'react';
import { Toggle, LinearLayout, ToggleGroup, Text, View } from 'magic-script-components';

class SceneToggleGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allowMultipleOn: false,
      allowAllOff: false,
      innerLayout: true
    };
  }

  renderRadio({ title = '', position = [0,0,0] }) {
    return (
      <Toggle
        height={0.075}
        position={position}
        fontSize={0.075}
        type={'radio'}
        onToggleChanged={(e) => console.log(`${title}.onToggleChanged event received: ${e.On}`)}
      >{title}</Toggle>
    );
  }

  renderToggle(title, key) {
    const on = this.state[key];
    return (
      <Toggle
        height={0.05}
        on={on}
        fontSize={0.05}
        onToggleChanged={() => this.setState({ [key]: !this.state[key] })}
      >{title}</Toggle>
    );
  }

  renderSettingsPanel() {
    return (
      <LinearLayout
        defaultItemAlignment={'center-right'}
        defaultItemPadding={[0.025, 0.0, 0.025, 0.0]}
        orientation={'vertical'}
      >
        {this.renderToggle('Multiple On', 'allowMultipleOn')}
        {this.renderToggle('All Off', 'allowAllOff')}
        {this.renderToggle('Use layout', 'innerLayout')}
      </LinearLayout>
    );
  }

  renderPresentationPanel() {
    const { allowMultipleOn, allowAllOff, innerLayout } = this.state;
    const title = innerLayout ? 'Toggles embedded in linearLayout' : 'Toggles embedded in group';
    return (
      <LinearLayout 
        defaultItemAlignment={'center-left'}
        orientation={'vertical'}
        width={0.8}
      >
        <Text textAlignment={'left'} fontSize={0.06} >{title}</Text>
        {innerLayout && (
          <ToggleGroup allowMultipleOn={allowMultipleOn} allowAllOff={allowAllOff}>
            <LinearLayout 
              anchorPoint={'center-center'} 
              defaultItemPadding={[0.01, 0.0, 0.01, 0.01]}
              orientation={'vertical'}
            >
              {this.renderRadio({ title: 'Element 1' })}
              {this.renderRadio({ title: 'Element 2' })}
              {this.renderRadio({ title: 'Element 3' })}
            </LinearLayout>
          </ToggleGroup>
        )}
        {!innerLayout && (
          <ToggleGroup allowMultipleOn={allowMultipleOn} allowAllOff={allowAllOff}>
            {this.renderRadio({ title: 'Item 1', position: [-0.125, -0.125, 0.0] })}
            {this.renderRadio({ title: 'Item 2', position: [0, -0.25, 0.0] })}
            {this.renderRadio({ title: 'Item 3', position: [0.125, -0.375, 0.0] })}
          </ToggleGroup>
        )}
      </LinearLayout>
    );
  }

  render() {
    return (
      <View position={this.props.position}>
        <LinearLayout 
          anchorPoint={'top-center'} 
          defaultItemAlignment={'center-right'}
          defaultItemPadding={[0.025, 0.0, 0.025, 0.0]}
          orientation={'vertical'} 
        >
          {this.renderSettingsPanel()}
          {this.renderPresentationPanel()}
        </LinearLayout>
      </View>
    );
  }
}

export { SceneToggleGroup };
