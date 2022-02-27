import { call, put } from "redux-saga/effects";
import { apiCall } from "../api/apiCalls";
import { config } from "../../Constants/constants";
import { postSkillsActions } from "../reducers/postSkillsReducer";

export default function* postSkillsSaga(params) {
  try {
    const response = yield call(apiCall,config.userUrl, "/user/"+params.payload.id+"/skills", params.payload,"POST");
    if (response.status === 200) {
        yield put(postSkillsActions.fetchUserSkillsSuccess(response.data));
      } 
      else {
        postSkillsActions.fetchUserDetailsFailure(response.data);
      }
  } catch (error) {
    yield put(postSkillsActions.fetchUserDetailsFailure(error));
  }
}
