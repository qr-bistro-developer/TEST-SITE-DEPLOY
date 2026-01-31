"use client";

import { useEffect, useState, createContext, useContext } from "react";

const FontContext = createContext({
  fontsLoaded: false,
});

export const useFonts = () => {
  return useContext(FontContext);
};

export const FontProvider = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const checkFonts = async () => {
      if (typeof document === "undefined") {
        return;
      }
      try {
        await document.fonts.ready;
        setFontsLoaded(true);
      } catch (error) {
        console.error("Font loading error:", error);
        setFontsLoaded(true);
      }
    };

    checkFonts();
  }, []);

  return (
    <FontContext.Provider value={{ fontsLoaded }}>
      <div
        style={{
          opacity: fontsLoaded ? 1 : 0,
          transition: "opacity 0.2s ease-in-out",
        }}
      >
        {children}
      </div>
    </FontContext.Provider>
  );
};
