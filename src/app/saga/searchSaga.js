import { call, put } from "redux-saga/effects";
import { apiCall } from "../api/apiCalls";
import { config } from "../../Constants/constants";
import { searchActions } from "../reducers/searchReducer";
export default function* postSkillsSaga(params) {
  try {
    const response = yield call(apiCall,config.userUrl, "/user/search", params.payload,"POST");
    if (response.status === 200) {
         yield put(searchActions.fetchSearchSuccess(response.data));
      } 
      else {
        yield put(searchActions.fetchSearchFailure(response.data));
      }
  } catch (error) {
    yield put(searchActions.fetchSearchFailure(error));
  }
}
