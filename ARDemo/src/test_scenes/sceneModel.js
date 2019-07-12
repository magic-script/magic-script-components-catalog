import React from 'react';

class SceneModel extends React.Component {
    render () {
        return (
            <view localPosition={this.props.localPosition}>
                <model 
                    modelPath={'resources/GlassVase.glb'}
                    localScale={[2,2,2]}
                    localPosition={[0,-0.5,0]}
                />
            </view>
        );
    }
}

export { SceneModel };
