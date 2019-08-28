import React from 'react';
import ImageSlider from './image-slider.js';

export default class SceneB extends React.Component {
    constructor(props) {
        super(props);
        this.images = [
            require('../../../resources/DemoPicture1.jpg'),
            require('../../../resources/DemoPicture2.jpg'),
            require('../../../resources/DemoPicture4.jpg'),
            require('../../../resources/DemoPicture5.jpg')
        ];
    }

    render() {
        return (
            <ImageSlider 
                localPosition={this.props.localPosition} 
                items={this.images} 
                initialPosition={0} 
                caption={'Gallery'}
            />
        );
    }
}
