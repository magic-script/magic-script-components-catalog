import React from 'react';
import { requireNativeComponent } from 'react-native';
const RCTArView = requireNativeComponent('RCTArView');

export default class ARView extends React.Component {
    render() {
        return <RCTArView {...this.props} />
    }
}