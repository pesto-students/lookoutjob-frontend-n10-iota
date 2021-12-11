import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requestReducer",
  initialState: {
    isFetching: false,
    connectionData:"",
  },
  reducers: {

    fetchRequest: (state) => {
      state.isFetching = true;
    },
    fetchRequestSuccess: (state,action) => {
      state.isFetching = false;
      state.connectionData=action.payload
    },

    fetchRequestFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    
  },
});

export const { actions: requestActions, reducer: requestReducer } = requestSlice;
