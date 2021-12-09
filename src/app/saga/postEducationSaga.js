import { call, put } from "redux-saga/effects";
import { apiCall } from "../api/apiCalls";
import { config } from "../../Constants/constants";
import { userEducationActions } from "../reducers/educationReducer";



export default function* postEducationSaga(params) {
  try {
    const response = yield call(apiCall,config.userUrl, "/user/"+params.payload.id+"/education", params.payload,"POST");
    if (response.status === 200) {
        yield put(userEducationActions.postUserEducationSuccess(response.data));
      } 
      else {
        userEducationActions.fetchUserEducationFailure(response.data);
      }
  } catch (error) {
    yield put(userEducationActions.fetchUserEducationFailure(error));
  }
}
