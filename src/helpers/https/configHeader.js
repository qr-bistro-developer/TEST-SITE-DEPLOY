// import { getAccessToken } from "@store/cookies/getAccessToken";

const API_KEY = process.env.API_KEY;
const DEFAULT_HEADER = {
  "x-key": API_KEY,
};

import { COOKIE_PREFIX } from "@/store/cookies/shared";
// export const configHeader = async ({
//   isFormData = false,
//   useAuthToken = true,
// } = {}) => {
//   const token = useAuthToken ? await getAccessToken() : null;
//   const authorization = token ? { Authorization: `Bearer ${token}` } : {};
//   const contentType = isFormData ? {} : { "Content-Type": "application/json" };
//   return {
//     ...DEFAULT_HEADER,
//     ...contentType,
//     ...authorization,
//   };
// };
import { getCookie } from "cookies-next";
export const configHeader = async ({
  isFormData = false,
  useAuthToken = true,
} = {}) => {
  const token = getCookie("QR_BISTRO_STORAGE_persist%3Aroot");
  console.log("token :>> ", token);
  //   const authorization = token ? { Authorization: `Bearer ${token}` } : {};
  //   const contentType = isFormData ? {} : { "Content-Type": "application/json" };
  return {
    ...DEFAULT_HEADER,
    // ...contentType,
    // ...authorization,
  };
};
