import React from 'react';
import { StyleSheet, View, Switch, Text } from 'react-native';
import { ARView } from 'magic-script-components-react-native';

export default class ReactNativeApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { planeDetection: false };    
  }

  onPlaneDetectionChanged = () => {
    const { planeDetection } = this.state;
    this.setState({ planeDetection: !planeDetection })
  }

  render() {
    const { planeDetection } = this.state;
    return (
      <View style={styles.container}>
        <ARView style={styles.arView} planeDetection={planeDetection} rendersContinuously={true} />
        <View style={styles.containerHorizontal}>
            <Text>Plane detection</Text>
            <Switch value={planeDetection} onValueChange={this.onPlaneDetectionChanged}/>    
        </View>
      </View>
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
