import { AppRegistry } from 'react-native';
import RNApp from './src/RNApp';

AppRegistry.registerComponent('ARDemo', () => RNApp);


import React from 'react';
import { ARKitScript } from 'react-native-magic-script';
import AndroidApp from './src/app';

ARKitScript.render(<AndroidApp />, { name: 'root' });
