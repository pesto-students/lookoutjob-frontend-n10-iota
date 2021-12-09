import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobReducer",
  initialState: {
    isFetching: false,
    data:[],
    title:"",
    description:"",
    salary:"",
    position:"",
    companyId:"", 
  },

  reducers: {
    fetchjob: (state) => {
      state.isFetching = true;
    },
    fetchjobSuccess: (state,action) => {
      state.isFetching = false;
      state.data = action.payload;
      state.title = action.payload.title;
      state.description=action.payload.description;
      state.address=action.payload.address;
      state.position=action.payload.position;
      state.companyId = action.payload.companyId;
    },

    fetchjobFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    
  },
});

export const { actions: jobActions, reducer: jobReducer } = jobSlice;
