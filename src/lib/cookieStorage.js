"use client";

import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

const SECRET_KEY =
  process.env.NEXT_PUBLIC_PERSIST_SECRET || "qr-bistro-secret-key";
const COOKIE_PREFIX = "QR_BISTRO_";

const encrypt = ({ $data }) => {
  try {
    const jsonString = JSON.stringify($data);
    const encrypted = CryptoJS.AES.encrypt(jsonString, SECRET_KEY).toString();
    return encrypted;
  } catch (error) {
    console.error("Encrypt error:", error);
    return null;
  }
};

const decrypt = ({ $data }) => {
  try {
    const bytes = CryptoJS.AES.decrypt($data, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  } catch (error) {
    console.error("Decrypt error:", error);
    return null;
  }
};

export const getCookieStorage = ({ $key = "" }) => {
  if (typeof window === "undefined") {
    return Promise.resolve(null);
  }

  try {
    const cookieKey = `${COOKIE_PREFIX}${$key}`;
    const value = Cookies.get(cookieKey);

    if (!value) {
      return Promise.resolve(null);
    }

    const decrypted = decrypt({ $data: value });
    return Promise.resolve(JSON.stringify(decrypted));
  } catch (error) {
    console.error("getCookieStorage error:", error);
    return Promise.resolve(null);
  }
};

export const setCookieStorage = ({ $key = "", $value = null }) => {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  try {
    const cookieKey = `${COOKIE_PREFIX}${$key}`;
    const parsed = JSON.parse($value);
    const encrypted = encrypt({ $data: parsed });

    if (encrypted) {
      Cookies.set(cookieKey, encrypted, {
        expires: 30,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });
    }

    return Promise.resolve();
  } catch (error) {
    console.error("setCookieStorage error:", error);
    return Promise.resolve();
  }
};

export const removeCookieStorage = ({ $key = "" }) => {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  try {
    const cookieKey = `${COOKIE_PREFIX}${$key}`;
    Cookies.remove(cookieKey);
    return Promise.resolve();
  } catch (error) {
    console.error("removeCookieStorage error:", error);
    return Promise.resolve();
  }
};

// For redux-persist compatibility
export const cookieStorage = {
  getItem: (key) => getCookieStorage({ $key: key }),
  setItem: (key, value) => setCookieStorage({ $key: key, $value: value }),
  removeItem: (key) => removeCookieStorage({ $key: key }),
};
