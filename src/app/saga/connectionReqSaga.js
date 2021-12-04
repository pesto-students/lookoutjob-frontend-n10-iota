import { call, put } from "redux-saga/effects";
import { apiCall } from "../api/apiCalls";
import { config } from "../../Constants/constants";
import { connectionsReqActions } from "../reducers/connectionReqReducer";

export default function* connectionReqSaga(params) {
  try {
    const response = yield call(apiCall,config.userUrl, "/user/"+params.payload.id+"/myrequest", params.payload,"GET");
    if (response.status === 200) {
         yield put(connectionsReqActions.fetchConnectionsReqSuccess(response.data));
      } 
      else {
        yield put(connectionsReqActions.fetchConnectionsReqFailure(response.data));
      }
  } catch (error) {
    yield put(connectionsReqActions.fetchConnectionsReqFailure(error));
  }
}
