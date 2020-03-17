import React from 'react';
import { Scene } from 'magic-script-components';
import { MainPrism } from './mainPrism';

class CatalogApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { prisms: [], totalIndex: 0 };
  }

  onPrismAction = (input) => {
    if (typeof input === 'function') {
      // create new prism
      const createPrismFunc = input;
      let { prisms, totalIndex } = this.state;
      const prism = createPrismFunc(`Prism ${totalIndex}`, totalIndex);
      prisms.push(prism);
      this.setState({ prisms, totalIndex: totalIndex + 1 });
    } else {
      let prisms = this.state.prisms;
      if (prisms.length > 0) {
        // delete prism: either with given key (stored in input) or the last one
        const key = (typeof input === 'number') ? input : prisms[prisms.length - 1].key;
        prisms = prisms.filter(prism => prism.key !== key);
        this.setState({ prisms });
      }
    }
  }

  render() {
    return (
      <Scene>
        <MainPrism sceneName='Local images' size={[1.0, 1.5, 0.75]} onPrismAction={this.onPrismAction}/>
        {this.state.prisms.map(prism => prism)}
      </Scene>
    );
  }
}

export default CatalogApp;
