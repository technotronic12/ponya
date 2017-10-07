import * as React from 'react';
import { observer } from 'mobx-react';
import { Logo } from '../Logo/Logo';
import * as style from './Menu.css'
import { MenuStore } from '../../models/MenuStore';
import { MenuButton } from '../MenuButton/MenuButton';

@observer
export class Menu extends React.Component<{ menuStore: MenuStore }, {}> {
    render() {
        return (
            <div className={style.menu}>
                <Logo/>
                <div className={style.menuButtons}>
                    { this.props.menuStore.getItems().map(item => <MenuButton key={item} value={item} />) }
                </div>
            </div>
        );
    }
}
