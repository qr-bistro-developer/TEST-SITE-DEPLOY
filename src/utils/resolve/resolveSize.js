export const resolveSize = ({ value = "auto" } = {}) => {
  if (value === "auto" || value === "100%") {
    return value;
  }
  return `${value}px`;
};
