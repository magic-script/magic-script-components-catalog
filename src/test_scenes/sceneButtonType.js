import React from 'react';
import { LinearLayout, Button, View, Text } from 'magic-script-components';

class SceneButtonType extends React.Component {
	render() {
		return (
		<View position={this.props.position}>
			<LinearLayout 
			anchorPoint={'top-center'} 
			defaultItemAlignment={'center-left'}
			position={[0, 0.75, 0]} 
			defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}
			>
				<Text fontSize={0.04}> Normal button</Text>	
				<Button height={0.15}>text</Button>
				<Text fontSize={0.04}> Normal button with icon</Text>	
				<Button iconType='clock' height={0.15}>text</Button>
				<Text fontSize={0.04}> text with icon</Text>	
				<Button type='text-with-icon' textSide='right' iconType='clock' height={0.15}>text</Button>
				<Text fontSize={0.04}> icon with label on the Top</Text>	
				<Button type='icon-with-label' textSide='top' iconType='clock' height={0.15}>top</Button>
				<Text fontSize={0.04}> icon with label on the Right</Text>	
				<Button type='icon-with-label' textSide='right' iconType='clock'height={0.15}>right</Button>
				<Text fontSize={0.04}> icon with label on the Bottom</Text>	
				<Button type='icon-with-label' textSide='bottom' iconType='clock' height={0.15}>bottom</Button>
				<Text fontSize={0.04}> icon with label on the Left</Text>	
				<Button type='icon-with-label' textSide='left' iconType='clock' height={0.15}>left</Button>
				<Text fontSize={0.04}> Icon button</Text>	
				<Button type='icon' textSide='left' iconType='clock' height={0.15}>text</Button>
				<Text fontSize={0.04}> Text button</Text>	
				<Button type='text' textSide='left' iconType='clock' height={0.15}>text</Button>
			</LinearLayout>
		</View>
		);
	}
}

export { SceneButtonType };
