import * as React from 'react';
import { observer } from 'mobx-react';
import { Logo } from '../Logo/Logo';
import * as style from './Menu.css'
import { MenuState } from '../../models/MenuState';
import { MenuButton } from '../MenuButton/MenuButton';

@observer
export class Menu extends React.Component<{ store: MenuState }, {}> {
    render() {
        return (
            <div className={style.menu}>
                <Logo/>
                <div className={style.menuButtons}>
                    { this.props.store.getItems().map(item => <MenuButton value={item} />) }
                </div>
            </div>
        );
    }
}
