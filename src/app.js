import React from 'react';
import { Scene } from 'magic-script-components';
import { MainPrism } from './mainPrism';

class CatalogApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { prisms: [] };
  }

  onPrismAction = (createPrismFunc) => {
    if (createPrismFunc !== undefined) {
      let prisms = this.state.prisms;
      const index = prisms.length;
      const prism = createPrismFunc(`Prism ${index}`, index);
      prisms.push(prism);
      this.setState({ prisms });
    } else {
      let prisms = this.state.prisms;
      if (prisms.length > 0) {
        prisms.pop();
        this.setState({ prisms });
      }
    }
  }

  render() {
    return (
      <Scene>
        <MainPrism size={[1.0, 1.5, 0.75]} onPrismAction={this.onPrismAction}/>
        {this.state.prisms.map(prism => prism)}
      </Scene>
    );
  }
}

export default CatalogApp;
