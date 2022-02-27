import { createSlice } from "@reduxjs/toolkit";

const connectionsSlice = createSlice({
  name: "connectionsReducer",
  initialState: {
    isFetching: false,
    connectionData:"",
    // currentCompany:"",
    // role:"",
    // createdAt:"",
    // imageURL:"",
  },
  reducers: {
    fetchConnections: (state) => {
      state.isFetching = true;
    },
    fetchConnectionsSuccess: (state,action) => {
      state.isFetching = false;
      state.connectionData=action.payload
      // state.name=action.payload.name
      // state.currentCompany=action.payload.currentCompany
      // state.role=action.payload.role
      // state.createdAt=action.payload.createdAt
      // state.imageURL=action.payload.imageURL
    },

    fetchConnectionsFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    
  },
});

export const { actions: connectionsActions, reducer: connectionsReducer } = connectionsSlice;
