"use client";

import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/redux/store";
import { StyledComponentsRegistry } from "@/contexts/StyledComponentsRegistry";

export const ContextProvider = ({ children = null }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Provider store={store}>
      {isClient ? (
        <PersistGate loading={null} persistor={persistor}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </PersistGate>
      ) : (
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      )}
    </Provider>
  );
};
