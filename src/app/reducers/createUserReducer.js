import { createSlice } from "@reduxjs/toolkit";

const createUserSlice = createSlice({
  name: "createUserReducer",
  initialState: {
    isFetching: false,
    acctype: "",
    email: "",
  },
  reducers: {
    fetchCreateUser: (state) => {
      state.isFetching = true;
    },
    fetchCreateUserSuccess: (state,action) => {
      state.isFetching = false;
      state.email=action.payload.email
      state.acctype=action.payload.acctype
    },

    fetchCreateUserFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    
  },
});

export const { actions: createUserActions, reducer: createUserReducer } = createUserSlice;
