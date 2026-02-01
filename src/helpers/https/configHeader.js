import { getServerCookie } from "@store/cookies/server";

const API_KEY = process.env.API_KEY;

const DEFAULT_HEADER = {
  "x-key": API_KEY,
};

export const configHeader = async ({
  isFormData = false,
  useAuthToken = true,
}) => {
  const token = await getServerCookie("accessToken");
  console.log("token :>> ", token);
  const authorization = useAuthToken
    ? { Authorization: `Bearer ${token}` }
    : {};
  const contentType = isFormData
    ? { "Content-Type": "multipart/form-data" }
    : { "Content-Type": "application/json" };
  return {
    ...DEFAULT_HEADER,
    ...contentType,
    ...authorization,
  };
};
