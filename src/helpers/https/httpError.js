const HTTP_ERROR_MESSAGES = {
  0: "Unable to connect to server",
  400: "Bad request",
  401: "Please login",
  403: "Access denied",
  404: "Not found",
  408: "Request timeout",
  429: "Too many requests",
  500: "Internal server error",
  502: "Bad gateway",
  503: "Service unavailable",
};

const getErrorMessage = (status) => {
  return HTTP_ERROR_MESSAGES[status] || `เกิดข้อผิดพลาด (${status})`;
};

export const createHttpError = (status = 0) => {
  const error = new Error(getErrorMessage(status));
  error.name = "HttpError";
  error.status = status;
  return error;
};

export const isHttpError = (error) => {
  return error?.name === "HttpError";
};
