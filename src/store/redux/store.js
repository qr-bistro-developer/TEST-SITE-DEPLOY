import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  createTransform,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import themeColors from "@/store/redux/reducers/themeColors.reducers";
import orderCart from "@/store/redux/reducers/orderCart.reducers";

const createServerSafeStorage = () => ({
  getItem: () => Promise.resolve(null),
  setItem: () => Promise.resolve(),
  removeItem: () => Promise.resolve(),
});

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createServerSafeStorage();

const encodeTransform = createTransform(
  (inboundState) => {
    try {
      return btoa(encodeURIComponent(JSON.stringify(inboundState)));
    } catch {
      return inboundState;
    }
  },
  (outboundState) => {
    try {
      return JSON.parse(decodeURIComponent(atob(outboundState)));
    } catch {
      return outboundState;
    }
  },
);

const rootReducer = combineReducers({
  orderCart,
  themeColors,
});

const persistConfig = {
  key: "QR_BISTRO",
  version: 1,
  storage,
  whitelist: ["guide", "themeColors"],
  transforms: [encodeTransform],
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
