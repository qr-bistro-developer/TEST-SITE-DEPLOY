import _ from "lodash";
import { configHeader } from "@helpers/https/configHeader";

const API_ENDPOINT = process.env.API_ENDPOINT;
export const httpRequest = async ({
  method = "post",
  apiVersions = "v1",
  externalUrl = null,
  path = null,
  data = null,
  useAuthToken = true,
  isFormData = false,
  timeout = 30 * 1000,
  cache = "no-cache",
}) => {
  try {
    const payload = data
      ? isFormData
        ? data
        : JSON.stringify(data)
      : undefined;

    const url = !externalUrl
      ? `${API_ENDPOINT}/${apiVersions}${path}`
      : externalUrl;

    const headers = await configHeader({ isFormData, useAuthToken: true });
    console.log("headers :>> ", headers);
    const response = await fetch(url, {
      method,
      body: payload,
      headers: {
        "Content-Type": isFormData ? undefined : "application/json",
      },
      cache,
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error :>> ", error);
    throw error;
  }
};
