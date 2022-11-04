import { call, put } from "redux-saga/effects";
import { ConversationService } from "services";
import ConversationAction from "../redux/conversation.redux";

export function* testApiSagas(action) {
  try {
    const { data } = action;

    let response = yield call(ConversationService.testApiService, data);
    console.log(response);

    if (response.status === 200) {
      yield put(
        ConversationAction.fileSet({
          isGetFileSuccess: true,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}
