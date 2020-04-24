import React from 'react';
import { observer } from 'mobx-react';
import style from './CircleLoader.scss';
import Fader from '../Fader/Fader';

@observer
export class CircleLoader extends React.Component<{ isLoaded: () => Boolean, transitionDuration: number }, {}> {
  render() {
    return (
      <Fader show={!this.props.isLoaded()} transitionDuration={this.props.transitionDuration} isFixed={true} zIndex={2000}>
        <div id={style.wrapper}>
          <div id={style.loader}/>
        </div>
      </Fader>
    )
  }
}
