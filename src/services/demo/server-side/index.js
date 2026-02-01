"use server";

import { httpRequest } from "@helpers/https/httpRequest";

export const testBearerFromServer = async () => {
  const result = await httpRequest({
    method: "get",
    path: `/bearer`,
    useAuthToken: true,
  });
  return result;
};
