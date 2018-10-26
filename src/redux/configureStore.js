import { compose, createStore } from 'redux';
import { initialState, reducer } from './reducer';

const configureProdStore = () => {
  return createStore(reducer, initialState);
};

const configureDevStore = () => {
  const store = createStore(
    reducer,
    initialState,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
  );

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

const configureStore = () =>
  process.env.NODE_ENV !== 'production' ? configureDevStore() : configureProdStore();

export default configureStore;
