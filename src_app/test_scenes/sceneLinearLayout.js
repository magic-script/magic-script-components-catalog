import React from 'react';

class SceneLinearLayout extends React.Component {
  constructor(props) {
    super(props);
    // The padding order is:  top, right, bottom, left
    this.state = { width: 0, height: 0, isHorizontal: false, padding: [0,0,0,0], alignment: 'center-center' };
  }

  onOrientationChanged = event => {
    this.setState({ isHorizontal: event.On });
  }

  onTopToggleChanged = () => { this.togglePaddingAt(0); }
  onRightToggleChanged = () => { this.togglePaddingAt(1); }
  onBottomToggleChanged = () => { this.togglePaddingAt(2); }
  onLeftToggleChanged = () => { this.togglePaddingAt(3); }
  togglePaddingAt(index) {
    var values = [...this.state.padding];
    values[index] = Math.abs(values[index] - 0.04);
    this.setState({ padding: values });
  }

  onTopLeftButtonClick = () => { this.setState({ alignment: 'top-left' }); }
  onTopCenterButtonClick = () => { this.setState({ alignment: 'top-center' }); }
  onTopRightButtonClick = () => { this.setState({ alignment: 'top-right' }); }
  onCenterLeftButtonClick = () => { this.setState({ alignment: 'center-left' }); }
  onCenterCenterButtonClick = () => { this.setState({ alignment: 'center-center' }); }
  onCenterRightButtonClick = () => { this.setState({ alignment: 'center-right' }); }
  onBottomLeftButtonClick = () => { this.setState({ alignment: 'bottom-left' }); }
  onBottomCenterButtonClick = () => { this.setState({ alignment: 'bottom-center' }); }
  onBottomRightButtonClick = () => { this.setState({ alignment: 'bottom-right' }); }

  onWidthToogleChanged = (event) => { this.setState({ width: event.On ? 1 : 0 }); }
  onHeightToogleChanged = (event) => { this.setState({ height: event.On ? 1 : 0 }); }

  renderItem(color) {
    return (
      <image debug={true} width={0.6} height={0.3} color={color}/>
    );
  }

  render () {
    const { width, height, padding, alignment, isHorizontal } = this.state;
    const orientation = isHorizontal ? 'horizontal' : 'vertical';
  
    return (
      <view localPosition={this.props.localPosition}>
        <toggle localPosition={[0.3, 0.4, 0]} height={0.08} textSize={0.08} on={isHorizontal} onToggleChanged={this.onOrientationChanged}>{'Horizontal'}</toggle>
        <view localPosition={[-0.5, 0.2, 0]} >
            <text localPosition={[0, 0, 0]} alignment={'center-center'} textSize={0.08}>Set size:</text>
            <toggle localPosition={[0.2, -0.1, 0]} textSize={0.08} height={0.1} on={width == 1} onToggleChanged={this.onWidthToogleChanged}>1m width</toggle>
            <toggle localPosition={[0.2, -0.2, 0]} textSize={0.08} height={0.1} on={height == 1} onToggleChanged={this.onHeightToogleChanged}>1m height</toggle>
        </view> 

        <view localPosition={[0.3, 0.2, 0]} >
          <text localPosition={[0, 0, 0]} textSize={0.08} alignment={'center-left'}>Set items padding:</text>
          <toggle localPosition={[0.4, -0.1, 0]} textSize={0.08} height={0.1} on={padding[0] > 0} onToggleChanged={this.onTopToggleChanged}>top</toggle>
          <toggle localPosition={[0.4, -0.2, 0]} textSize={0.08} height={0.1} on={padding[1] > 0} onToggleChanged={this.onRightToggleChanged}>right</toggle>
          <toggle localPosition={[0.4, -0.3, 0]} textSize={0.08} height={0.1} on={padding[2] > 0} onToggleChanged={this.onBottomToggleChanged}>bottom</toggle>
          <toggle localPosition={[0.4, -0.4, 0]} textSize={0.08} height={0.1} on={padding[3] > 0} onToggleChanged={this.onLeftToggleChanged}>left</toggle>
        </view>
 
         
        <linearLayout
          debug={true}
          width={width}
          height={height}
          orientation={orientation}
          alignment={'top-center'}
          defaultItemAlignment={alignment}
          defaultItemPadding={padding}
          localPosition={[0, -0.3, 0]}
        >
            {this.renderItem('blue')}
            {this.renderItem('green')}
            {this.renderItem('cyan')}
            {this.renderItem('red')}
            {this.renderItem('magenta')}
          
        </linearLayout>

        <view localPosition={[0, -2.2, 0]}>
          <text localPosition={[0, 0.05, 0]} textSize={0.08} alignment={'bottom-center'}>Set items alignment:</text>
          <button localPosition={[-0.3, -0.1, 0]} textSize={0.08} roundness={0} onClick={this.onTopLeftButtonClick}>TL</button>
          <button localPosition={[ 0.0, -0.1, 0]} textSize={0.08} roundness={0} onClick={this.onTopCenterButtonClick}>TC</button>
          <button localPosition={[ 0.3, -0.1, 0]} textSize={0.08} roundness={0} onClick={this.onTopRightButtonClick}>TR</button>
          <button localPosition={[-0.3, -0.3, 0]} textSize={0.08} roundness={0} onClick={this.onCenterLeftButtonClick}>CL</button>
          <button localPosition={[ 0.0, -0.3, 0]} textSize={0.08} roundness={0} onClick={this.onCenterCenterButtonClick}>CC</button>
          <button localPosition={[ 0.3, -0.3, 0]} textSize={0.08} roundness={0} onClick={this.onCenterRightButtonClick}>CR</button>
          <button localPosition={[-0.3, -0.5, 0]} textSize={0.08} roundness={0} onClick={this.onBottomLeftButtonClick}>BL</button>
          <button localPosition={[ 0.0, -0.5, 0]} textSize={0.08} roundness={0} onClick={this.onBottomCenterButtonClick}>BC</button>
          <button localPosition={[ 0.3, -0.5, 0]} textSize={0.08} roundness={0} onClick={this.onBottomRightButtonClick}>BR</button>
        </view>
        
      </view>
    );
  }
}

export { SceneLinearLayout };
