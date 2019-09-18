import React from 'react';
// import { Button, GridLayout, Text } from 'magic-script-components-react-native';

class SceneButton extends React.Component {
	constructor(props) {
		super(props);
		this.default = {
			title: 'Default', 
			enabled: true, 
			roundness: 0.5, 
			textColor: [0.75,0.75,0.75,1],
			textSize: 0.08,
			width: 0.0,
			height: 0.0,
		};
		this.state = this.default;
		this.onButtonClick = this.onButtonClick.bind(this);
	}

	renderButton({
		title, 
		enabled = true, 
		roundness = 0.5, 
		textColor = [1,1,1,1],
		textSize = 0.08,
		width = 0.0,
		height = 0.0,
		onClick = () => {},
	}) {
		return (
			<button
				enabled={enabled}
				textColor={textColor}
				textSize={textSize}
				roundness={roundness}
				width={width}
				height={height}
				onClick={onClick}
			>{title}</button>
		);
	}

	renderHeader(text) {
		return <text textAlignment={'right'} textSize={0.09} boundsSize={{ boundsSize: [0.4, 0.1], wrap: true }}>{text}</text>;
	}

	onButtonClick(param) {
		return () => { this.setState(param); };
	}

  render () {
    return (
      <view localPosition={this.props.localPosition}>
				<gridLayout localPosition={[0,-0.2,0]} columns={4} alignment={'bottom-center'}>

					{this.renderHeader('Text:')}
					{this.renderButton({ title: 'short', onClick: this.onButtonClick({ title: 'CTA'})})}
					{this.renderButton({ title: 'mid', onClick: this.onButtonClick({ title: 'Custom button'})})}
					{this.renderButton({ title: 'long', onClick: this.onButtonClick({ title: 'Lorem ipsum dolor sit amet'})})}

					{this.renderHeader('Text size:')}
					{this.renderButton({ title: '0.1', onClick: this.onButtonClick({ textSize: 0.1 })})}
					{this.renderButton({ title: '0.2', onClick: this.onButtonClick({ textSize: 0.2 })})}
					{this.renderButton({ title: '0.3', onClick: this.onButtonClick({ textSize: 0.3 })})}

					{this.renderHeader('Color:')}
					{this.renderButton({ title: 'red', textColor: [1,0,0,1], onClick: this.onButtonClick({ textColor: [1,0,0,1] })})}
					{this.renderButton({ title: 'green', textColor: [0,1,0,1], onClick: this.onButtonClick({ textColor: [0,1,0,1] })})}
					{this.renderButton({ title: 'cyan', textColor: [0,1,1,1], onClick: this.onButtonClick({ textColor: [0,1,1,1] })})}

					{this.renderHeader('Roundness:')}
					{this.renderButton({ title: '0.0', roundness: 0.0, onClick: this.onButtonClick({ roundness: 0.0 })})}
					{this.renderButton({ title: '0.5', roundness: 0.3, onClick: this.onButtonClick({ roundness: 0.3 })})}
					{this.renderButton({ title: '1.0', roundness: 1.0, onClick: this.onButtonClick({ roundness: 1.0 })})}

					{this.renderHeader('Width:')}
					{this.renderButton({ title: '0.2', onClick: this.onButtonClick({ width: 0.2 })})}
					{this.renderButton({ title: '0.5', onClick: this.onButtonClick({ width: 0.5 })})}
					{this.renderButton({ title: '1.0', onClick: this.onButtonClick({ width: 1.0 })})}

					{this.renderHeader('Height:')}
					{this.renderButton({ title: '0.1', onClick: this.onButtonClick({ height: 0.1 })})}
					{this.renderButton({ title: '0.2', onClick: this.onButtonClick({ height: 0.2 })})}
					{this.renderButton({ title: '0.5', onClick: this.onButtonClick({ height: 0.5 })})}

					{this.renderHeader('Misc:')}
					{this.renderButton({ title: 'default', onClick: this.onButtonClick(this.default)})}
					{this.renderButton({ title: 'enable', onClick: this.onButtonClick({ enabled: true })})}
					{this.renderButton({ title: 'disable', onClick: this.onButtonClick({ enabled: false })})}
					
				</gridLayout>
				<gridLayout localPosition={[0,-0.55,0]} alignment={'top-center'}>
					{this.renderButton(this.state)}
				</gridLayout>
      </view>
    );
  }
}

export { SceneButton };
