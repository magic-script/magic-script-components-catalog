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

  renderToggle({ onValue = false, height = 0.05, localPosition = [0,0,0], textSize = 0.05, title = "" }) {
    return (
      <toggle
        type={"radio"}
        on={onValue}
        height={height}
        localPosition={localPosition}
        textSize={textSize}
        onToggleChanged={ e => console.log("onChanged event received: ", e) }
      >
        {title}
      </toggle>
    );
  }

  renderSettingsPanel() {
    const { allowMultipleOn, allowAllOff, innerLayout } = this.state;
    return (
      <linearLayout
        defaultItemPadding={[0.025, 0.025, 0.025, 0.025]}
        orientation={"vertical"}
      >
        <toggle
          on={allowMultipleOn}
          height={0.05}
          textSize={0.05}
          onToggleChanged={ e => this.onToggleHandler(e, { allowMultipleOn: !this.state.allowMultipleOn }) }
        >Multiple On</toggle>
        <toggle
          on={allowAllOff}
          height={0.05}
          textSize={0.05}
          onToggleChanged={ e => this.onToggleHandler(e, { allowAllOff: !this.state.allowAllOff }) }
        >All Off</toggle>
        <toggle
          on={innerLayout}
          height={0.05}
          textSize={0.05}
          onToggleChanged={ e => this.onToggleHandler(e, { innerLayout: !this.state.innerLayout }) }
        >Use layout</toggle>
      </linearLayout>
    );
  }

  renderPresentationPanel() {
    const { allowMultipleOn, allowAllOff, innerLayout } = this.state;

    const title = innerLayout ? 'Toggles embedded in linearLayout' : 'Toggles embedded in linearLayout';
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
              {this.renderToggle({ title: "Element 1", textSize: 0.075, height: 0.075 })}
              {this.renderToggle({ title: "Element 2", textSize: 0.075, height: 0.075 })}
              {this.renderToggle({ title: "Element 3", textSize: 0.075, height: 0.075 })}
            </linearLayout>
          </toggleGroup>
        )}
        {!innerLayout && (
          <toggleGroup allowMultipleOn={allowMultipleOn} allowAllOff={allowAllOff} debug={true}>
            {this.renderToggle({ title: "Item 1", textSize: 0.075, height: 0.075, localPosition: [-0.125, -0.125, 0.0] })}
            {this.renderToggle({ title: "Item 2", textSize: 0.075, height: 0.075, localPosition: [0, -0.25, 0.0] })}
            {this.renderToggle({ title: "Item 3", textSize: 0.075, height: 0.075, localPosition: [0.125, -0.375, 0.0] })}}
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
