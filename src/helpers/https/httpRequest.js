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
  cache = "no-cache",
} = {}) => {
  try {
    const payload = data
      ? isFormData
        ? data
        : JSON.stringify(data)
      : undefined;

    const url = externalUrl
      ? externalUrl
      : `${API_ENDPOINT}/${apiVersions}${path}`;

    const headers = await configHeader({
      isFormData,
      useAuthToken,
    });

    const response = await fetch(url, {
      method,
      body: payload,
      headers,
      cache,
    });

    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
