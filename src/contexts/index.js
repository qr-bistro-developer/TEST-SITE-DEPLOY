"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";
import StyledComponentsRegistry from "./registry";

export const ContextProvider = ({ children }) => {
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StyledComponentsRegistry>
        {/* <FontProvider>{children}</FontProvider> */}
        {children}
      </StyledComponentsRegistry>
    </PersistGate>
  </Provider>;
};
