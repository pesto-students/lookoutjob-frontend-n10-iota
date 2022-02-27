import { createSlice } from "@reduxjs/toolkit";

const companyDetailsSlice = createSlice({
  name: "companyDetailsReducer",
  initialState: {
    isFetching: false,
    id: "",
    name: "",
    address: "",
    city: "",
    email: "",
  },
  reducers: {
    fetchcompanyDetails: (state) => {
      state.isFetching = true;
    },
    fetchcompanyDetailsSuccess: (state, action) => {
      state.isFetching = false;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.email = action.payload.email;
    },

    fetchcompanyDetailsFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export const {
  actions: companyDetailsActions,
  reducer: companyDetailsReducer,
} = companyDetailsSlice;
