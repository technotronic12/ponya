import * as React from 'react';
import { observer } from 'mobx-react';
import { backgroud } from './App.css';
import { Menu } from '../Menu/Menu';
import { AppState } from './AppState';

@observer
export class App extends React.Component<{ appState: AppState }, {}> {
    render() {
        return (
            <div className={backgroud}>
                <Menu/>
                {/*<DevTools />*/}
            </div>
        );
    }
}