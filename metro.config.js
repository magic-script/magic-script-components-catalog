/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const defaultAssetExts = require("metro-config/src/defaults/defaults").assetExts; 
 
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  
  resolver: {
    assetExts: [
      ...defaultAssetExts,
      // 3D Model formats
      "glb",
      "gltf",
      "obj",
    ]
  },
};
