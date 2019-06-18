import React, { Component } from 'react';
import { Alert, Image } from 'react-native'

class ListApp extends Component {
	
	constructor(props) {
        super(props);
		
		this.images = [
            require('../resources/DemoPicture1.jpg'),
            require('../resources/DemoPicture2.jpg'),
			require('../resources/DemoPicture3.jpg'),
			require('../resources/DemoPicture4.jpg'),
			require('../resources/DemoPicture5.jpg'),
        ];
	}	
	
	state = { selectedImageIndex: 0 }
	
	onPlayButtonPress = () => {
		Alert.alert(
         'Hello!'
      )
    }
	
    render() {
		const { selectedImageIndex } = this.state;
        const imageSource = this.images[selectedImageIndex];
		// const imgProps = Image.resolveAssetSource(imageSource);
		
		return (
			<view position={[0, 0, 0]}>
				<image position={[0, 0, -3 ]} source={imageSource} size={{ width: 3, height: 3 }} />
				<button position={[-0.3, -0.6, -2 ]} onPress={() => this.onPlayButtonPress()} />
				<button position={[0.3, -0.6, -2 ]} />
			</view>
		);
  }
}

export default ListApp;