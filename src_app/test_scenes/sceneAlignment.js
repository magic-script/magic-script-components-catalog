import React from 'react';

const Alignment = {
  topLeft: 'top-left',
  topCenter: 'top-center',
  topRight: 'top-right',
  centerLeft: 'center-left',
  centerCenter: 'center-center',
  centerRight: 'center-right',
  bottomLeft: 'bottom-left',
  bottomCenter: 'bottom-center',
  bottomRight: 'bottom-right',
};

// the positioned content 
class Content extends React.Component {
  
  render () {

    const align = this.props.alignment;
    const renderLayout = this.props.renderLayout;

    if (renderLayout) {
      return ( 
        <gridLayout alignment={align} defaultItemAlignment={'center-center'} columns={2}>
          <image width={0.1} height={0.1} color={[1,1,0.5,1]}/>
          <image width={0.1} height={0.1} color={[1,0.5,1,1]}/>
          <image width={0.1} height={0.1} color={[0.5,1,1,1]}/>
          <image width={0.1} height={0.1} color={[1,1,1,1]}/>
        </gridLayout>
      );
    } else {
      return (
        <image alignment={align} width={0.2} height={0.2} color={[1,1,0.5,1]}/>
      );
    }
  }

}

class SceneAlignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alignment: Alignment.topLeft };
  }

	selectNextAlignment = () => {
    const alignments = [
      Alignment.topLeft, Alignment.topCenter, Alignment.topRight,
      Alignment.centerLeft, Alignment.centerCenter, Alignment.centerRight,
      Alignment.bottomLeft, Alignment.bottomCenter, Alignment.bottomRight
    ];

    const currentIndex = alignments.indexOf(this.state.alignment);
    const nextIndex = (currentIndex + 1) % alignments.length;
		this.setState({ alignment: alignments[nextIndex] });
  }

  renderGridLayout(alignment) {
    return (<gridLayout alignment={alignment} defaultItemAlignment={'center-center'} columns={2}>
      <image width={0.1} height={0.1} color={[1,1,0.5,1]}/>
      <image width={0.1} height={0.1} color={[1,0.5,1,1]}/>
      <image width={0.1} height={0.1} color={[0.5,1,1,1]}/>
      <image width={0.1} height={0.1} color={[1,1,1,1]}/>
    </gridLayout>);
  }

  renderComponent(name, element, position, cellSize, index) {
    const min = { x: -0.5 * cellSize, y: -0.5 * cellSize };
    const max = { x: 0.5 * cellSize, y: 0.5 * cellSize };
    const points = [ [min.x, min.y, 0], [min.x, max.y, 0], [max.x, max.y, 0], [max.x, min.y, 0], [min.x, min.y, 0] ];
    return (
      <view key={index} alignment={'center-center'} localPosition={position}>
        {element}
        <text alignment={'top-center'} localPosition={[0, min.y - 0.01, 0]} textSize={0.05}>{name}</text>
        <line points={points} color={[1,1,0,1]}/>
        <line points={[[min.x, 0, 0], [max.x, 0, 0]]} color={[1,1,0,0.5]}/>
        <line points={[[0, min.y, 0], [0, max.y, 0]]} color={[1,1,0,0.5]}/>
      </view>
    );
  }

  renderComponents() {
    const { alignment } = this.state;
    const columns = 3;
    const itemSize = 0.2;
    const cellSize = 2 * itemSize;
    const cellSpace = 0.1;
    const columnsWidth = (columns - 1) * (cellSize + cellSpace)
    const minX = -0.5 * columnsWidth;
    const maxY = 0.1;

    const y1 = 0.577 * itemSize;
    const y2 = -0.288 * itemSize;

    const propsByType = {
      button: { textSize: 0.05, text: 'Click', width: itemSize, height: 0.07, enabled: false },
      image: { width: itemSize, height: itemSize, color: [1,0,0,1] },
      text: { textSize: 0.05, text: 'Click', color: [0,1,0,1] }, 
      line: { points: [[0,y1,0], [-0.5*itemSize,y2,0], [0.5*itemSize,y2,0], [0,y1,0]], color: [0,1,1,1] },
      model: { modelPath: require('../../resources/BoxTextured.glb'), localScale: [0.2, 0.2, 0.2] }, 
      progressBar: { width: itemSize, height: 0.2 * itemSize, value: 0.66 },
      spinner: { size: [itemSize, itemSize] }, 
      text: { textSize: 0.048, text: 'A B C D E F G H I J K L M N O P Q R S T U W X Y Z', boundsSize: { boundsSize: [itemSize, itemSize], wrap: true } },
      toggle: { height: 0.45 * itemSize}
    };

    const getPosition = (index) => {
      const x = minX + (index % columns) * (cellSize + cellSpace);
      const y = maxY - Math.floor(index / columns) * (cellSize + cellSpace);
      return [x, y, 0];
    }

    const components = Object.keys(propsByType).map((key, index) => {
      const element = React.createElement(key, { ...propsByType[key], alignment });
      return this.renderComponent(key, element, getPosition(index), cellSize, index);
    });

    components.push(this.renderComponent('gridLayout', this.renderGridLayout(alignment), getPosition(components.length), cellSize, components.length));
    return (
      <view>
        {components}
      </view>
    );
  }
  
  render() {
    return (
      <view localPosition={this.props.localPosition}>
        <button textSize={0.05} alignment={'top-center'} localPosition={[0, 0.5, 0]} onClick={this.selectNextAlignment}>Align</button>
        {this.renderComponents()}
      </view>
    );
  }
}

export { SceneAlignment };
