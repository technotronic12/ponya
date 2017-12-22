import * as React from 'react';
import { observer } from 'mobx-react';
import * as style from './DotLoader.scss';
import { Dot } from './Dot/Dot';

@observer
export class DotLoader extends React.Component<{ isLoaded: () => Boolean, colors: Array<String> }, { index: number }> {

  interval;

  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  componentWillMount() {
    this.interval = setInterval(() => {
      this.setState({ index: (this.state.index + 1) % this.props.colors.length });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div id={style.wrapper} className={this.props.isLoaded() ? style.fadeout : ''}>
        <div id={style.dotsWrapper}>
          {this.props.colors.map((color, id) => <Dot key={id} color={color} big={this.state.index == id}/>)}
        </div>
      </div>
    )
  }
}