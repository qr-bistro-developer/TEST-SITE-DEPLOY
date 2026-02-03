import { notFound } from "next/navigation";

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const isValidUUID = ({ value = "" } = {}) => {
  return UUID_REGEX.test(value);
};

export const validateUUID = ({ value = "" } = {}) => {
  if (!isValidUUID({ value })) {
    notFound();
  }
};
