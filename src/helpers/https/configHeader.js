import { getAccessToken } from "@store/cookies/accessToken";

const API_KEY = process.env.API_KEY;

const DEFAULT_HEADER = {
  "x-key": API_KEY,
};

export const configHeader = async ({
  isFormData = false,
  useAuthToken = true,
} = {}) => {
  const token = useAuthToken ? await getAccessToken() : null;
  const authorization = token ? { Authorization: `Bearer ${token}` } : {};
  const contentType = isFormData ? {} : { "Content-Type": "application/json" };

  return {
    ...DEFAULT_HEADER,
    ...contentType,
    ...authorization,
  };
};
