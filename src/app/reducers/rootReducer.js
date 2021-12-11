import { combineReducers } from "redux";
import { loginReducer } from "./loginReducers";
import { userDetailsReducer } from "./userDetailReducer";
import { userEducationReducer } from "./educationReducer";
import { postSkillsReducer } from "./postSkillsReducer";
import { postDetailsReducer } from "./postDetailsReducer";
import { firstTimeLoginReducer } from "./firstTimeLoginReducer";
import { connectionsReducer } from "./connectionReducer";
import { timelineReducer } from "./timelineReducer";
import {searchReducer} from "./searchReducer"
import {connectionsReqReducer} from "./connectionReqReducer"
import {requestReducer} from "./requestReducer"
import {companyReducer} from "./reduiterReducers/companyReducer"
import { createUserReducer } from "./createUserReducer";
import {companyDetailsReducer} from "./reduiterReducers/companyDetailsReducer";
import { jobReducer } from "./reduiterReducers/jobsReducer";
import { shortlistReducer } from "./reduiterReducers/shortlistReducer";
import { applicationReducer } from "./reduiterReducers/applicationReducer";
export const rootReducer = combineReducers({
  loginReducer,
  userDetailsReducer,
  userEducationReducer,
  postSkillsReducer,
  postDetailsReducer,
  firstTimeLoginReducer,
  connectionsReducer,
  timelineReducer,
  searchReducer,
  connectionsReqReducer,
  requestReducer,
  companyReducer,
  createUserReducer,
  companyDetailsReducer,
  jobReducer,
  shortlistReducer,
  applicationReducer,
});
