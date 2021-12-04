import { createSlice } from "@reduxjs/toolkit";

const postSkillsSlice = createSlice({
  name: "postSkillsReducer",
  initialState: {
    isFetching: false,
    skills:"",
  },
  reducers: {
    fetchUserDetails: (state) => {
      state.isFetching = true;
    },
    fetchUserSkillsSuccess: (state,action) => {
      state.isFetching = false;
      state.skills=action.payload.skills;
    },
    fetchUserDetailsFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    
  },
});

export const { actions: postSkillsActions, reducer: postSkillsReducer } = postSkillsSlice;
