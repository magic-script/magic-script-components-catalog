import { AppRegistry } from 'react-native';
import { ReactNativeMagicScript, PlatformInformation } from 'magic-script-components-react-native';
import ReactNativeApp from '../react-native/ReactNativeApp';
import { Platform } from 'magic-script-components';

const MagicScript = {
    registerApp: (name, appComponent, debug = false) => {
        Platform.setNativeModule(new PlatformInformation());
        AppRegistry.registerComponent(name, () => ReactNativeApp);
        ReactNativeMagicScript.render(appComponent, { name: 'root' }, null, debug);
    }
};

export { MagicScript };
