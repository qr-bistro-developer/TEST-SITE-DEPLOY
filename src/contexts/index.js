"use client";

import { Provider } from "react-redux";
import { store } from "@/store/redux/store";
import { StyledComponentsRegistry } from "@/contexts/StyledComponentsRegistry";

export const ContextProvider = ({ children = null }) => {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </Provider>
  );
};
