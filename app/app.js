/**
 * This is the entry file for the application
 */
import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

/**Main App Component */
import App from "./components/App";

/**Utils & Configurations */
import history from "./utils/history";
import configureStore from "./config/configureStore";

// Create redux store with history
const store = configureStore({}, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app"),
);
