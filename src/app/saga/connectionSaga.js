import { call, put } from "redux-saga/effects";
import { apiCall } from "../api/apiCalls";
import { config } from "../../Constants/constants";
import { connectionsActions } from "../reducers/connectionReducer";

export default function* connectionSaga(params) {
  try {
    const response = yield call(apiCall,config.userUrl, "/user/"+params.payload.id+"/connections", params.payload,"GET");
    if (response.status === 200) {
         yield put(connectionsActions.fetchConnectionsSuccess(response.data));
      } 
      else {
        yield put(connectionsActions.fetchConnectionsFailure(response.data));
      }
  } catch (error) {
    yield put(connectionsActions.fetchConnectionsFailure(error));
  }
}
