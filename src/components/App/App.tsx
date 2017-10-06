import * as React from 'react';
import { observer } from 'mobx-react';
import { backgroud } from './App.css';
import { Menu } from '../Menu/Menu';
import { MenuState } from '../../models/MenuState';
import DevTools from 'mobx-react-devtools';


@observer
export class App extends React.Component<{ menuState: MenuState }, {}> {
    render() {
        return (
            <div className={backgroud}>
                <Menu store={this.props.menuState}/>
                <DevTools />
            </div>
        );
    }
}