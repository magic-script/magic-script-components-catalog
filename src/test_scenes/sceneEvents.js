import React from 'react';
import { LinearLayout, Text, TextEdit, Toggle, Button  } from 'magic-script-components';

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
        <Toggle text={text} type="checkbox" on={on} enabled={false}/>
      )
  }

  render () {

   const enabled = this.state.enabled

    return (
      <LinearLayout alignment={'top-center'} >
        <Toggle text={"Enabled"} on={enabled} onToggleChanged={()=> {this.setState({enabled: !enabled})}}/>
        <Button text={"Delete"} onClick={()=>{this.setState({deleted: true})}}/>

        { this.state.deleted ? null : this.renderNode() }

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
