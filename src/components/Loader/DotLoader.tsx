import * as React from 'react';
import { Transition } from 'react-transition-group'
import * as style from './DotLoader.scss';
import { Dot } from './Dot/Dot';

export class DotLoader extends React.Component<{ isLoaded: () => Boolean, dotColors: Array<String>, transitionDuration: number }, { index: number }> {

  interval;
  dotAnimationTime = 500;

  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  componentWillMount() {
    this.interval = setInterval(() => {
      this.setState({ index: this.animateDotIndex() });
    }, this.dotAnimationTime);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  private animateDotIndex() {
    return (this.state.index + 1) % this.props.dotColors.length;
  }

  render() {
    const { transitionDuration } = this.props;

    const defaultStyle = {
      transition: `all ${transitionDuration}ms ease-in-out`,
    };

    const transitionStyles = {
      entered: { opacity: 1 },
      exiting: { opacity: 0 },
    };

    return (
      <Transition in={!this.props.isLoaded()} timeout={transitionDuration} unmountOnExit={true}>
        {state => (
          <div id={style.wrapper} style={{ ...defaultStyle, ...transitionStyles[state] }}>
            <div id={style.dotsWrapper}>
              {this.props.dotColors.map((color, id) => <Dot key={id} color={color} big={this.state.index == id}/>)}
            </div>
          </div>
        )}
      </Transition>
    )
  }
}