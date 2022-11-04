/**
 * Saga index: connects action type and saga
 */

import { all, takeLatest } from "redux-saga/effects";
import { ConversationTypes } from "../redux/conversation.redux";
import { testApiSagas } from "./conversation.saga";

/* ------------- Types ------------- */

/* ------------- Sagas ------------- */

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  // yield call(watchRequests);
  // eslint-disable-next-line no-sparse-arrays
  yield all([
    // Conversation
    takeLatest(ConversationTypes.TEST_API, testApiSagas),
  ]);
}
