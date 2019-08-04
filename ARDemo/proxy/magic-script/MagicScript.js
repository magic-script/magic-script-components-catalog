import { AppRegistry } from 'react-native';
import { ReactNativeMagicScript } from 'react-native-magic-script';
import ReactNativeApp from '../react-native/ReactNativeApp';

const MagicScript = {
    registerApp: (name, appComponent, debug = false) => {
        AppRegistry.registerComponent(name, () => ReactNativeApp);
        ReactNativeMagicScript.render(appComponent, { name: 'root' }, null, debug);
    }
};

export { MagicScript };
