"use client";

import { useEffect, useState } from "react";
import _ from "lodash";
import { FONT_FAMILIES } from "@statics/FONT_FAMILIES";

const ALL_FONTS = _.values(FONT_FAMILIES);

export const useFontLoader = ({ fonts = [], loadAll = false } = {}) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFonts = async () => {
      if (typeof document === "undefined") {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        await document.fonts.ready;

        const fontsToLoad = loadAll ? ALL_FONTS : fonts;

        if (_.isEmpty(fontsToLoad)) {
          setFontsLoaded(true);
          setIsLoading(false);
          return;
        }

        const fontPromises = _.map(fontsToLoad, (font) => {
          const fontFamily = font.replace("var(--font-", "").replace(")", "");
          return document.fonts.load(`16px ${fontFamily}`);
        });

        await Promise.all(fontPromises);
        setFontsLoaded(true);
      } catch (error) {
        console.error("useFontLoader error:", error);
        setFontsLoaded(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadFonts();
  }, [fonts, loadAll]);

  return { fontsLoaded, isLoading };
};
