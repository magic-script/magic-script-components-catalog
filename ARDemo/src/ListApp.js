import React, { Component } from 'react';
import { Alert } from 'react-native'

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

		return (
			<view localPosition={[0, 0, 0]}>
			    <image localPosition={[0, -0.5, -2 ]} source={imageSource} width={1.5} height={1} />
				<button localPosition={[-0.3, -0.6, -1 ]} width={0.25} height={0.10} textSize={0.035} onPress={() => this.onPlayButtonPress()} />
				<button localPosition={[0.3, -0.6, -1 ]} width={0.25} height={0.10} textSize={0.02} />
			</view>
		);
  }
}

export default ListApp;