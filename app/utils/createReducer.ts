import { AnyAction, Reducer } from 'redux';

interface Handlers {
  [actionType: string]: (
    state: object | Array<object>,
    action: AnyAction,
  ) => {};
}

export const createReducer = ( initialState: object | Array<object>, handlers: Handlers): Reducer => {
  return (state = initialState, action: AnyAction) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};
