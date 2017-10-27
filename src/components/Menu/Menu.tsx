import * as React from 'react';
import { observer } from 'mobx-react';
import * as style from './Menu.css';
import { menuStore } from '../../models/MenuStore';

@observer
export class Menu extends React.Component {
    render() {
        return (
          <div className={`${style.menu} ` + (menuStore.open ? style.open : '')}>
              <div className={style.container}>

              </div>
          </div>
        );
    }
}
