import React from 'react';
import ImageSlider from './image-slider.js';

export default class SceneB extends React.Component {
    constructor(props) {
        super(props);
        this.images = [
            'resources/DemoPicture1.jpg',
            'resources/DemoPicture2.jpg',
            'resources/DemoPicture4.jpg',
            'resources/DemoPicture5.jpg'
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
