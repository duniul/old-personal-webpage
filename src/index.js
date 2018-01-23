import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import './main.css';

const rootElement = document.getElementById('root');
const renderApp = AppComponent => {
    ReactDOM.render(<AppComponent />, rootElement);
};

renderApp(Main);

// TODO use service worker with HTTPS
// registerServiceWorker();

if (module.hot) {
    // do not change the require string to a variable, for some reason it breaks hot reloading
    module.hot.accept('./Main', () => {
        const NewRoot = require('./Main').default;
        renderApp(NewRoot);
    });
}
