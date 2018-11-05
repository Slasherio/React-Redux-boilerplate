/**
 * Create the store
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createReducer from '../redux/reducers';

export default function configureStore(
  initialState: object = {},
  history: any,
) {
  // Create the store with two middlewares
  // 1. thunk-middleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [thunk, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];
  const windowIfDefined =
    typeof window === 'undefined' ? null : (window as any);
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof windowIfDefined === 'object' &&
    windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  if (module.hot) {
    module.hot.accept('../redux/reducers', () => {
      store.replaceReducer(createReducer({}));
    });
  }

  return store;
}
