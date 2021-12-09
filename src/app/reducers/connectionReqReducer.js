import { createSlice } from "@reduxjs/toolkit";

const connectionsReqSlice = createSlice({
  name: "connectionsReqReducer",
  initialState: {
    isFetching: false,
    connectionData:[],
  },
  reducers: {

    fetchConnectionsReq: (state) => {
      state.isFetching = true;
    },
    fetchConnectionsReqSuccess: (state,action) => {
      state.isFetching = false;
      state.connectionData=action.payload
    },

    fetchConnectionsReqFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    
    delAcceptReject: (state, action) => {
      state.isFetching = false;
      state.connectionData.splice(action.payload.index, 1);
    },
    
  },
});

export const { actions: connectionsReqActions, reducer: connectionsReqReducer } = connectionsReqSlice;
