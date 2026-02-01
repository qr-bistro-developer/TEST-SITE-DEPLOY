"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@redux/store";
import StyledComponentsRegistry from "@lib/registry";
import { ConfigProvider } from "@/contexts/Config/ConfigProvider";

export const ContextProvider = ({ children = null }) => {
  return (
    <ConfigProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </PersistGate>
      </Provider>
    </ConfigProvider>
  );
};
