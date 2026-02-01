import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { cookieStorage } from "@lib/cookieStorage";
import guide from "@redux/reducers/guide.reducers";
import accessToken from "@redux/reducers/accessToken.reducers";

const rootReducer = combineReducers({
  guide,
  accessToken,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage: cookieStorage,
  whitelist: ["guide", "accessToken"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
