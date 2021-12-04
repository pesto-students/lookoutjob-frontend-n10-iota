import { call, put } from "redux-saga/effects";
import { loginActions } from "../reducers/loginReducers";
import { apiCall } from "../api/apiCalls";
import { config } from "../../Constants/constants";

export default function* loginSaga(params) {
  try {
    const response = yield call(
      apiCall,
      config.userUrl,
      "/login",
      params.payload,
      "POST"
    );
    if (response.status === 200) {
      yield put(loginActions.fetchLoginSuccess(response.data));
    } 
    else {
      yield put (loginActions.fetchLoginFailure(response.data));
    }
  } catch (error) {
    yield put(loginActions.fetchLoginFailure(error));
  }
}
