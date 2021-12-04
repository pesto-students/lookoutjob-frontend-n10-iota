import { createSlice } from "@reduxjs/toolkit";
// import loginService from "../services/loginService";

const loginSlice = createSlice({
  name: "loginReducer",
  initialState: {
    isFetching: false,
    token: "",
    error: undefined,
    firstTime: false,
  },
  reducers: {
    fetchLogin: (state) => {
      state.isFetching = true;
    },
    fetchLoginSuccess: (state, action) => {
      state.isFetching = false;
      state.token = action.payload.token;
    },
    fetchLoginFailure: (state, action) => {
      state.isFetching = false;
      state.firstTime = true;
      state.error = action.payload;
    },
    firstTime: (state) => {
      state.isFetching = false;
      state.firstTime = true;
    },
  },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
