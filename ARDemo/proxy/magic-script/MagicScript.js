import { AppRegistry } from 'react-native';
import { ReactNativeMagicScript } from 'react-native-magic-script';
import ReactNativeApp from '../react-native/ReactNativeApp';

const MagicScript = {
    registerApp: (name, appComponent) => {
        AppRegistry.registerComponent(name, () => ReactNativeApp);
        ReactNativeMagicScript.render(appComponent, { name: 'root' });
    }
};

export { MagicScript };
