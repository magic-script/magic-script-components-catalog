import React from 'react';

class SceneToggleGroup extends React.Component {
  render () {
    return (
      <view localPosition={this.props.localPosition}>
          <toggleGroup allowMultipleOn={false} allowAllOff={false} allTogglesOff={false}>
            <linearLayout alignment={'center-center'}>
              <toggle type={'radio'} alignment={'center-center'} on={false} height={0.15}>Element 1</toggle>
              <toggle type={'radio'} alignment={'center-center'} on={true} height={0.15}>Element 2</toggle>
              <toggle type={'radio'} alignment={'center-center'} on={true} height={0.15}>Element 3</toggle>
            </linearLayout>
          </toggleGroup>
      </view>

    );
  }
}

export { SceneToggleGroup };
