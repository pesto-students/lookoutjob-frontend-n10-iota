import { takeLatest } from "@redux-saga/core/effects";
import { loginActions } from "../reducers/loginReducers";
import loginSaga from "../saga/loginSaga";
import userDetailSaga from "../saga/userDetailSaga";
import { userDetailsActions } from "../reducers/userDetailReducer";
import postEducationSaga from "../saga/postEducationSaga";
import { userEducationActions } from "../reducers/educationReducer";
import postSkillsSaga from "../saga/postSkillsSaga";
import { postSkillsActions } from "../reducers/postSkillsReducer";
import { postDetailsActions } from "../reducers/postDetailsReducer";
import postDetailsSaga from "../saga/postDetailsSaga";
import { connectionsActions } from "../reducers/connectionReducer";
import connectionSaga from  "../saga/connectionSaga";
import { timelineActions } from "../reducers/timelineReducer";
import timelineSaga from "../saga/timelineSaga";
import { searchActions } from "../reducers/searchReducer";
import searchSaga from "../saga/searchSaga";
import connectionReqSaga from "../saga/connectionReqSaga";
import { connectionsReqActions } from "../reducers/connectionReqReducer";
import requestSaga from "../saga/requestSaga";
import { requestActions } from "../reducers/requestReducer";
import companySaga from "../saga/recuterSagas/companySaga";
import { companyActions } from "../reducers/reduiterReducers/companyReducer";
import createUserSaga from "../saga/createUserSaga";
import { createUserActions } from "../reducers/createUserReducer";
import companyDetailsSaga from "../saga/recuterSagas/companyDetailsSaga";
import { companyDetailsActions } from "../reducers/reduiterReducers/companyDetailsReducer";
import jobSaga from "../saga/recuterSagas/jobSaga";
import { jobActions } from "../reducers/reduiterReducers/jobsReducer";
import shortlistSaga from "../saga/recuterSagas/shortlistSaga";
import { shortlistActions } from "../reducers/reduiterReducers/shortlistReducer";
import applicationSaga from "../saga/recuterSagas/applicationSaga";
import { applicationActions } from "../reducers/reduiterReducers/applicationReducer";



export default function* rootSaga(){
    yield takeLatest(
        loginActions.fetchLogin.type, loginSaga
    ); 
    yield takeLatest(
        applicationActions.fetchApplication.type, applicationSaga
    ); 
    yield takeLatest(
        userDetailsActions.fetchUserDetails.type, userDetailSaga
    );
    yield takeLatest(
        userEducationActions.fetchUserEducation.type, postEducationSaga
    );
    yield takeLatest(
        postSkillsActions.fetchUserDetails.type, postSkillsSaga
    );

    yield takeLatest(
        postDetailsActions.fetchUserDetails.type, postDetailsSaga
    ); 
    
    yield takeLatest(
        connectionsActions.fetchConnections.type, connectionSaga
    );
    yield takeLatest(
        timelineActions.fetchtimeline.type, timelineSaga
    );
    yield takeLatest(
        searchActions.fetchSearch.type, searchSaga
    );
    yield takeLatest(
        connectionsReqActions.fetchConnectionsReq.type, connectionReqSaga
    );
    yield takeLatest(
        requestActions.fetchRequest.type, requestSaga
    );
    yield takeLatest(
        companyActions.fetchcompany.type, companySaga
    );

    yield takeLatest(
        createUserActions.fetchCreateUser.type, createUserSaga
    );
    
    
    yield takeLatest(
        companyDetailsActions.fetchcompanyDetails.type, companyDetailsSaga
    );
  
    yield takeLatest(
        jobActions.fetchjob.type, jobSaga
    );


    yield takeLatest(
        shortlistActions.fetchShortlist.type, shortlistSaga
    );



    
}