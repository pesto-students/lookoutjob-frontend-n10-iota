import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchReducer",
  initialState: {
    isFetching: false,
    searchData:"",
  },
  reducers: {
    fetchSearch: (state) => {
      state.isFetching = true;
    },
    fetchSearchSuccess: (state,action) => {
      state.isFetching = false;
      state.SearchData=action.payload
    },

    fetchSearchFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    
  },
});

export const { actions: searchActions, reducer: searchReducer } = searchSlice;
