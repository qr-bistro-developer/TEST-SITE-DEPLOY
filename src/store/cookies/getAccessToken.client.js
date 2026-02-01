"use client";

import { getCookieStorage } from "@store/cookies/client";

export const getAccessToken = async () => {
  return getCookieStorage("accessToken");
};
