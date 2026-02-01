"use server";

import { httpRequest } from "@helpers/https/httpRequest";
import {
  setAccessToken,
  getAccessToken,
  removeAccessToken,
} from "@store/cookies/accessToken";

export const login = async ({ email = null, password = null } = {}) => {
  try {
    const result = await httpRequest({
      method: "post",
      path: "/auth/login",
      data: { email, password },
      useAuthToken: false,
    });

    if (result?.accessToken) {
      await setAccessToken(result.accessToken);
    }

    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const logout = async () => {
  try {
    await removeAccessToken();
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const checkAuth = async () => {
  try {
    const token = await getAccessToken();
    return { isAuthenticated: !!token };
  } catch (error) {
    return { isAuthenticated: false };
  }
};
