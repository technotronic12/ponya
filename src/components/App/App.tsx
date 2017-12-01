import * as React from 'react';
import { observer } from 'mobx-react';
import { background } from './App.scss';
import { Menu } from '../Menu/Menu';
import DevTools from 'mobx-react-devtools';
import { Hero } from '../Hero/Hero';
import { Loader } from '../Loader/Loader';
import { AppStore } from '../../models/AppStore';
import { About } from '../About/About';

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
        <Menu/>
        <Hero/>
        <About/>
        <DevTools/>
      </div>
    );
  }
}