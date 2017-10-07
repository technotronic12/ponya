import * as React from 'react';
import { observer } from 'mobx-react';
import { background, container } from './App.css';
import { Menu } from '../Menu/Menu';
import { MenuStore } from '../../models/MenuStore';
import DevTools from 'mobx-react-devtools';


@observer
export class App extends React.Component<{ menuState: MenuStore }, {}> {
    render() {
        return (
            <div className={background}>
                <div className={container}>
                    <Menu menuStore={this.props.menuState}/>
                </div>
                <DevTools />
            </div>
        );
    }
}