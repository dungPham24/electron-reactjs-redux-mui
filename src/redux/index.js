import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import * as ConversationRedux from "./conversation.redux";

/* ------------- Assemble The Reducers ------------- */
export const appReducer = combineReducers({
  conversationRedux: ConversationRedux.reducer,
});

export const rootReducer = (state, action) => {
  // Action logout
  // if (action.type === KeyConstant.LOGOUT_REQUEST) {
  //   state = undefined;
  // }
  return appReducer(state, action);
};

/* ------------- Redux Configuration ------------- */

/* ------------- Saga Middleware ------------- */
const sagaMiddleware = createSagaMiddleware();

// Create store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// kick off root saga
sagaMiddleware.run(rootSaga);

export default store;
