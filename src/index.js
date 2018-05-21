import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';


import './index.css';
import App from './containers/App';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';

import vConsole from './vconsole';

window._store=store;
ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
