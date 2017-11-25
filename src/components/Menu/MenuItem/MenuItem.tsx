import * as React from 'react';
import * as style from './MenuItem.css';
import * as animations from '../../../animation.css';

export class MenuItem extends React.Component< { isOpen: boolean, icon: string }, {}> {

  openCloseClass() {
    const openStyles = `${animations.fadein} ${style.open}`;
    return this.props.isOpen ? openStyles : `${animations.fadeout} ${style.closed}`;
  }

  render() {
    return (
      <img src={this.props.icon} className={`${style.icon} ` + this.openCloseClass() }/>
    );
  }
}