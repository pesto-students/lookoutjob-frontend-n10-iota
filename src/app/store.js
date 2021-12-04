
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";


export const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
  reducer: rootReducer,
  preloadedState:{
      token:'',
      
  },
  middleware: [sagaMiddleware],
});