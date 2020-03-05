import React from 'react';
import { Platform, View } from 'magic-script-components';
import { MainPrism } from './mainPrism';

function Scene(props) {
  const name = (Platform.OS == 'Lumin') ? 'view' : 'scene';
  return React.createElement(name, props);
}

class CatalogApp extends React.Component {
  render() {
    return (
      <Scene>
        <MainPrism size={[1.0, 1.5, 0.75]} />
      </Scene>
    );
  }
}

export default CatalogApp;
