import * as React from 'react';
import * as style from './MenuItem.scss';

export class MenuItem extends React.Component< { icon: string }, {}> {

  render() {
    return (
      <img src={this.props.icon} className={`${style.icon}`}/>
    );
  }
}