import { cookies } from "next/headers";
import CryptoJS from "crypto-js";

const SECRET_KEY = process.env.PRIVATE_SECRET_KEY || "QR-BISTRO-SECRET-KEY";
const COOKIE_PREFIX = "QR_BISTRO_STORAGE_";

// =======================================================
// MAIN FUNCTIONS
const encrypt = (data) => {
  try {
    const jsonString = JSON.stringify(data);
    const encrypted = CryptoJS.AES.encrypt(jsonString, SECRET_KEY).toString();
    return encrypted;
  } catch (error) {
    console.error("Encrypt error:", error);
    return null;
  }
};

const decrypt = (data) => {
  try {
    const bytes = CryptoJS.AES.decrypt($data, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  } catch (error) {
    console.error("Decrypt error:", error);
    return null;
  }
};
// MAIN FUNCTIONS
// =======================================================
export const getCookieStorage = async ({ key }) => {
  const cookieKey = `${COOKIE_PREFIX}${key}`;

  // Server-side
  if (typeof window === "undefined") {
    const cookieStore = await cookies();
    const value = cookieStore.get(cookieKey)?.value;
    if (!value) {
      return null;
    }
    return decrypt(value);
  }

  // Client-side
  const { default: Cookies } = await import("js-cookie");
  const value = Cookies.get(cookieKey);
  if (!value) {
    return null;
  }
  return decrypt(value);
};

export const setCookieStorage = async ({ key, value }) => {
  const cookieKey = `${COOKIE_PREFIX}${key}`;
  const encrypted = encrypt(value);
  if (!encrypted) return;

  // Server-side
  if (typeof window === "undefined") {
    const cookieStore = await cookies();
    cookieStore.set(cookieKey, encrypted, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
    });
    return;
  }

  // Client-side
  const { default: Cookies } = await import("js-cookie");
  Cookies.set(cookieKey, encrypted, {
    expires: 30,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
};

export const removeCookieStorage = async ({ key }) => {
  const cookieKey = `${COOKIE_PREFIX}${key}`;

  // Server-side
  if (typeof window === "undefined") {
    const cookieStore = await cookies();
    cookieStore.delete(cookieKey);
    return;
  }

  // Client-side
  const { default: Cookies } = await import("js-cookie");
  Cookies.remove(cookieKey);
};

export const cookieStorage = {
  getItem: (key) => getCookieStorage({ key: key }),
  setItem: (key, value) => setCookieStorage({ key: key, value: value }),
  removeItem: (key) => removeCookieStorage({ key: key }),
};
