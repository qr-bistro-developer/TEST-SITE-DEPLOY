"use server";

import { cookies } from "next/headers";

const TOKEN_KEY = "QR_BISTRO_ACCESS_TOKEN";
const TOKEN_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 60 * 60 * 24 * 30, // 30 days
  path: "/",
};

export const setAccessToken = async (token) => {
  const cookieStore = await cookies();
  cookieStore.set(TOKEN_KEY, token, TOKEN_OPTIONS);
};

export const getAccessToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get(TOKEN_KEY)?.value || null;
};

export const removeAccessToken = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(TOKEN_KEY);
};
