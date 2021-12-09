import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

export const sagaMiddleware = createSagaMiddleware();



const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: [
    "loginReducer","jobReducer","shortlistReducer"
  ],
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  preloadedState: {
    token: "",
  },
  middleware: [sagaMiddleware],
});
