import { call, put } from "redux-saga/effects";
import { apiCall } from "../api/apiCalls";
import { config } from "../../Constants/constants";
import {createUserActions} from "../reducers/createUserReducer";

export default function* createUserSaga(params) {
  try {
    const response = yield call(apiCall,config.userUrl, "/user/", params.payload,"POST");
    if (response.status === 200) {
         yield put(createUserActions.fetchCreateUserSuccess(response.data));
      } 
      else {
        yield put(createUserActions.fetchCreateUserFailure(response.data));
      }
  } catch (error) {
    yield put(createUserActions.fetchCreateUserFailure(error));
  }
}
