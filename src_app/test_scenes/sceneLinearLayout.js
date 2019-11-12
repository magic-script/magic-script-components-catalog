import React from 'react';

class SceneLinearLayout extends React.Component {

  renderButton({
    title,
    enabled = true,
    roundness = 0.0,
    textColor = [0, 1, 0, 1],
    textSize = 0.1,
    width = 0.0,
    height = 0.0,
    onClick = () => { },
  }) {
    return (
      <button
        enabled={enabled}
        textColor={textColor}
        textSize={textSize}
        roundness={roundness}
        width={width}
        height={height}
        onClick={onClick}
      >{title}</button>
    );
  }

  render() {
    return (
      <view localPosition={this.props.localPosition}>
        <linearLayout
          localPosition={[0, -0.2, 0]}
          alignment={'center-center'}
          defaultItemAlignment={'bottom-center'}
          orientation={'horizontal'}>

          <linearLayout
            defaultItemAlignment={'center-left'}
            defaultItemPadding={[0.07, 0, 0.07, 0]}>
            {this.renderButton({ textSize: 0.1, title: 'one' })}
            {this.renderButton({ textSize: 0.11, title: 'two' })}
            {this.renderButton({ textSize: 0.12, title: 'three' })}
          </linearLayout>

          <linearLayout
            defaultItemAlignment={'center-right'}
            defaultItemPadding={[0, 0.07, 0, 0.07]}>
            {this.renderButton({ textSize: 0.1, title: 'four' })}
            {this.renderButton({ textSize: 0.11, title: 'five' })}
            {this.renderButton({ textSize: 0.12, title: 'six' })}
          </linearLayout>

          <linearLayout
            defaultItemAlignment={'center-center'}>
            {this.renderButton({ textSize: 0.10, title: 'alpha' })}
            {this.renderButton({ textSize: 0.11, title: 'beta' })}
            {this.renderButton({ textSize: 0.12, title: 'gamma' })}
            {this.renderButton({ textSize: 0.13, title: 'delta' })}
            {this.renderButton({ textSize: 0.14, title: 'epsilon' })}
            {this.renderButton({ textSize: 0.15, title: 'zeta' })}
          </linearLayout>

        </linearLayout>
      </view>
    );
  }
}

export { SceneLinearLayout };
