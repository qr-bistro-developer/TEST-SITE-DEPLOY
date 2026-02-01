import { getServerCookie } from "@store/cookies/server";

export const getAccessToken = async () => {
  return await getServerCookie("accessToken");
};
