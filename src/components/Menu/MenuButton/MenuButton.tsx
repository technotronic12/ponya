import * as React from 'react';
import * as style from './MenuButton.scss';

// < {props}, {state}>
export class MenuButton extends React.Component<{ onClick, isOpen }, {}> {

  toggleOpen = () => {
    this.props.onClick();
  };

  render() {
    const openCloseClass = this.props.isOpen ? style.open : '';
    return (
      <div className={`${style.container} ${openCloseClass}`} onClick={this.toggleOpen}>
        <div className={`${style.bar1} ${openCloseClass}`}/>
        <div className={`${style.bar2} ${openCloseClass}`}/>
        <div className={`${style.bar3} ${openCloseClass}`}/>
      </div>
    );
  }
}
