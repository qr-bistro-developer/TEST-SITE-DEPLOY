import _ from "lodash";
import { configHeader } from "@helpers/http/configHeader";
import { hold } from "@utils/hold";
import Config from "react-native-config";

const API_ENDPOINT = Config.API_ENDPOINT;

export const httpRequest = async ({
  method = "post",
  apiVersions = "v1",
  externalUrl = null,
  path = null,
  data = null,
  useAuthToken = true,
  isFormData = false,
  isInternal = true,
  timeout = 30 * 1000,
}) => {
  const { clearAuthState } = useClearAuthState();
  try {
    const url = isInternal
      ? `${API_ENDPOINT}/${apiVersions}${path}`
      : externalUrl;
    const payload = data
      ? isFormData
        ? data
        : JSON.stringify(data)
      : undefined;
    const response = await axios({
      method,
      url,
      data: payload,
      headers: configHeader({ isFormData, useAuthToken }),
      timeout,
    });

    return _.get(response, ["data"]);
  } catch (error) {
    console.log("httpRequest error :>> ", error);

    throw _.get(error, ["response", "data"]);
  }
};
