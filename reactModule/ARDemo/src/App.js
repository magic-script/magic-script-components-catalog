import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
// import { ARView } from 'react-native-arkit';
import { ARComponentManager } from 'react-native-arkit';
import { ARView } from 'react-native-arkit';


export default class App extends React.Component {
  state = { debugNodesValue: false }
  
  onSwitchValueChange = () => {
    const value = this.state.debugNodesValue ? false : true;
    this.setState({ debugNodesValue: value });
    ARComponentManager.init();
  }

  render() {
    const { sampleImage } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Sample React Native App</Text>
        <ARView style={styles.arView} rendersContinuously={true}>
            <Text style={styles.sceneTitle}>Scene 3d view</Text>

        </ARView>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Render debug nodes</Text>
          <Switch
            value={this.state.debugNodesValue}
            style={styles.switch}
            onValueChange={this.onSwitchValueChange}
          />
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
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '900',
    fontStyle: 'normal',
    fontFamily: 'System',
    lineHeight: 41,
    marginTop: 44,
  },
  sceneTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'System',
    marginTop: 10,
  },
  arView: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#555555',
  },
  arText: {
    flex: 1,
    width: '100%',
    color: 'white'
  },
  footer: {
    width: '90%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  footerText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System',
  },
  switch: {
    marginLeft: 10,
  }
});
