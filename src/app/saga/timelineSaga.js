import { call, put } from "redux-saga/effects";
import { apiCall } from "../api/apiCalls";
import { config } from "../../Constants/constants";
import { timelineActions } from "../reducers/timelineReducer";


export default function* timelineSaga(params) {
  try {
    const response = yield call(apiCall,config.userUrl, "/user/"+params.payload.id+"/timeline", params.payload,"GET");
    if (response.status === 200) {
        yield put(timelineActions.fetchTimelineSuccess(response.data));
      } 
      else {
        yield put(timelineActions.fetchTimelineFailure(response.data));
      }
  } catch (error) {
    yield put(timelineActions.fetchTimelineFailure(error));
  }
}
