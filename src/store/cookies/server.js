import { cookies } from "next/headers";
import { encrypt, decrypt, COOKIE_PREFIX } from "./shared";

export const getServerCookie = async (key) => {
  const cookieStore = await cookies();
  const value = cookieStore.get(`${COOKIE_PREFIX}${key}`)?.value;
  if (!value) return null;
  return decrypt(value);
};

export const setServerCookie = async (key, value) => {
  const cookieStore = await cookies();
  const encrypted = encrypt(value);
  if (!encrypted) return;

  cookieStore.set(`${COOKIE_PREFIX}${key}`, encrypted, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
  });
};

export const removeServerCookie = async (key) => {
  const cookieStore = await cookies();
  cookieStore.delete(`${COOKIE_PREFIX}${key}`);
};
