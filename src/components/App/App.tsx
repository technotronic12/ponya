import * as React from 'react';
import { observer } from 'mobx-react';
import { background } from './App.css';
import { Menu } from '../Menu/Menu';
import DevTools from 'mobx-react-devtools';
import { Hero } from '../Row/Hero';
import { Loader } from '../Loader/Loader';
import { AppStore } from '../../models/AppStore';
import { Row } from '../Row/Row';
import { menuStore } from '../../models/MenuStore';
import { MenuButton } from '../MenuButton/MenuButton';

@observer
export class App extends React.Component<{ appStore: AppStore }, {}> {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.appStore.toggleLoaded();
    }

    render() {
        return (
            <div className={background}>
                <Loader isLoaded={this.props.appStore.appIsLoaded}/>
                <MenuButton onClick={menuStore.toggleOpen} isOpen={menuStore.open}/>
                <Menu />
                <Hero />
                <Row />
                {/*<Login />*/}
                <DevTools   />
            </div>
        );
    }
}