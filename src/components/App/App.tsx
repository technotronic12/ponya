import React from 'react'
import { observer } from 'mobx-react'
import { background } from './App.scss'
import { Menu } from '../Menu/Menu'
import { Hero } from '../Hero/Hero'
import { AppStore } from '../../models/AppStore'
import { About } from '../About/About'
import { DotLoader } from '../Loader/DotLoader'
import { Divider } from '../Divider/Divider'
// import DevTools from 'mobx-react-devtools';
import { Resume } from '../Resume/Resume'
import { Medium } from '../Medium/Medium'

@observer
export class App extends React.Component<{ appStore: AppStore }, {}> {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.appStore.toggleLoaded()
  }

  render() {
    return (
      <div className={background}>
        {/*<CircleLoader isLoaded={this.props.appStore.appIsLoaded} transitionDuration={2000}/>*/}
        <DotLoader
          isLoaded={this.props.appStore.appIsLoaded}
          dotColors={['#8c39fe', 'deeppink', 'white']}
          transitionDuration={1000}
        />
        <Menu />
        <Hero />
        <About />
        <Divider />
        <Resume />
        <Divider />
        <Medium />
        {/*<DevTools/>*/}
      </div>
    )
  }
}
