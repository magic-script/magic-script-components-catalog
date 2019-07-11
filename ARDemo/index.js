import { AppRegistry } from 'react-native';
import RNApp from './src/RNApp';

AppRegistry.registerComponent('ARDemo', () => RNApp);


import React from 'react';
import { ReactNativeMagicScript } from 'react-native-magic-script';
import BrowserApp from './src/browser_app';

ReactNativeMagicScript.render(<BrowserApp />, { name: 'root' });
