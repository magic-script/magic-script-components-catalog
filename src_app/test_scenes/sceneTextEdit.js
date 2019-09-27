import React from 'react';

class SceneTextEdit extends React.Component {
  render () {
    return (
      <view localPosition={this.props.localPosition}>
        <text localPosition={[-0.3, 0.45, 0]} textSize={0.05}>Username</text>
        <textEdit localPosition={[-0.3, 0.4, 0]} 
            width={0.7} 
            height={0.07} 
            textSize={0.05}
            hint={'Username'} 
            textAlignment={'center'}
            fontParams={{weight: "bold", style: "normal" }}
            textColor={[0, 1, 0, 1]}/>

        <text localPosition={[-0.3, 0.3, 0]} textSize={0.05}>Password</text>
        <textEdit localPosition={[-0.3, 0.25, 0]} width={0.7} height={0.07} textAlignment={'center'} textSize={0.05} hint={'Password'} hintColor={[1, 0, 0, 1]} password></textEdit>

        <text localPosition={[-0.3, 0.1, 0]} textSize={0.05}>E-mail</text>
        <textEdit localPosition={[-0.3, 0.05, 0]} width={0.7} height={0.05} textEntry={"email"} hint={''}></textEdit>

        <text localPosition={[-0.3, -0.05, 0]} textSize={0.05}>Phone number</text>
        <textEdit localPosition={[-0.3, -0.1, 0]} width={0.7} height={0.05} textEntry={"numeric"} text={'0048'} charLimit={15} charSpacing={0.1}></textEdit>

        <text localPosition={[-0.3, -0.2, 0]} textSize={0.05}>Additional info</text>
        <textEdit localPosition={[-0.3, -0.25, 0]} 
            scrolling={true} 
            textPadding={[0.03, 0.03, 0.03, 0.03]}
            fontParams={{weight: "light", style: "italic" }} 
            width={0.7} 
            height={0.25} 
            hint={'*optional'}
            multiline/>
      </view>
    );
  }
}

export { SceneTextEdit };
