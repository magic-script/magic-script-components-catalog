import React from 'react';
import { Alignment, AlignmentGroup } from '../utils/alignment';
import { PaddingGroup } from '../utils/padding';

class SceneGridLayout extends React.Component {
  constructor(props) {
    super(props);
    // The padding order is:  top, right, bottom, left
    this.state = { width: 0, height: 0, padding: [0,0,0,0], alignment: Alignment.centerCenter };
  }

  onItemsAlignmentChanged = (alignment) => this.setState({ alignment });
  onPaddingChanged = (padding) => this.setState({ padding });  
  onWidthToogleChanged = (event) => this.setState({ width: event.On ? 1 : 0 });
  onHeightToogleChanged = (event) => this.setState({ height: event.On ? 1 : 0 });

  render () {
    const { width, height, padding, alignment } = this.state;
    const columns = 3;
    return (
      <view localPosition={this.props.localPosition}>

        <view localPosition={[0, -0.1, 0]}>
          <AlignmentGroup 
            alignment={alignment}
            localPosition={[-0.75, 0, 0]}
            onAlignmentChanged={this.onItemsAlignmentChanged}
            title={'Set items alignment:'} 
          />

          <PaddingGroup 
            values={[0.04, 0.04, 0.04, 0.04]}
            localPosition={[0.1, 0, 0]}
            onPaddingChanged={this.onPaddingChanged}
            title={'Set items padding:'} 
          />

          <view localPosition={[0, -0.4, 0]} >
            <text localPosition={[0, 0, 0]} alignment={'center-center'} textSize={0.075}>Set size:</text>
            <toggle type={'checkbox'} localPosition={[-0.1, -0.1, 0]} textSize={0.075} height={0.1} on={width == 1} onToggleChanged={this.onWidthToogleChanged}>width: 1m</toggle>
            <toggle type={'checkbox'} localPosition={[-0.1, -0.2, 0]} textSize={0.075} height={0.1} on={height == 1} onToggleChanged={this.onHeightToogleChanged}>height: 1m</toggle>
          </view>

          <line color={[1,1,1,1]} points={[[0.05, 0.1, 0], [0.05, -0.3, 0]]} />
          <line color={[1,1,1,1]} points={[[-0.75, -0.3, 0], [0.8, -0.3, 0]]} />
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
          localPosition={[0, -0.9, 0]}
        >
         
          <text debug textSize={0.15}>Item 1</text>
          <text debug textSize={0.15} alignment={'bottom-right'} textColor={[1,0,0,1]}>Lorem ipsum dolor</text>
          <text debug textSize={0.3} localScale={[0.5, 0.5, 1]}>Item 3</text>
          <button debug width={1} height={0.4} localScale={[0.3, 0.3, 1]}>Scaled</button>
          <model debug alignment={'center-left'} localScale={[0.2, 0.2, 0.2]} modelPath={require('../../resources/BoxTextured.glb')} />
          <image debug width={0.5} height={0.4} alignment={'bottom-left'} localScale={[0.5, 0.5, 0.5]} color={[0,0,1,1]}/>
          <image debug width={0.25} height={0.2} color={[0,1,0,1]}/>
          <textEdit debug width={0.35} height={0.2} text={'text edit'} hintColor={[1,0,0,1]} multiline/>
          <spinner debug height={0.15} localPosition={[0.5, 0, 0]}/>
          <slider debug width={0.4} height={0.08} />
          <toggle debug textSize={0.08} height={0.15}>Toggle</toggle>
          <gridLayout debug defaultItemAlignment={'center-center'} columns={2}>
              <image width={0.1} height={0.1} color={[1,1,0.5,1]}/>
              <image width={0.1} height={0.1} color={[1,0.5,1,1]}/>
              <image width={0.1} height={0.1} color={[0.5,1,1,1]}/>
              <image width={0.1} height={0.1} color={[1,1,1,1]}/>
          </gridLayout>

        </gridLayout>
      </view>
    );
  }
}

export { SceneGridLayout };
