import React from 'react';
import { Spinner } from 'magic-script-components';

class SceneGridLayout extends React.Component {
  constructor(props) {
    super(props);
    // The padding order is:  top, right, bottom, left
    this.state = { width: 0, height: 0, padding: [0,0,0,0], alignment: 'center-center' };
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

  render () {
    const { width, height, padding, alignment } = this.state;
    const columns = 3;
    return (
      <view localPosition={this.props.localPosition}>

        <view localPosition={[-0.5, 0, 0]} >
            <text localPosition={[0, 0, 0]} alignment={'center-center'} textSize={0.08}>Set size:</text>
            <toggle localPosition={[0.2, -0.1, 0]} textSize={0.08} height={0.1} on={width == 1} onToggleChanged={this.onWidthToogleChanged}>1m width</toggle>
            <toggle localPosition={[0.2, -0.2, 0]} textSize={0.08} height={0.1} on={height == 1} onToggleChanged={this.onHeightToogleChanged}>1m height</toggle>
        </view>

        <view localPosition={[0.3, 0, 0]} >
          <text localPosition={[0, 0, 0]} textSize={0.08} alignment={'center-left'}>Set items padding:</text>
          <toggle localPosition={[0.4, -0.1, 0]} textSize={0.08} height={0.1} on={padding[0] > 0} onToggleChanged={this.onTopToggleChanged}>top</toggle>
          <toggle localPosition={[0.4, -0.2, 0]} textSize={0.08} height={0.1} on={padding[1] > 0} onToggleChanged={this.onRightToggleChanged}>right</toggle>
          <toggle localPosition={[0.4, -0.3, 0]} textSize={0.08} height={0.1} on={padding[2] > 0} onToggleChanged={this.onBottomToggleChanged}>bottom</toggle>
          <toggle localPosition={[0.4, -0.4, 0]} textSize={0.08} height={0.1} on={padding[3] > 0} onToggleChanged={this.onLeftToggleChanged}>left</toggle>
        </view>

         {/* 
            Explanation:
            - 'localPosition' of a child should not affect its position inside the grid, because it's managed by the parent,
            - 'alignment' property of a child should also have no effect (layout manages position of children)
         */}

        <gridLayout
          debug={true}
          width={width}
          height={height}
          alignment={'top-center'}
          columns={columns}
          defaultItemAlignment={alignment}
          defaultItemPadding={padding}
          localPosition={[0, -0.7, 0]}
        >
         
          <text debug={true} textSize={0.15}>Item 1</text>
          <text debug={true} textSize={0.15} alignment={'bottom-right'} textColor={[1,0,0,1]}>Lorem ipsum dolor</text>
          <text debug={true} textSize={0.3} localScale={[0.5, 0.5, 1]}>Item 3</text>
          <button debug={true} width={1} height={0.4} localScale={[0.3, 0.3, 1]}>Scaled</button>
          <model debug={true} alignment={'center-left'} localScale={[0.2, 0.2, 0.2]} modelPath={require('../../resources/BoxTextured.glb')} />
          <image debug={true} width={0.5} height={0.4} alignment={'bottom-left'} localScale={[0.5, 0.5, 0.5]} color={[0,0,1,1]}/>
          <image debug={true} width={0.25} height={0.2} color={[0,1,0,1]}/>
          <textEdit debug={true} width={0.35} height={0.2} text={'text edit'} hintColor={[1,0,0,1]} multiline/>
          <spinner debug={true} height={0.15} localPosition={[0.5, 0, 0]}/>
          <slider width={0.4} height={0.08} />
          <toggle textSize={0.08} height={0.15}>Toggle</toggle>
          <gridLayout defaultItemAlignment={'center-center'} columns={2}>
              <image width={0.1} height={0.1} color={[1,1,0.5,1]}/>
              <image width={0.1} height={0.1} color={[1,0.5,1,1]}/>
              <image width={0.1} height={0.1} color={[0.5,1,1,1]}/>
              <image width={0.1} height={0.1} color={[1,1,1,1]}/>
          </gridLayout>

        </gridLayout>

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

export { SceneGridLayout };
