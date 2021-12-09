import { createSlice } from "@reduxjs/toolkit";

const firstTimeLoginSlice = createSlice({
  name: "firstTimeLoginReducer",
  initialState: {
    isFetching: false,
    name: "",
    email:"",
    error: undefined,
    
  },
  reducers: {
    fetchfirstTimeLogin: (state) => {
      state.isFetching = true;
    },
    fetchfirstTimeSuccess: (state, action) => {
      state.isFetching = false;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    fetchLoginFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
   
  },
});

export const { actions: firstTimeLoginActions, reducer: firstTimeLoginReducer } = firstTimeLoginSlice;
