const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const DEFAULT_HEADER = {
  "x-key": API_KEY,
};

export const configHeader = ({
  $accessToken = null,
  $isFormData = false,
  $useAuthToken = true,
}) => {
  const authorization =
    $useAuthToken && $accessToken
      ? { Authorization: `Bearer ${$accessToken}` }
      : {};

  const contentType = $isFormData
    ? { "Content-Type": "multipart/form-data" }
    : { "Content-Type": "application/json" };

  return {
    ...DEFAULT_HEADER,
    ...contentType,
    ...authorization,
  };
};
