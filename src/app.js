import React from 'react';
import { MainPrism } from './mainPrism';

function Scene(props) {
  return React.createElement('scene', props);
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
