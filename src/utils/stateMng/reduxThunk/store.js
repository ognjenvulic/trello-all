import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

export default function ReduxThunkStore(props) {
  const { children } = props;

  const enhancers = [];

  // This is for Redux developer tools in browser
  if (process.env.NODE_ENV === 'development') {
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    }
  }

  //Creating redux store with initial state and enhancers
  const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(reduxThunk), ...enhancers)
  );

  return <Provider store={store}>{children}</Provider>;
}
