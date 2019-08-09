const RNFS = require('react-native-fs');
import { APIClient } from '../api/APIClient';

const SceneUtils = {
    loadFromNetwork: (url, saveToDisk) => {
        return new Promise((resolve, reject) => {
            APIClient.fetchScene(url, (data) => {
              console.log('fetchScene: ', data);
                if (saveToDisk) {
                  const path = RNFS.DocumentDirectoryPath + '/bundle.js';
                  SceneUtils.saveSceneToFile(path, data);
                }
          
                eval(data);
                let MyScene = mxs_bundle;
                resolve(MyScene);
              }, (error) => {
                reject(error);
              });
        });
    },

    saveToFile: (path, contents) => {
        return RNFS.writeFile(path, contents, 'utf8');
    },

    loadFromFile: (path) => {
        return RNFS.readFile(path, 'utf8');
    },
};

export { SceneUtils };
