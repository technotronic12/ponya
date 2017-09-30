import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Menu } from './components/Menu/Menu';
import { backgroud } from './App.css';


class AppState {
    // @observable timer = 0;
    //
    // constructor() {
    //     setInterval(() => {
    //         this.timer += 1;
    //     }, 1000);
    // }
    //
    // resetTimer() {
    //     this.timer = 0;
    // }
}

@observer
class App extends React.Component<{appState: AppState}, {}> {
    render() {
        // const style = { 'background': '#b1c8b8',  };
        return (
            <div className={backgroud}>
              <Menu></Menu>
               {/*<DevTools />*/}
            </div>
        );
     }
}

const appState =  new AppState();
{/*ReactDOM.render(<TimerView appState={appState} />, document.getElementById('root'));*/}
ReactDOM.render(<App appState={appState}/>, document.getElementById('root'));
