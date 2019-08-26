import React from 'react';

// the positioned content 
class Content extends React.Component {
  
  render () {

    const align = this.props.alignment;
    const renderLayout = this.props.renderLayout;

    if (renderLayout) {
      return ( 
        <gridLayout alignment={align} itemAlignment={'center-center'} columns={2}>
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

export class SceneAlignmentUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0, 
      alignment: 'top-left',
      verticalAligns: ['top', 'center', 'bottom'],
      horizontalAligns: ['left', 'center', 'right'],
      renderLayout: false
    };
    this.onToggleChanged = this.onToggleChanged.bind(this);
  }

	updateAlignemntClick = () => {
		this.updateAlignment();
  }
  
  onToggleChanged = (event) => {
    this.setState({ renderLayout: event.On });
  }

	updateAlignment() {
    var index = this.state.index;
    index++;
    if (index > 8) {
        index = 0;
    }

    const vertical = this.state.verticalAligns[Math.trunc(index / 3)];
    const horizontal = this.state.horizontalAligns[index % 3];
    const alignment = `${vertical}-${horizontal}`;
		this.setState({ index, alignment });
  }
  
  render () {
    return (
      <view>
        <text alignment={'bottom-center'} localPosition={[0, 0.2, 0]} textSize={0.05}>{this.state.alignment}</text>
        
        <Content alignment={this.state.alignment} renderLayout={this.state.renderLayout}/>

        <button width={0.16} height={0.08} alignment={'top-center'} localPosition={[0, -0.22, 0]} onClick={this.updateAlignemntClick}>Update</button>
        <toggle 
            localPosition={[0,-0.35,0]}
            alignment={'top-center'} 
            height={0.05}
            textSize={0.05} 
            on={this.state.renderLayout} 
            onToggleChanged={this.onToggleChanged}>
              Layout mode
         </toggle>
      </view>
    );
  }

}
