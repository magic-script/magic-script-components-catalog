import { AppRegistry, Linking } from 'react-native';
import { ReactNativeMagicScript, PlatformInformation, NativePlaneDetector } from 'magic-script-components-react-native';
import ReactNativeApp from '../react-native/ReactNativeApp';
import { Platform, PlaneDetector } from 'magic-script-components';

const MagicScript = {
    registerApp: (name, appComponent, debug = false) => {
        Platform.setPlatformInformation(new PlatformInformation());
        Platform.setLinking(Linking);
        PlaneDetector.setNativePlaneDetector(new NativePlaneDetector());
        AppRegistry.registerComponent(name, () => ReactNativeApp);
        ReactNativeMagicScript.render(appComponent, { name: 'root' }, null, debug);
    }
};

export { MagicScript };
