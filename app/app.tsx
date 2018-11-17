/*** This is the entry file for the application*/
import '@babel/polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, AnyAction } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

/**
 * Main App Component
 */
import App from './components/App';

/**
 * Utils & Configurations
 */
import configureStore from './redux/configureStore';

export const history = createBrowserHistory();
// Create redux store with history
const store: Store<any, AnyAction> = configureStore({}, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App welcomeText={'React Redux TypeScipt BoilerPlate'} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);
