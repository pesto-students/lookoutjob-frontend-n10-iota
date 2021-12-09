import { call, put } from "redux-saga/effects";
import { apiCall } from "../api/apiCalls";
import { config } from "../../Constants/constants";
import { postDetailsActions } from "../reducers/postDetailsReducer";



export default function* postDetailsSaga(params) {
  try {
    console.log(params)
    const response = yield call(apiCall,config.userUrl, "/user/"+params.payload.id+"/details", params.payload,"POST");
    if (response.status === 200) {
        yield put(postDetailsActions.postUserEducationSuccess(response.data));
      } 
      else {
        postDetailsActions.fetchUserDetailsFailure(response.data);
      }
  } catch (error) {
    yield put(postDetailsActions.fetchUserDetailsFailure(error));
  }
}
