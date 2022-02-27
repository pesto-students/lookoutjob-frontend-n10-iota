import { call, put } from "redux-saga/effects";
import { apiCall } from "../../api/apiCalls";
import { config } from "../../../Constants/constants";

import { companyActions } from "../../reducers/reduiterReducers/companyReducer";

export default function* companySaga(params) {
  try {
    const response = yield call(apiCall,config.recuiterUrl, "/company/", params.payload,params.payload.request);
    if (response.status === 200) {
         yield put(companyActions.fetchcompanySuccess(response.data));
      } 
      else {
        yield put(companyActions.fetchcompanyFailure(response.data));
      }
  } catch (error) {
    yield put(companyActions.fetchcompanyFailure(error));
  }
}
