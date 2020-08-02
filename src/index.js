import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import './base.css';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

const renderApp = (AppComponent) => {
  ReactDOM.render(<AppComponent />, rootElement);
};

renderApp(App);
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./App', () => {
    const NewRoot = require('./App').default;
    renderApp(NewRoot);
  });
}
