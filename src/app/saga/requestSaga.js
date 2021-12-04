import { call, put } from "redux-saga/effects";
import { apiCall } from "../api/apiCalls";
import { config } from "../../Constants/constants";
import { requestActions } from "../reducers/requestReducer";

export default function* requestSaga(params) {
  try {
    const response = yield call(apiCall,config.userUrl, "/user/"+params.payload.id+"/"+params.payload.endpoint, params.payload,"POST");
    if (response.status === 200) {
         yield put(requestActions.fetchRequestSuccess(response.data));
      } 
      else {
        yield put(requestActions.fetchConnectionsReqFailure(response.data));
      }
  } catch (error) {
    yield put(requestActions.fetchRequestFailure(error));
  }
}
