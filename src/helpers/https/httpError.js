const HTTP_ERROR_MESSAGES = {
  0: "Unable to connect to server. Please check your internet connection.",
  400: "Invalid request. Please try again.",
  401: "Session expired. Please login again.",
  403: "You don't have permission to access this.",
  404: "The requested data was not found.",
  408: "Request timed out. Please try again.",
  429: "Too many requests. Please wait a moment.",
  500: "Server error. Please try again later.",
  502: "Server is temporarily unavailable.",
  503: "Service is currently unavailable.",
};

export const handleHttpError = ({ status, customMessage = null } = {}) => {
  const message =
    customMessage || HTTP_ERROR_MESSAGES[status] || "Something went wrong";
  const error = new Error(message);
  error.status = status;
  error.isHttpError = true;
  return error;
};

export const isHttpError = ({ error } = {}) => {
  return error?.isHttpError === true;
};
