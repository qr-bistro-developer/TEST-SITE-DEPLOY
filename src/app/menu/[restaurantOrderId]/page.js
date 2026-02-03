import { headers } from "next/headers";
import {
  getMenuAndBuffetExpire,
  getMenuList,
} from "@/services/menu/[restaurantOrderId]";
import { validateUUID } from "@utils/validateUUID";
import { ClientRestaurantMenu } from "@/app/menu/[restaurantOrderId]/components/ClientRestaurantMenu";
import { deviceSupportServer } from "@/helpers/deviceSupport/deviceSupportServer";
import { ContainerLayout } from "@/components/Core/ContainerLayout";
import { UnSupportedDevice } from "@/components/Core/UnSupportedDevice";

const ServerSide = async ({ params }) => {
  const { restaurantOrderId } = await params;
  validateUUID({ value: restaurantOrderId });

  const { isDeviceSupport } = await deviceSupportServer({
    mobileOnly: true,
  });
  console.log("isDeviceSupport :>> ", isDeviceSupport);
  if (!isDeviceSupport) {
    return (
      <ContainerLayout>
        <UnSupportedDevice />
      </ContainerLayout>
    );
  }

  const headersList = await headers();
  const subdomain = headersList.get("x-subdomain") || "";

  const payload = { restaurantOrderId };
  const [menulist, buffetExpire] = await Promise.all([
    getMenuList({ payload }),
    getMenuAndBuffetExpire({ payload }),
  ]);

  return (
    <ClientRestaurantMenu
      $subdomain={subdomain}
      $restaurantOrderId={restaurantOrderId}
      $menulist={menulist}
      $buffetExpire={buffetExpire}
    />
  );
};

export default ServerSide;
