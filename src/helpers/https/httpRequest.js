import { configHeader } from "@helpers/https/configHeader";
import { handleHttpError, isHttpError } from "@helpers/https/httpError";
import _ from "lodash";

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
    const result = await response.json();

    if (!response.ok) {
      const apiMessage = _.get(result, ["message"], null);
      throw handleHttpError({ status: response.status, customMessage: apiMessage });
    }

    return result;
  } catch (error) {
    if (isHttpError({ error })) {
      throw error;
    }
    throw handleHttpError({ status: 0 });
  }
};
