import React, { Component } from 'react';
import { Alert } from 'react-native'

class ListApp extends Component {
	
	onPlayButtonPress = () => {
		Alert.alert(
         'Hello!'
      )
    }
	
    render() {
		return (
			<button position={{ x: 0, y: 0, z: -2 }} onPress={() => this.onPlayButtonPress()} />
		);
  }
}

export default ListApp;