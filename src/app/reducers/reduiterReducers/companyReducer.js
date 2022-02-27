import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "companyReducer",
  initialState: {
    isFetching: false,
    name: "",
    address: "",
    city: "",
    jobs: [],
    data: "",
  },
  reducers: {
    fetchcompany: (state) => {
      state.isFetching = true;
    },
    fetchcompanySuccess: (state, action) => {
      state.isFetching = false;
      state.data = action.payload;
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.jobs = action.payload.jobs;
    },

    fetchcompanyFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export const { actions: companyActions, reducer: companyReducer } =
  companySlice;
