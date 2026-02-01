"use server";

import { httpRequest } from "@helpers/https/httpRequest";

export const testBearerFromClient = async () => {
  const result = await httpRequest({
    method: "get",
    path: `/bearer`,
    useAuthToken: true,
  });
  return result;
};
