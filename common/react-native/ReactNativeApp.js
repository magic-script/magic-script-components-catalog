import React from 'react';
import { StyleSheet, View, Switch, Text, Button } from 'react-native';
import { ARView } from 'magic-script-components-react-native';
import { setInitialDeeplink } from '../../global/globalVariables'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

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

class Page2 extends React.Component {
  render() {
     return(
       <Text>Page 2</Text> 
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
  }
});
