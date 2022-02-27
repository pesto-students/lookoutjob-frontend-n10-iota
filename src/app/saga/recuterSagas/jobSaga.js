import { call, put } from "redux-saga/effects";
import { apiCall } from "../../api/apiCalls";
import { config } from "../../../Constants/constants";

import { jobActions } from "../../reducers/reduiterReducers/jobsReducer";

export default function* jobSaga(params) {
  try {
    const response = yield call(apiCall,config.recuiterUrl, "/jobs", params.payload,params.payload.type);
    if (response.status === 200) {
         yield put(jobActions.fetchjobSuccess(response.data));
      } 
      else {
        yield put(jobActions.fetchjobFailure(response.data));
      }
  } catch (error) {
    yield put(jobActions.fetchjobFailure(error));
  }
}
