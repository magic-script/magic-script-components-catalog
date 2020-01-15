import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native';
import { ARView } from 'magic-script-components-react-native';
import { setInitialDeeplink } from '../../global/globalVariables'

export default class ReactNativeApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { planeDetection: true };
    
    if(props.initialUrl != null) {
      setInitialDeeplink(props.initialUrl);
    }
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
        <Button title="Plane detection" onPress={this.onPlaneDetectionChanged} />
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
  arView: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#555555',
  }
});
