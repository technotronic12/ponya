import * as React from 'react';
import { observer } from 'mobx-react';
import * as _ from 'lodash';
import { menuStore } from '../../models/MenuStore';
import { MenuButton } from './MenuButton/MenuButton';
import { MenuItem } from './MenuItem/MenuItem';
import * as style from './Menu.css';

@observer
export class Menu extends React.Component {

  render() {
    return (
      <div className={`${style.menu} ` + (menuStore.open ? style.open : '')}>
        <MenuButton onClick={menuStore.toggleOpen} isOpen={menuStore.open}/>
        <div className={`${style.container}`}>
          { _.map(menuStore.getItems(), item =>
            <MenuItem key={item.index} isOpen={menuStore.isOpen()} icon={item.icon}/>)}
        </div>
      </div>
    );
  }
}
