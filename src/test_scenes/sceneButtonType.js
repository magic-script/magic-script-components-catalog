import React from 'react';
import { LinearLayout, Button } from 'magic-script-components';

class SceneButtonType extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<view localPosition={this.props.localPosition}>
				<LinearLayout localPosition={[0, 0.75, 0]}>
					<Button text='text' height={0.15} />
					<Button iconType='clock' text='text' height={0.15} />
					<Button type='text-with-icon' labelSide='right' iconType='clock' text='text' height={0.15} />
					<Button type='icon-with-label' labelSide='top' iconType='clock' text='top' height={0.15} />
					<Button type='icon-with-label' labelSide='right' iconType='clock' text='right' height={0.15} />
					<Button type='icon-with-label' labelSide='bottom' iconType='clock' text='bottom' height={0.15} />
					<Button type='icon-with-label' labelSide='left' iconType='clock' text='left' height={0.15} />
					<Button type='icon' labelSide='left' iconType='clock' text='text' height={0.15} />
					<Button type='text' labelSide='left' iconType='clock' text='text' height={0.15} />
				</LinearLayout>
			</view>
		);
	}
}

export { SceneButtonType };
