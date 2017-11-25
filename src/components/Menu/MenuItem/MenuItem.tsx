import * as React from 'react';
import * as style from './MenuItem.css';


export class MenuItem extends React.Component< { icon: string }, {}> {

  render() {
    return (
      <img src={this.props.icon} className={`${style.icon}`}/>
    );
  }
}