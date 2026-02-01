import { getCookieStorage } from "@store/cookies";

const API_KEY = process.env.API_KEY;

const DEFAULT_HEADER = {
  "x-key": API_KEY,
};

export const configHeader = async ({
  isFormData = false,
  useAuthToken = true,
}) => {
  const token = await getCookieStorage({ key: "accessToken" });
  console.log("token :>> ", token);
  const authorization = useAuthToken
    ? { Authorization: `Bearer ${accessToken}` }
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
