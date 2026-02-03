import { headers } from "next/headers";

export const deviceSupportServer = async ({ mobileOnly = false } = {}) => {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  console.log("userAgent :>> ", userAgent);
  const isMobile =
    /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    );
  const isTablet = /iPad|Android(?!.*Mobile)/i.test(userAgent);

  if (mobileOnly) {
    return { isDeviceSupport: isMobile && !isTablet };
  }

  return { isDeviceSupport: isMobile || isTablet };
};
