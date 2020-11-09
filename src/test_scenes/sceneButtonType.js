import React from 'react';
import { Alignment, AnchorPoint, Button, ButtonType, LinearLayout, Side, SystemIcon, Text, View } from 'magic-script-components';

class SceneButtonType extends React.Component {
	render() {
		return (
      <View position={this.props.position}>
        <LinearLayout 
          defaultItemAlignment={Alignment.centerLeft}
          defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}
        >
          <Text fontSize={0.04}> Normal button</Text>	
          <Button height={0.15}>text</Button>
          <Text fontSize={0.04}> Normal button with icon</Text>	
          <Button iconType={SystemIcon.clock} height={0.15}>text</Button>
          <Text fontSize={0.04}> text with icon</Text>	
          <Button type={ButtonType.textWithIcon} textSide={Side.right} iconType={SystemIcon.clock} height={0.15}>text</Button>
          <Text fontSize={0.04}> icon with label on the Top</Text>	
          <Button type={ButtonType.iconWithLabel} textSide={Side.top} iconType={SystemIcon.clock} height={0.15}>top</Button>
          <Text fontSize={0.04}> icon with label on the Right</Text>	
          <Button type={ButtonType.iconWithLabel} textSide={Side.right} iconType={SystemIcon.clock}height={0.15}>right</Button>
          <Text fontSize={0.04}> icon with label on the Bottom</Text>	
          <Button type={ButtonType.iconWithLabel} textSide={Side.bottom} iconType={SystemIcon.clock} height={0.15}>bottom</Button>
          <Text fontSize={0.04}> icon with label on the Left</Text>	
          <Button type={ButtonType.iconWithLabel} textSide={Side.left} iconType={SystemIcon.clock} height={0.15}>left</Button>
          <Text fontSize={0.04}> Icon button</Text>	
          <Button type={ButtonType.icon} textSide={Side.left} iconType={SystemIcon.clock} height={0.15}>text</Button>
          <Text fontSize={0.04}> Text button</Text>	
          <Button type={ButtonType.text} textSide={Side.left} iconType={SystemIcon.clock} height={0.15}>text</Button>
        </LinearLayout>
      </View>
		);
	}
}

export { SceneButtonType };
