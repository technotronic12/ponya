import * as React from 'react';
import { observer } from 'mobx-react';
import * as _ from 'lodash';
import { menuStore } from '../../models/MenuStore';
import { MenuButton } from './MenuButton/MenuButton';
import { MenuItem } from './MenuItem/MenuItem';
import * as style from './Menu.scss';
import * as animations from '../../animation.scss';

@observer
export class Menu extends React.Component {

  static openCloseClass() {
    const openStyle = `${animations.fadein} ${style.open}`;
    const closedStyle = `${animations.fadeout} ${style.closed}`;
    return menuStore.isOpen() ? openStyle : closedStyle;
  }

  render() {
    return (
      <div className={`${style.menu}`}>
        <MenuButton onClick={menuStore.toggleOpen} isOpen={menuStore.open}/>
        <div className={`${style.container} ${Menu.openCloseClass()}`}>
          { _.map(menuStore.getItems(), item => <MenuItem key={item.index} icon={item.icon}/>) }
        </div>
      </div>
    );
  }
}
