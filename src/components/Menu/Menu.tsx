import * as React from 'react';
import { observer } from 'mobx-react';
import { Logo } from '../Logo/Logo';
import * as style from './Menu.css';
import { menuStore } from '../../models/MenuStore';
import { MenuButton } from '../MenuButton/MenuButton';

@observer
export class Menu extends React.Component {
    // TODO: show only after hero
    render() {
        return (
          <div className={style.menu}>
              <div className={style.menuContainer}>
                  <Logo/>
                  <div className={style.menuButtons}>
                      {
                          menuStore.getItems()
                            .sort((b, a) => a.index - b.index)
                            .map(item => <MenuButton key={item.text} item={item} onClick={ menuStore.selectItem }/>)
                      }
                  </div>
              </div>
          </div>
        );
    }
}
