import { NextResponse } from "next/server";
import _ from "lodash";
import { RESTRICTED_ROUTES } from "@statics/RESTRICTED_ROUTES";

export const getMatchedRoute = ({ pathname = "" } = {}) => {
  return _.find(RESTRICTED_ROUTES, (route) =>
    pathname.startsWith(_.get(route, ["path"], ""))
  );
};

export const handleSubdomainRestriction = ({
  request = null,
  route = null,
  subdomain = null,
} = {}) => {
  if (!subdomain) {
    const url = request.nextUrl.clone();
    url.pathname = _.get(route, ["redirectTo"], "/");
    return NextResponse.redirect(url);
  }

  const response = NextResponse.next();
  response.headers.set("x-subdomain", subdomain);
  return response;
};

export const handleAuthRestriction = ({ request = null, route = null } = {}) => {
  // TODO: Check token/session in the future
  const url = request.nextUrl.clone();
  url.pathname = _.get(route, ["redirectTo"], "/login");
  return NextResponse.redirect(url);
};

export const handleSubdomainAndAuthRestriction = ({
  request = null,
  route = null,
  subdomain = null,
} = {}) => {
  if (!subdomain) {
    const url = request.nextUrl.clone();
    url.pathname = _.get(route, ["redirectTo"], "/");
    return NextResponse.redirect(url);
  }

  // TODO: Check token/session in the future
  const response = NextResponse.next();
  response.headers.set("x-subdomain", subdomain);
  return response;
};
