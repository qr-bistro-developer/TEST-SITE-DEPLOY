"use client";

import { useState, useEffect } from "react";
import { getSubdomain } from "@utils/routes/subdomain";

export const useSubdomain = () => {
  const [subdomain, setSubdomain] = useState("");

  useEffect(() => {
    const currentSubdomain = getSubdomain({ hostname: window.location.hostname });
    setSubdomain(currentSubdomain || "");
  }, []);

  return subdomain;
};
