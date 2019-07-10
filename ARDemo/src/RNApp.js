import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { ARView } from 'react-native-magic-script';

export default class RNApp extends React.Component {
  
  state = { debugNodesValue: false }

  onSwitchValueChange = () => {
    const value = this.state.debugNodesValue ? false : true;
    this.setState({ debugNodesValue: value });
  }

  render() {
    return (
      <View style={styles.container}>
          <ARView style={styles.arView} rendersContinuously={true} />
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
