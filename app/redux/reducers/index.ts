/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers, Reducer, Action } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../../utils/history';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers: object = {}): Reducer<{}, Action<any>> {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  return rootReducer;
}
