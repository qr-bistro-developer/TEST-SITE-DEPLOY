export const RESTRICTION_TYPES = {
  SUBDOMAIN: "subdomain",
  AUTH: "auth",
  SUBDOMAIN_AND_AUTH: "subdomain_and_auth",
};

export const RESTRICTED_ROUTES = [
  {
    path: "/menu",
    restriction: RESTRICTION_TYPES.SUBDOMAIN,
    redirectTo: "/",
  },
  // ตัวอย่างสำหรับอนาคต:
  // {
  //   path: "/dashboard",
  //   restriction: RESTRICTION_TYPES.AUTH,
  //   redirectTo: "/login",
  // },
  // {
  //   path: "/admin",
  //   restriction: RESTRICTION_TYPES.SUBDOMAIN_AND_AUTH,
  //   redirectTo: "/login",
  // },
];
