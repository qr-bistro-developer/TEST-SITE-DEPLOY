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
  cacheTime = 0,
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

    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
