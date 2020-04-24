import React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App/App';
import { appStore } from './models/AppStore';

ReactDOM.render(<App appStore={appStore}/>, document.getElementById('root'));
