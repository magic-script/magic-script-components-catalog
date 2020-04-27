import React from 'react';
import { LinearLayout, Text, TextEdit, Toggle, Button, RectLayout  } from 'magic-script-components';

class SceneEvents extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       onActivate: false,
       onClick: false,
       onPress: false,
       onLongPress: false,
       onRelease: false,
       onFocusGained: false,
       onFocusLost: false,
       onUpdate: false,
       onEnabled: false,
       onDisabled: false,
       onDelete: false,

       enabled: true,
       deleted: false
    };
  }

  renderNode() {
     return ( 
      <TextEdit
          width={0.5} 
          height={0.2} 
          multiline={true}
          text={"Interactive node"}
          enabled={this.state.enabled}
          onActivate={()=>{this.setState({onActivate: true})}}
          onClick={()=>{this.setState({onClick: true})}}
          onPress={()=>{this.setState({onPress: true})}}
          onLongPress={()=>{this.setState({onLongPress: true})}}
          onRelease={()=>{this.setState({onRelease: true})}}
          onFocusGained={()=>{this.setState({onFocusGained: true})}}
          onFocusLost={()=>{this.setState({onFocusLost: true})}}
          onUpdate={()=>{this.setState({onUpdate: true})}}
          onEnabled={()=>{this.setState({onEnabled: true})}}
          onDisabled={()=>{this.setState({onDisabled: true})}}
          onDelete={()=>{this.setState({onDelete: true})}}
        />
     )
  }

  renderCheckbox(text, on) {
      return (
        <Toggle height={0.04} text={text} type="checkbox" on={on} enabled={false}/>
      )
  }

  onEnableToggleChanged = event => {
    this.setState({enabled: !this.state.enabled});
  }

  onDeleteToggleChanged = event => {
    this.setState({deleted: !this.state.deleted});
  }

  render () {

   const enabled = this.state.enabled
   const deleted = this.state.deleted

    return (
      <LinearLayout alignment={'top-center'} localPosition={[0, 1, 0]}>

        <RectLayout width={0.5} height={0.4} contentAlignment={'center-center'}>
           { this.state.deleted ? null : this.renderNode() }
        </RectLayout>

        <Toggle height={0.05} text={"Enabled"} on={enabled} onToggleChanged={this.onEnableToggleChanged}/>
        <Toggle height={0.05} text={"Deleted"} on={deleted} onToggleChanged={this.onDeleteToggleChanged}/>

        {this.renderCheckbox("onActivate", this.state.onActivate)}
        {this.renderCheckbox("onClick", this.state.onClick)}
        {this.renderCheckbox("onPress", this.state.onPress)}
        {this.renderCheckbox("onLongPress", this.state.onLongPress)}
        {this.renderCheckbox("onRelease", this.state.onRelease)}
        {this.renderCheckbox("onFocusGained", this.state.onFocusGained)}
        {this.renderCheckbox("onFocusLost", this.state.onFocusLost)}
        {this.renderCheckbox("onUpdate", this.state.onUpdate)}
        {this.renderCheckbox("onEnabled", this.state.onEnabled)}
        {this.renderCheckbox("onDisabled", this.state.onDisabled)}
        {this.renderCheckbox("onDelete", this.state.onDelete)}
      </LinearLayout>
    );
  }
}

export { SceneEvents };
