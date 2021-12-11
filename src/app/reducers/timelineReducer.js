import { createSlice } from "@reduxjs/toolkit";

const timelineSlice = createSlice({
  name: "timelineReducer",
  initialState: {
    isFetching: false,
    timelineData:"",
  },
  reducers: {
    fetchtimeline: (state) => {
      state.isFetching = true;
    },
    fetchTimelineSuccess: (state,action) => {
      state.isFetching = false;
      state.timelineData=action.payload
    },

    fetchTimelineFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    
  },
});

export const { actions: timelineActions, reducer: timelineReducer } = timelineSlice;
