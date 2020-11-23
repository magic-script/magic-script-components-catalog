import React from 'react';
import { AnchorPoint, Button, GridLayout, Text, TextAlign, View } from 'magic-script-components';

class SceneButton extends React.Component {
	constructor(props) {
		super(props);
		this.default = {
			title: 'Default', 
			enabled: true, 
			roundness: 0.5, 
			textColor: [0.75,0.75,0.75,1],
			fontSize: 0.08,
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
		fontSize = 0.08,
		width = 0.0,
		height = 0.0,
		onClick = () => {},
	}) {
		return (
			<Button
				enabled={enabled}
				textColor={textColor}
				fontSize={fontSize}
				roundness={roundness}
				width={width}
				height={height}
				onClick={onClick}
			>{title}</Button>
		);
	}

	renderHeader(text) {
		return <Text textAlign={TextAlign.right} fontSize={0.09} width={0.4} height={0.1} multiline={true}>{text}</Text>;
	}

	onButtonClick(param) {
		return () => { this.setState(param); };
	}

  render () {
    return (
      <View position={this.props.position}>
				<GridLayout position={[0,-0.2,0]} columns={4} anchorPoint={AnchorPoint.bottomCenter}>

					{this.renderHeader('Text:')}
					{this.renderButton({ title: 'short', onClick: this.onButtonClick({ title: 'CTA'})})}
					{this.renderButton({ title: 'mid', onClick: this.onButtonClick({ title: 'Custom button'})})}
					{this.renderButton({ title: 'long', onClick: this.onButtonClick({ title: 'Lorem ipsum dolor sit amet'})})}

					{this.renderHeader('Text size:')}
					{this.renderButton({ title: '0.1', onClick: this.onButtonClick({ fontSize: 0.1 })})}
					{this.renderButton({ title: '0.2', onClick: this.onButtonClick({ fontSize: 0.2 })})}
					{this.renderButton({ title: '0.3', onClick: this.onButtonClick({ fontSize: 0.3 })})}

					{this.renderHeader('Color:')}
					{this.renderButton({ title: 'red', textColor: 'red', onClick: this.onButtonClick({ textColor: 'red' })})}
					{this.renderButton({ title: 'green', textColor: 'green', onClick: this.onButtonClick({ textColor: 'green' })})}
					{this.renderButton({ title: 'cyan', textColor: 'cyan', onClick: this.onButtonClick({ textColor: 'cyan' })})}

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
					
				</GridLayout>
				<GridLayout position={[0,-0.55,0]} anchorPoint={AnchorPoint.topCenter}>
					{this.renderButton(this.state)}
				</GridLayout>
      </View>
    );
  }
}

export { SceneButton };
