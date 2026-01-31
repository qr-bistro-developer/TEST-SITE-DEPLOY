"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";
import StyledComponentsRegistry from "./registry";
import { FontProvider } from "@/contexts/FontContext";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledComponentsRegistry>
          <FontProvider>{children}</FontProvider>
        </StyledComponentsRegistry>
      </PersistGate>
    </Provider>
  );
}
