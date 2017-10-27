import * as React from 'react';
import * as style from './MenuButton.css';
// < {props}, {state}>
export class MenuButton extends React.Component<{ onClick, isOpen }, {}> {

    constructor() {
        super();
        this.state = { open: false };
    }

    toggleOpen = () => {
        this.props.onClick();
    };

    render() {
        return (
          <div className={`${style.container}`} onClick={this.toggleOpen}>
              <div className={`${style.bar1} ` + (this.props.isOpen ? style.change : '')}></div>
              <div className={`${style.bar2} ` + (this.props.isOpen ? style.change : '')}></div>
              <div className={`${style.bar3} ` + (this.props.isOpen ? style.change : '')}></div>
          </div>
        );
    }
}
