import { createSlice } from "@reduxjs/toolkit";

const postDetailsSlice = createSlice({
  name: "postDetailsReducer",
  initialState: {
    isFetching: false,
    name:"",
    currentCompany:"",
    role:"",
    imageURL:"",
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
      state.imageURL=action.payload.imageURL
    },
    fetchUserDetailsFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    
  },
});

export const { actions: postDetailsActions, reducer: postDetailsReducer } = postDetailsSlice;
