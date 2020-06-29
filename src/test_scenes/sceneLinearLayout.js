import React from 'react';
import { Button, View, Text, Image, Toggle, LinearLayout } from 'magic-script-components';

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
      <Image debug={true} width={0.6} height={0.3} color={color}/>
    );
  }

  render () {
    const { width, height, padding, alignment, isHorizontal } = this.state;
    const orientation = isHorizontal ? 'horizontal' : 'vertical';
  
    return (
      <View position={this.props.position}>
        <Toggle position={[0.3, 0.4, 0]} height={0.08} fontSize={0.08} on={isHorizontal} onToggleChanged={this.onOrientationChanged}>{'Horizontal'}</Toggle>
        <View position={[-0.38, 0.2, 0]} >
            <Text position={[0, 0, 0]} anchorPoint={'center-center'} fontSize={0.08}>Set size:</Text>
            <Toggle position={[0.2, -0.1, 0]} fontSize={0.08} height={0.1} on={width == 1} onToggleChanged={this.onWidthToogleChanged}>1m width</Toggle>
            <Toggle position={[0.2, -0.2, 0]} fontSize={0.08} height={0.1} on={height == 1} onToggleChanged={this.onHeightToogleChanged}>1m height</Toggle>
        </View> 

        <View position={[0.23, 0.2, 0]} >
          <Text position={[0, 0, 0]} fontSize={0.08} anchorPoint={'center-left'}>Set items padding:</Text>
          <Toggle position={[0.4, -0.1, 0]} fontSize={0.08} height={0.1} on={padding[0] > 0} onToggleChanged={this.onTopToggleChanged}>top</Toggle>
          <Toggle position={[0.4, -0.2, 0]} fontSize={0.08} height={0.1} on={padding[1] > 0} onToggleChanged={this.onRightToggleChanged}>right</Toggle>
          <Toggle position={[0.4, -0.3, 0]} fontSize={0.08} height={0.1} on={padding[2] > 0} onToggleChanged={this.onBottomToggleChanged}>bottom</Toggle>
          <Toggle position={[0.4, -0.4, 0]} fontSize={0.08} height={0.1} on={padding[3] > 0} onToggleChanged={this.onLeftToggleChanged}>left</Toggle>
        </View>
 
         
        <LinearLayout
          debug={true}
          width={width}
          height={height}
          orientation={orientation}
          anchorPoint={'top-center'}
          defaultItemAlignment={alignment}
          defaultItemPadding={padding}
          position={[0, -0.3, 0]}
        >
            {this.renderItem('blue')}
            {this.renderItem('green')}
            {this.renderItem('cyan')}
            {this.renderItem('red')}
            {this.renderItem('magenta')}
          
        </LinearLayout>

        <View position={[0, -2.2, 0]}>
          <Text position={[0, 0.05, 0]} fontSize={0.08} anchorPoint={'bottom-center'}>Set items alignment:</Text>
          <Button position={[-0.3, -0.1, 0]} textSize={0.08} roundness={0} onClick={this.onTopLeftButtonClick}>TL</Button>
          <Button position={[ 0.0, -0.1, 0]} fontSize={0.08} roundness={0} onClick={this.onTopCenterButtonClick}>TC</Button>
          <Button position={[ 0.3, -0.1, 0]} fontSize={0.08} roundness={0} onClick={this.onTopRightButtonClick}>TR</Button>
          <Button position={[-0.3, -0.3, 0]} fontSize={0.08} roundness={0} onClick={this.onCenterLeftButtonClick}>CL</Button>
          <Button position={[ 0.0, -0.3, 0]} fontSize={0.08} roundness={0} onClick={this.onCenterCenterButtonClick}>CC</Button>
          <Button position={[ 0.3, -0.3, 0]} fontSize={0.08} roundness={0} onClick={this.onCenterRightButtonClick}>CR</Button>
          <Button position={[-0.3, -0.5, 0]} fontSize={0.08} roundness={0} onClick={this.onBottomLeftButtonClick}>BL</Button>
          <Button position={[ 0.0, -0.5, 0]} fontSize={0.08} roundness={0} onClick={this.onBottomCenterButtonClick}>BC</Button>
          <Button position={[ 0.3, -0.5, 0]} fontSize={0.08} roundness={0} onClick={this.onBottomRightButtonClick}>BR</Button>
        </View>
        
      </View>
    );
  }
}

export { SceneLinearLayout };
