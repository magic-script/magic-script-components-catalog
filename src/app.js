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
      const createPrismFunc = input;
      this.setState(state => {
        // create new prism
        let { prisms, totalIndex } = state;
        const prism = createPrismFunc(`Prism ${totalIndex}`, totalIndex);
        prisms.push(prism);
        return { prisms, totalIndex: totalIndex + 1 };
      });
    } else {
      this.setState(state => {
        if (state.prisms.length === 0) {
          return {};
        }

        // delete prism: either with given key (stored in input) or the last one
        const key = (typeof input === 'number') ? `${input}` : state.prisms[state.prisms.length - 1].key;
        const prisms = state.prisms.filter(prism => prism.key !== key);
        return { prisms, totalIndex: (prisms.length === 0) ? 0 : state.totalIndex };
      });
    }
  }

  render() {
    return (
      <Scene>
        <MainPrism sceneName={'Local images'} size={[1.0, 1.5, 0.75]} onPrismAction={this.onPrismAction}/>
        {this.state.prisms.map(prism => prism)}
      </Scene>
    );
  }
}

export default CatalogApp;
