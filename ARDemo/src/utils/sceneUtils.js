const RNFS = require('react-native-fs');
import { APIClient } from '../api/APIClient';

const SceneUtils = {
    loadFromNetwork: (name, saveToDisk) => {
        return new Promise((resolve, reject) => {
            APIClient.fetchScene(name, (data) => {
              console.log('fetchScene: ', data);
                if (saveToDisk) {
                  const path = RNFS.DocumentDirectoryPath + '/' + name;
                  SceneUtils.saveSceneToFile(path, data);
                }
          
                eval(data);
                let MyScene = mxs;
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
