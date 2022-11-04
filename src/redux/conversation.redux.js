import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  testApi: ["data"],

  conversationSet: ["data"],
  conversationReset: [],
});

export const ConversationTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isFetching: false,
};

/* ------------- Reducers ------------- */

export const request = (state = INITIAL_STATE, action) => {
  let data = action.data || {};
  return {
    ...state,
    ...data,
    isFetching: true,
  };
};

export const set = (state = INITIAL_STATE, action) => {
  let data = action.data || {};
  return {
    ...state,
    ...data,
  };
};

export const reset = () => INITIAL_STATE;

/* ------------- Mapping ------------- */
export const HANDLERS = {
  [Types.TEST_API]: request,

  [Types.CONVERSATION_SET]: set,
  [Types.CONVERSATION_RESET]: reset,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
