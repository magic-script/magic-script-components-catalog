import React from 'react';
import { LinearLayout, Button, View, Text } from 'magic-script-components';

class SceneButtonType extends React.Component {
	render() {
		return (
		<View localPosition={this.props.localPosition}>
			<LinearLayout 
			alignment={'top-center'} 
			defaultItemAlignment={'center-left'}
			localPosition={[0, 0.75, 0]} 
			defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}
			>
				<Text textSize={0.04}> Normal button</Text>	
				<Button text='text' height={0.15} />
				<Text textSize={0.04}> Normal button with icon</Text>	
				<Button iconType='clock' text='text' height={0.15} />
				<Text textSize={0.04}> text with icon</Text>	
				<Button type='text-with-icon' labelSide='right' iconType='clock' text='text' height={0.15} />
				<Text textSize={0.04}> icon with label on the Top</Text>	
				<Button type='icon-with-label' labelSide='top' iconType='clock' text='top' height={0.15} />
				<Text textSize={0.04}> icon with label on the Right</Text>	
				<Button type='icon-with-label' labelSide='right' iconType='clock' text='right' height={0.15} />
				<Text textSize={0.04}> icon with label on the Bottom</Text>	
				<Button type='icon-with-label' labelSide='bottom' iconType='clock' text='bottom' height={0.15} />
				<Text textSize={0.04}> icon with label on the Left</Text>	
				<Button type='icon-with-label' labelSide='left' iconType='clock' text='left' height={0.15} />
				<Text textSize={0.04}> Icon button</Text>	
				<Button type='icon' labelSide='left' iconType='clock' text='text' height={0.15} />
				<Text textSize={0.04}> Text button</Text>	
				<Button type='text' labelSide='left' iconType='clock' text='text' height={0.15} />
			</LinearLayout>
		</View>
		);
	}
}

export { SceneButtonType };
