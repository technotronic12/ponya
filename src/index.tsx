import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MenuStore } from './models/MenuState';
import { App } from './components/App/App';

const menuState =  new MenuStore(['About', 'Home']);

ReactDOM.render(<App menuState={menuState}/>, document.getElementById('root'));
