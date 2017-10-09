import * as React from 'react';
import { observer } from 'mobx-react';
import { background, container } from './App.css';
import { Menu } from '../Menu/Menu';
import DevTools from 'mobx-react-devtools';
import { Hero } from '../Row/Hero';
import { Loader } from '../Loader/Loader';
import { AppStore } from '../../models/AppStore';

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
                <div className={container}>
                    <Menu menuStore={this.props.appStore.menuStore}/>
                </div>
                <Hero />
                <DevTools />
            </div>
        );
    }
}