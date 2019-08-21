import React from 'react';
import Header from './header.js';

export default class SceneA extends React.Component {
    render() {
        return (
            <Header 
                localPosition={this.props.localPosition} 
                title={'"The Very Hungry Caterpillar"'}
                subtitle={'by Eric Carle, $5.60'} 
            />
        );
    }
}