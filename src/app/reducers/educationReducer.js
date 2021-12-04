import { createSlice } from "@reduxjs/toolkit";

const userEducationSlice = createSlice({
  name: "userEducationReducer",
  initialState: {
    isFetching: false,
    error:undefined,
    college:"",
    degree:"",
    stYear:"",
    endYear:"",
  },
  reducers: {
    fetchUserEducation: (state) => {
      state.isFetching = true;
    },
   
    fetchUserEducationFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    postUserEducationSuccess: (state,action) => {
      state.isFetching = false;
      state.college=action.payload.college;
      state.stYear=action.payload.stYear;
      state.endYear=action.payload.endYear;
      state.degree=action.payload.degree;

    },
  },
});

export const { actions: userEducationActions, reducer: userEducationReducer } = userEducationSlice;
