import * as React from 'react';
import { observer } from 'mobx-react';
import * as style from './Menu.css';
import { menuStore } from '../../models/MenuStore';
import { MenuButton } from '../MenuButton/MenuButton';

@observer
export class Menu extends React.Component {
    render() {
        return (
          <div className={style.menu}>
              <div className={style.container}>
                  <MenuButton onClick={menuStore.toggleOpen} isOpen={menuStore.open}/>
                  <div className={style.buttonsContainer}>

                  </div>
              </div>
          </div>
        );
    }
}
