import React from 'react';
import ImageSlider from './image-slider.js';

class SceneImageSlider extends React.Component {
    constructor(props) {
        super(props);
        this.images = [
            require('../../../assets/resources/DemoPicture1.jpg'),
            require('../../../assets/resources/DemoPicture2.jpg'),
            require('../../../assets/resources/DemoPicture4.jpg'),
            require('../../../assets/resources/DemoPicture5.jpg')
        ];
    }

    render() {
        return (
            <ImageSlider 
                position={this.props.position} 
                items={this.images} 
                initialPosition={0} 
                caption={'Gallery'}
            />
        );
    }
}

export { SceneImageSlider };
