import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppState } from './components/App/AppState';
import { App } from './components/App/App';

const appState =  new AppState();
{/*ReactDOM.render(<TimerView appState={appState} />, document.getElementById('root'));*/}
ReactDOM.render(<App appState={appState}/>, document.getElementById('root'));
