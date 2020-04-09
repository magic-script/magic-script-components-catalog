import React, {PureComponent } from 'react';
import { StyleSheet, View, Switch, Text, Button, TouchableOpacity } from 'react-native';
import { ARView } from 'magic-script-components-react-native';
import { setInitialDeeplink } from '../../global/globalVariables'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { RNCamera } from 'react-native-camera';

export default class ReactNativeApp extends React.Component {

  render() {
    const Stack = createStackNavigator();

    return (

      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Page1" component={Page1} options={{title: 'Welcome'}}/>
            <Stack.Screen name="Page2" component={Page2} />
         </Stack.Navigator>
      </NavigationContainer>

    );
  }
}

class Page1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { planeDetection: false };
    
    setInitialDeeplink(props.initialUrl);
  }

  onPlaneDetectionChanged = () => {
    const { planeDetection } = this.state;
    this.setState({ planeDetection: !planeDetection })
  }

   render() {

      const { planeDetection } = this.state;
      const navigation = this.props.navigation

      return (
        <View style={styles.container}>
          <ARView style={styles.arView} planeDetection={planeDetection} rendersContinuously={true} />
          <View style={styles.containerHorizontal}>
              <Text>Plane detection</Text>
              <Switch value={planeDetection} onValueChange={this.onPlaneDetectionChanged}/>    
          </View>
          <Button title="Go to Page2" onPress={() => navigation.navigate('Page2')}/>
        </View>
      );
   }
}

class Page2 extends PureComponent {
  render() {
     return(
      <View style={styles.cameraContainer}>
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        captureAudio={false}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
          <Text style={{ fontSize: 14 }}> SNAP </Text>
        </TouchableOpacity>
      </View>
    </View>
     );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  cameraContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },

  containerHorizontal: {
    flex: 0,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  arView: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#555555',
  },

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  }

});
