import React from "react"

class SceneColorPicker extends React.Component {

    onColorSelected = (event) => {
        console.log("current color: ", this.state.selectedColor);
        this.setState ({ selectedColor: event.color});
        console.log("event received: ", event);
        console.log("color received: ", event.color);

    };

    color = [1, 1, 0.3, 1];

    constructor(props) {
        super(props);
        this.state = {
            selectedColor: this.color,
        };
        console.log("color setup: ");

    }

    render() {
        return (
            <view localPosition={this.props.localPosition}>
                <colorPicker color={this.color} height={0.1} onColorSelected={this.onColorSelected} />
                <text textColor={this.state.selectedColor} textSize={0.2} alignment={'top-center'} textAlignment={'center'}>colored text</text>
            </view>
        );
    }
}

export { SceneColorPicker };
