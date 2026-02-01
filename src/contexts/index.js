"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@redux/store";
import { StyledComponentsRegistry } from "@/contexts/StyledComponentsRegistry";

export const ContextProvider = ({ children = null }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </PersistGate>
    </Provider>
  );
};
