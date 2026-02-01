import _ from "lodash";

export const getSubdomain = ({ $hostname = "" }) => {
  const host = _.get($hostname.split(":"), [0], "");

  if (host === "localhost" || host === "127.0.0.1") {
    return null;
  }

  if (host.endsWith(".localhost")) {
    const subdomain = host.replace(".localhost", "");
    return subdomain || null;
  }

  const parts = host.split(".");

  if (parts.length < 3) {
    return null;
  }

  const subdomain = _.get(parts, [0], "");

  if (subdomain === "www") {
    return null;
  }

  return subdomain || null;
};
