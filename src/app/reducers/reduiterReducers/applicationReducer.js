import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: "applicationReducer",
  initialState: {
    isFetching: false,
    data:"",
    jobs:0,
  
  },
  reducers: {
    fetchApplication: (state) => {
      state.isFetching = true;
    },
    fetchApplicationSuccess: (state,action) => {
      state.isFetching = false;
      state.data=action.payload;
      state.jobs=state.jobs+1
    },

    fetchapplicationFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    
  },
});

export const { actions: applicationActions, reducer: applicationReducer } = applicationSlice;
