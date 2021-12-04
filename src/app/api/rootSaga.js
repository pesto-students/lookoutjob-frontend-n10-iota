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

export default function* rootSaga(){
    yield takeLatest(
        loginActions.fetchLogin.type, loginSaga
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
    


    
}