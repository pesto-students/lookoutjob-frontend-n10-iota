import { call, put } from "redux-saga/effects";
import { apiCall } from "../../api/apiCalls";
import { config } from "../../../Constants/constants";

import { companyDetailsActions } from "../../reducers/reduiterReducers/companyDetailsReducer";

export default function* companyDetailsSaga(params) {
  try {
    const response = yield call(apiCall,config.recuiterUrl, "/companies/email", params.payload,"POST");
    if (response.status === 200) {
         yield put(companyDetailsActions.fetchcompanyDetailsSuccess(response.data));
      } 
      else {
        yield put(companyDetailsActions.fetchcompanyDetailsFailure(response.data));
      }
  } catch (error) {
    yield put(companyDetailsActions.fetchcompanyDetailsFailure(error));
  }
}
