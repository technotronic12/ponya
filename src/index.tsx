import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MenuState } from './models/MenuState';
import { App } from './components/App/App';

const menuState =  new MenuState(['Home', 'About']);

ReactDOM.render(<App menuState={menuState}/>, document.getElementById('root'));
