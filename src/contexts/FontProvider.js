"use client";

import { useEffect, useState, createContext, useContext } from "react";
import _ from "lodash";
import { FONT_FAMILIES } from "@statics/fonts";

const FontContext = createContext({
  fontsLoaded: false,
});

export const useFonts = () => {
  return useContext(FontContext);
};

const DEFAULT_FONTS = [FONT_FAMILIES.IBM_PLEX_SANS_THAI];

export const FontProvider = ({ $fonts = DEFAULT_FONTS, children = null }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const checkFonts = async () => {
      if (typeof document === "undefined") {
        return;
      }

      try {
        await document.fonts.ready;

        // ถ้าไม่มี fonts ที่ต้องการโหลด ให้ถือว่าโหลดเสร็จ
        if (_.isEmpty($fonts)) {
          setFontsLoaded(true);
          return;
        }

        // รอให้ fonts ที่ระบุโหลดเสร็จ
        const fontPromises = _.map($fonts, (font) => {
          const fontFamily = font.replace("var(--font-", "").replace(")", "");
          return document.fonts.load(`16px ${fontFamily}`);
        });

        await Promise.all(fontPromises);
        setFontsLoaded(true);
      } catch (error) {
        console.error("Font loading error:", error);
        setFontsLoaded(true);
      }
    };

    checkFonts();
  }, [$fonts]);

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
