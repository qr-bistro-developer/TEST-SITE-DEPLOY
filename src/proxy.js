import { NextResponse } from "next/server";
import _ from "lodash";
import { RESTRICTION_TYPES } from "@statics/RESTRICTED_ROUTES";
import { getSubdomain } from "@middlewares/subdomain";
import {
  getMatchedRoute,
  handleSubdomainRestriction,
  handleAuthRestriction,
  handleSubdomainAndAuthRestriction,
} from "@middlewares/restrictions";

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") || "";
  const subdomain = getSubdomain({ hostname });

  const matchedRoute = getMatchedRoute({ pathname });

  if (!matchedRoute) {
    return NextResponse.next();
  }

  const restriction = _.get(matchedRoute, ["restriction"], "");

  switch (restriction) {
    case RESTRICTION_TYPES.SUBDOMAIN:
      return handleSubdomainRestriction({
        request,
        route: matchedRoute,
        subdomain,
      });

    case RESTRICTION_TYPES.AUTH:
      return handleAuthRestriction({
        request,
        route: matchedRoute,
      });

    case RESTRICTION_TYPES.SUBDOMAIN_AND_AUTH:
      return handleSubdomainAndAuthRestriction({
        request,
        route: matchedRoute,
        subdomain,
      });

    default:
      return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)"],
};
