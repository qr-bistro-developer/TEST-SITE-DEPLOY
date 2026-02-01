import { NextResponse } from "next/server";
import _ from "lodash";
import { RESTRICTION_TYPES } from "@statics/restrictedRoutes";
import { getSubdomain } from "@utils/routes/subdomain";
import {
  getMatchedRoute,
  handleSubdomainRestriction,
  handleAuthRestriction,
  handleSubdomainAndAuthRestriction,
} from "@utils/routes/restrictions";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") || "";
  const subdomain = getSubdomain({ $hostname: hostname });

  const matchedRoute = getMatchedRoute({ $pathname: pathname });

  if (!matchedRoute) {
    return NextResponse.next();
  }

  const restriction = _.get(matchedRoute, ["restriction"], "");

  switch (restriction) {
    case RESTRICTION_TYPES.SUBDOMAIN:
      return handleSubdomainRestriction({
        $request: request,
        $route: matchedRoute,
        $subdomain: subdomain,
      });

    case RESTRICTION_TYPES.AUTH:
      return handleAuthRestriction({
        $request: request,
        $route: matchedRoute,
      });

    case RESTRICTION_TYPES.SUBDOMAIN_AND_AUTH:
      return handleSubdomainAndAuthRestriction({
        $request: request,
        $route: matchedRoute,
        $subdomain: subdomain,
      });

    default:
      return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)"],
};
