import { call, put } from "redux-saga/effects";
import { apiCall } from "../../api/apiCalls";
import { config } from "../../../Constants/constants";

import { shortlistActions } from "../../reducers/reduiterReducers/shortlistReducer";

export default function* shortlistSaga(params) {
  try {
    const response = yield call(apiCall,config.recuiterUrl, "/shortlist", params.payload,params.payload.type);
    if (response.status === 200) {
         yield put(shortlistActions.fetchShortlistSuccess(response.data));
      } 
      else {
        yield put(shortlistActions.fetchShortlistFailure(response.data));
      }
  } catch (error) {
    yield put(shortlistActions.fetchShortlistFailure(error));
  }
}
