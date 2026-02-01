import { getServerCookie } from "@store/cookies/server";

const API_KEY = process.env.API_KEY;

const DEFAULT_HEADER = {
  "x-key": API_KEY,
};

export const configHeader = async ({
  isFormData = false,
  useAuthToken = true,
} = {}) => {
  const token = await getServerCookie("accessToken");
  const authorization =
    useAuthToken && token ? { Authorization: `Bearer ${token}` } : {};
  const contentType = isFormData ? {} : { "Content-Type": "application/json" };
  return {
    ...DEFAULT_HEADER,
    ...contentType,
    ...authorization,
  };
};
