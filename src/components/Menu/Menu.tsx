import * as React from 'react';
import { observer } from 'mobx-react';
import { Logo } from '../Logo/Logo';
import * as style from './Menu.css'

@observer
export class Menu extends React.Component {
    render() {
        return (
            <div className={style.menu}>
                <Logo/>
                <div className="menu-buttons"/>
            </div>
        );
    }
}
