import React from 'react';
import { Scene } from 'magic-script-components';
import { MainPrism } from './mainPrism';

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
