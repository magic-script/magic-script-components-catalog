import React from 'react';
import { Alignment, AnchorPoint, Button, GridLayout, Image, LinearLayout, Orientation, Text, Toggle, View } from 'magic-script-components';
import { PaddingGroup } from '../utils/padding';
import { OptionGroup } from '../utils/optionGroup';

class SceneLinearLayout extends React.Component {
  constructor(props) {
    super(props);
    // The padding order is:  top, right, bottom, left
    this.state = { width: 0, height: 0, isHorizontal: false, padding: [0,0,0,0], alignment: Alignment.centerCenter };
  }

  onOrientationChanged = event => this.setState({ isHorizontal: event.On });
  onPaddingChanged = (padding) => this.setState({ padding });
  onAlignmentButtonClick = (alignment) => this.setState({ alignment });
  onOptionChanged = (selectedIndices) => this.setState({ width: selectedIndices.includes(0) ? 1 : 0, height: selectedIndices.includes(1) ? 1 : 0 });

  renderItem(color) {
    return (<Image debug={true} width={0.6} height={0.3} color={color}/>);
  }

  render () {
    const { width, height, padding, alignment, isHorizontal } = this.state;
    const orientation = isHorizontal ? Orientation.horizontal : Orientation.vertical;
  
    return (
      <View position={this.props.position}>
        <Toggle position={[0.3, 0.4, 0]} height={0.08} fontSize={0.08} on={isHorizontal} onToggleChanged={this.onOrientationChanged}>{'Horizontal'}</Toggle>

        <OptionGroup 
          anchorPoint={AnchorPoint.topCenter}
          multipleOptions={true}
          onOptionChanged={this.onOptionChanged}
          options={['1m width', '1m height']}
          position={[-0.4, 0.2, 0]}
          title={'Set size:'}
        />

        <PaddingGroup
          anchorPoint={AnchorPoint.topCenter}
          onPaddingChanged={this.onPaddingChanged}
          position={[0.4, 0.2, 0]}
          title={'Set items padding:'}
          values={[0.04, 0.04, 0.04, 0.04]}
        />
 
        <LinearLayout
          debug={true}
          width={width}
          height={height}
          orientation={orientation}
          anchorPoint={AnchorPoint.topCenter}
          defaultItemAlignment={alignment}
          defaultItemPadding={padding}
          position={[-0.4, -0.3, 0]}
        >
          {this.renderItem('blue')}
          {this.renderItem('green')}
          {this.renderItem('cyan')}
          {this.renderItem('red')}
          {this.renderItem('magenta')}
        </LinearLayout>

        <LinearLayout
          orientation={Orientation.vertical}
          anchorPoint={AnchorPoint.topCenter}
          defaultItemAlignment={Alignment.topCenter}
          defaultItemPadding={[0, 0, 0.02, 0]}
          position={[0.4, -1.3, 0]}
        >
          <Text position={[0, 0.05, 0]} fontSize={0.08} anchorPoint={AnchorPoint.bottomCenter}>Set items alignment:</Text>
          <GridLayout
            columns={3}
            defaultItemAlignment={Alignment.centerCenter}
          >
            <Button textSize={0.08} roundness={0} onClick={() => this.onAlignmentButtonClick(Alignment.topLeft)}>TL</Button>
            <Button fontSize={0.08} roundness={0} onClick={() => this.onAlignmentButtonClick(Alignment.topCenter)}>TC</Button>
            <Button fontSize={0.08} roundness={0} onClick={() => this.onAlignmentButtonClick(Alignment.topRight)}>TR</Button>
            <Button fontSize={0.08} roundness={0} onClick={() => this.onAlignmentButtonClick(Alignment.centerLeft)}>CL</Button>
            <Button fontSize={0.08} roundness={0} onClick={() => this.onAlignmentButtonClick(Alignment.centerCenter)}>CC</Button>
            <Button fontSize={0.08} roundness={0} onClick={() => this.onAlignmentButtonClick(Alignment.centerRight)}>CR</Button>
            <Button fontSize={0.08} roundness={0} onClick={() => this.onAlignmentButtonClick(Alignment.bottomLeft)}>BL</Button>
            <Button fontSize={0.08} roundness={0} onClick={() => this.onAlignmentButtonClick(Alignment.bottomCenter)}>BC</Button>
            <Button fontSize={0.08} roundness={0} onClick={() => this.onAlignmentButtonClick(Alignment.bottomRight)}>BR</Button>
          </GridLayout>
        </LinearLayout>
      </View>
    );
  }
}

export { SceneLinearLayout };
