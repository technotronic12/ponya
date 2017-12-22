import * as React from 'react';
import { observer } from 'mobx-react';
import { background } from './App.scss';
import { Menu } from '../Menu/Menu';
import DevTools from 'mobx-react-devtools';
import { Hero } from '../Hero/Hero';
import { AppStore } from '../../models/AppStore';
import { About } from '../About/About';
import { DotLoader } from '../Loader/DotLoader';
import { CSSTransitionGroup } from 'react-transition-group'

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
        {/*<CircleLoader isLoaded={this.props.appStore.appIsLoaded} transitionDuration={2000}/>*/}
        <DotLoader isLoaded={this.props.appStore.appIsLoaded} dotColors={['#8c39fe', 'deeppink', 'white']} transitionDuration={2000}/>
        <Menu/>
        <Hero/>
        <About/>
        <DevTools/>
      </div>
    );
  }
}