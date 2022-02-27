import { call, put,all } from "redux-saga/effects";
import { apiCall } from "../api/apiCalls";
import { config } from "../../Constants/constants";
import { userDetailsActions } from "../reducers/userDetailReducer";


export default function* userDetailSaga(params) {
  try {
    
    const [details, skills,education] = yield all([
      call(apiCall,config.userUrl, "/user/"+params.payload.id+"/details", params.payload,"GET"),
      call(apiCall,config.userUrl, "/user/"+params.payload.id+"/skills", params.payload,"GET"),
      call(apiCall,config.userUrl, "/user/"+params.payload.id+"/education", params.payload,"GET"),
    ]);
    
    if (details.status === 200) {
      yield put(userDetailsActions.fetchUserDetailsSuccess(details.data));  
    } 
    else {
        userDetailsActions.fetchUserDetailsFailure(details.data);
    }
    if (education.status === 200) {
      yield put(userDetailsActions.fetchUserEducationSuccess(education.data));
      
    } 
    else {
        userDetailsActions.fetchUserDetailsFailure(education.data);
    }
  


    if (skills.status === 200) {
      yield put(userDetailsActions.fetchUserSkillsSuccess(skills.data));
      
    } 
    else {
        userDetailsActions.fetchUserDetailsFailure(skills.data);
    }
  
    
  
  
  
  
  
  
  
  
  
  
  } 
  
  
  
  
  
  
  
  
  
  
  
  catch (error) {
    yield put(userDetailsActions.fetchUserDetailsFailure(error));
  }


  




  
}


