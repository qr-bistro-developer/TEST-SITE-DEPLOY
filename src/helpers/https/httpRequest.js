import { configHeader } from "@helpers/https/configHeader";
import { createHttpError, isHttpError } from "@helpers/https/httpError";

const API_ENDPOINT = process.env.API_ENDPOINT;
export const httpRequest = async ({
  method = "post",
  apiVersions = "v1",
  externalUrl = null,
  path = null,
  data = null,
  useAuthToken = true,
  isFormData = false,
  cacheTime = 0,
} = {}) => {
  const url = externalUrl
    ? externalUrl
    : `${API_ENDPOINT}/${apiVersions}${path}`;

  try {
    const payload = data
      ? isFormData
        ? data
        : JSON.stringify(data)
      : undefined;

    const headers = await configHeader({
      isFormData,
      useAuthToken,
    });

    const fetchOptions = {
      method,
      body: payload,
      headers,
    };

    if (cacheTime > 0) {
      fetchOptions.next = { revalidate: cacheTime };
    } else {
      fetchOptions.cache = "no-store";
    }

    const response = await fetch(url, fetchOptions);

    const contentType = response.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      throw createHttpError(response.status);
    }

    const result = await response.json();

    if (response.status >= 500) {
      throw createHttpError(response.status);
    }

    if (response.status === 404) {
      throw createHttpError(404);
    }

    return result;
  } catch (error) {
    if (isHttpError(error)) {
      throw error;
    }

    throw createHttpError(0);
  }
};
