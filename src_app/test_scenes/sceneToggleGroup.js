import React from "react";

class SceneToggleGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allowMultipleOn: false,
      allowAllOff: false,
      innerLayout: true
    };
  }

  onToggleHandler(event, param) {
    console.log("onChanged event received: ", event);
    this.setState(param);
  }

  renderRadio({ title = '', localPosition = [0,0,0] }) {
    return (
      <toggle
        height={0.075}
        localPosition={localPosition}
        text={title}
        textSize={0.075}
        type={'radio'}
        onToggleChanged={ e => console.log("onChanged event received: ", e) }
      />
    );
  }

  renderToggle({ title = '', on = false, onToggleChanged }) {
    return (
      <toggle
        height={0.05}
        on={on}
        text={title}
        textSize={0.05}
        onToggleChanged={onToggleChanged}
      />
    );
  }

  renderSettingsPanel() {
    const { allowMultipleOn, allowAllOff, innerLayout } = this.state;
    return (
      <linearLayout
        defaultItemAlignment={'center-right'}
        defaultItemPadding={[0.025, 0.0, 0.025, 0.0]}
        orientation={"vertical"}
      >
        {this.renderToggle({ title: 'Multiple On', on: allowMultipleOn, onToggleChanged: (e) => this.onToggleHandler(e, { allowMultipleOn: !this.state.allowMultipleOn }) })}
        {this.renderToggle({ title: 'All Off', on: allowAllOff, onToggleChanged: (e) => this.onToggleHandler(e, { allowAllOff: !this.state.allowAllOff }) })}
        {this.renderToggle({ title: 'Use layout', on: innerLayout, onToggleChanged: (e) => this.onToggleHandler(e, { innerLayout: !this.state.innerLayout }) })}
      </linearLayout>
    );
  }

  renderPresentationPanel() {
    const { allowMultipleOn, allowAllOff, innerLayout } = this.state;

    const title = innerLayout ? 'Toggles embedded in linearLayout' : 'Toggles embedded in group';
    return (
      <linearLayout 
        defaultItemAlignment={'center-left'}
        orientation={"vertical"}
      >
        <text text={title} textAlignment={"left"} textSize={0.06} />
        {innerLayout && (
          <toggleGroup allowMultipleOn={allowMultipleOn} allowAllOff={allowAllOff} debug={true}>
            <linearLayout 
              alignment={'center-center'} 
              debug={true}
              defaultItemPadding={[0.01, 0.0, 0.01, 0.01]}
              orientation={"vertical"}
            >
              {this.renderRadio({ title: "Element 1" })}
              {this.renderRadio({ title: "Element 2" })}
              {this.renderRadio({ title: "Element 3" })}
            </linearLayout>
          </toggleGroup>
        )}
        {!innerLayout && (
          <toggleGroup allowMultipleOn={allowMultipleOn} allowAllOff={allowAllOff} debug={true}>
            {this.renderRadio({ title: "Item 1", localPosition: [-0.125, -0.125, 0.0] })}
            {this.renderRadio({ title: "Item 2", localPosition: [0, -0.25, 0.0] })}
            {this.renderRadio({ title: "Item 3", localPosition: [0.125, -0.375, 0.0] })}
          </toggleGroup>
        )}
      </linearLayout>
    );
  }

  render() {
    return (
      <view localPosition={this.props.localPosition}>
        <linearLayout 
          alignment={"top-center"} 
          defaultItemAlignment={'center-right'}
          defaultItemPadding={[0.025, 0.0, 0.025, 0.0]}
          orientation={"vertical"} 
          debug={true}
        >
          {this.renderSettingsPanel()}
          {this.renderPresentationPanel()}
        </linearLayout>
      </view>
    );
  }
}

export { SceneToggleGroup };
