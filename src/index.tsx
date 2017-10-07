import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MenuStore } from './models/MenuStore';
import { App } from './components/App/App';
import { menuItems } from './models/MenuItem';

const menuState =  new MenuStore(menuItems);

ReactDOM.render(<App menuState={menuState}/>, document.getElementById('root'));
