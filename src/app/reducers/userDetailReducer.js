import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
  name: "userDetailsReducer",
  initialState: {
    isFetching: false,
    name:"",
    currentCompany:"",
    role:"",
    createdAt:"",
    imageURL:"",
    error:undefined,
    college:"",
    degree:"",
    stYear:"",
    endYear:"",
    skills:"",
    id:"",
  },
  reducers: {
    fetchUserDetails: (state) => {
      state.isFetching = true;
    },
    fetchUserDetailsSuccess: (state,action) => {
      state.isFetching = false;
      state.name=action.payload.name
      state.currentCompany=action.payload.currentCompany
      state.role=action.payload.role
      state.createdAt=action.payload.createdAt
      state.imageURL=action.payload.imageURL
      state.id=action.payload.id
    },

    fetchUserEducationSuccess: (state,action) => {
      state.isFetching = false;
      state.college=action.payload.college;
      state.stYear=action.payload.stYear;
      state.endYear=action.payload.endYear;
      state.degree=action.payload.degree;
    },
    fetchUserSkillsSuccess: (state,action) => {
      state.isFetching = false;
      state.skills=action.payload.skills;
    },

    fetchUserDetailsFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    
  },
});

export const { actions: userDetailsActions, reducer: userDetailsReducer } = userDetailsSlice;
