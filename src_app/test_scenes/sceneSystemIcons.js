import React from 'react';
import { SystemIcons } from '../utils/systemIcons';

class SceneSystemIcons extends React.Component {
  renderIcons() {
    return SystemIcons.map((icon, index) => <image key={index} icon={icon} height={0.08} />);
  }

  render () {
    return (
      <view localPosition={[0, 1.0, 0]}>
        <gridLayout
          debug={true}
          alignment={'top-center'}
          columns={14}
          defaultItemPadding={[0.03, 0.008, 0.03, 0.008]}
        >
          {this.renderIcons()}
        </gridLayout>
        
      </view>
    );
  }
}

export { SceneSystemIcons };
