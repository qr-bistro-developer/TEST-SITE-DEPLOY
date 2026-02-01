"use client";

import { getCookie, setCookie, deleteCookie } from "cookies-next";

const COOKIE_PREFIX = "QR_BISTRO_";

export const getPersistorStore = (key) => {
  try {
    const value = getCookie(`${COOKIE_PREFIX}${key}`);
    if (!value) return null;
    return JSON.parse(value);
  } catch (error) {
    console.error("getPersistorStore error:", error);
    return null;
  }
};

export const setPersistorStore = (key, value) => {
  try {
    setCookie(`${COOKIE_PREFIX}${key}`, JSON.stringify(value), {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
  } catch (error) {
    console.error("setPersistorStore error:", error);
  }
};

export const removePersistorStore = (key) => {
  deleteCookie(`${COOKIE_PREFIX}${key}`);
};

export const persistorStorage = {
  getItem: async (key) => {
    const value = getCookie(`${COOKIE_PREFIX}${key}`);
    return value || null;
  },
  setItem: async (key, value) => {
    setCookie(`${COOKIE_PREFIX}${key}`, value, {
      maxAge: 60 * 60 * 24 * 30,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
  },
  removeItem: async (key) => {
    deleteCookie(`${COOKIE_PREFIX}${key}`);
  },
};
