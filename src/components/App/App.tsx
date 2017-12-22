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
    setTimeout(() => {
      this.props.appStore.toggleLoaded();
    }, 1500);
  }

  render() {
    return (
      <div className={background}>
        {/*<Loader isLoaded={this.props.appStore.appIsLoaded}/>*/}
        {this.props.appStore.appIsLoaded() ? null :
          <DotLoader isLoaded={this.props.appStore.appIsLoaded} colors={['#8c39fe', 'deeppink', 'white']}/>}
        <Menu/>
        <Hero/>
        <About/>
        <DevTools/>
      </div>
    );
  }
}