"use client";

import Cookies from "js-cookie";
import { encrypt, decrypt, COOKIE_PREFIX } from "./shared";

export const getCookieStorage = (key) => {
  try {
    const value = Cookies.get(`${COOKIE_PREFIX}${key}`);
    if (!value) return null;
    return decrypt(value);
  } catch (error) {
    console.error("getCookieStorage error:", error);
    return null;
  }
};

export const setCookieStorage = (key, value) => {
  try {
    const encrypted = encrypt(value);
    if (!encrypted) return;

    Cookies.set(`${COOKIE_PREFIX}${key}`, encrypted, {
      expires: 30,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
  } catch (error) {
    console.error("setCookieStorage error:", error);
  }
};

export const removeCookieStorage = (key) => {
  Cookies.remove(`${COOKIE_PREFIX}${key}`);
};

export const cookieStorage = {
  getItem: async (key) => {
    const value = getCookieStorage(key);
    return value ? JSON.stringify(value) : null;
  },
  setItem: async (key, value) => {
    setCookieStorage(key, JSON.parse(value));
  },
  removeItem: async (key) => {
    removeCookieStorage(key);
  },
};
