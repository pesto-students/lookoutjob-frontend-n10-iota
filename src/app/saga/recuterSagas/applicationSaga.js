import { call, put } from "redux-saga/effects";
import { apiCall } from "../../api/apiCalls";
import { config } from "../../../Constants/constants";
import { applicationActions } from "../../reducers/reduiterReducers/applicationReducer";


export default function* applicationSaga(params) {
  try {
    const response = yield call(apiCall,config.recuiterUrl, "/application", params.payload,"POST");
    if (response.status === 200) {
         yield put(applicationActions.fetchapplicationSuccess(response.data));
      } 
      else {
        yield put(applicationActions.fetchapplicationFailure(response.data));
      }
  } catch (error) {
    yield put(applicationActions.fetchapplicationFailure(error));
  }
}
