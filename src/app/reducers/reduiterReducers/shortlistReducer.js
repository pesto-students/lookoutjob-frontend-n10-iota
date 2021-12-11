import { createSlice } from "@reduxjs/toolkit";

const shortlistSlice = createSlice({
  name: "shortlistReducer",
  initialState: {
    isFetching: false,
    data:[],
    
  },

  reducers: {
    fetchShortlist: (state) => {
      state.isFetching = true;
    },
    fetchShortlistSuccess: (state,action) => {
      state.isFetching = false;
      state.data = action.payload;
      
    },

    fetchShortlistFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    
  },
});

export const { actions: shortlistActions, reducer: shortlistReducer } = shortlistSlice;
