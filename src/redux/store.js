import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import guide from "@redux/reducers/guide.reducers";

export const store = configureStore({
  reducer: {
    guide,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
