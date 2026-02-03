"use client";

import { useState, useEffect } from "react";
import { BREAKPOINTS } from "@statics/breakpoints";

export const useSupportedDevice = ({
  maxWidth = BREAKPOINTS.TABLET_MAX,
} = {}) => {
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSupported(window.innerWidth <= maxWidth);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [maxWidth]);

  return { isDeviceSupport: isSupported };
};
