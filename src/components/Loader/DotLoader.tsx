import * as React from 'react';
import { Transition, TransitionGroup } from 'react-transition-group'
import * as style from './DotLoader.scss';
import { Dot } from './Dot/Dot';
import Fader from '../Fader/Fader';

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
    return (
      <Fader show={!this.props.isLoaded()} transitionDuration={this.props.transitionDuration} isFixed={true} zIndex={1000}>
        <div id={style.wrapper}>
          {this.props.dotColors.map((color, id) => <Dot key={id} color={color} big={this.state.index == id}/>)}
        </div>
      </Fader>
    )
  }
}