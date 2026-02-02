"use client";

import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/redux/store";
import { StyledComponentsRegistry } from "@/contexts/StyledComponentsRegistry";

export const ContextProvider = ({ children = null }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <Provider store={store}>
      <StyledComponentsRegistry>
        <div suppressHydrationWarning>
          {isHydrated ? children : null}
        </div>
      </StyledComponentsRegistry>
    </Provider>
  );
};
