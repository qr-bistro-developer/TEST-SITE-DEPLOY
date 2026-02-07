import { headers } from "next/headers";
import {
  getMenuAndBuffetExpire,
  getMenuList,
  getTableInformation,
} from "@/services/menu/[restaurantOrderId]";
import { validateUUID } from "@utils/validateUUID";
import { ClientSideComponent as ClientRestaurantMenu } from "@/app/menu/[restaurantOrderId]/ClientSideComponent";
import { deviceSupportServer } from "@/helpers/deviceSupport/deviceSupportServer";
import { ContainerLayout } from "@/components/Core/ContainerLayout";
import { UnSupportedDevice } from "@/components/Core/UnSupportedDevice";
import _ from "lodash";

const ServerSideComponent = async ({ params }) => {
  const { restaurantOrderId } = await params;
  validateUUID({ value: restaurantOrderId });

  // const { isDeviceSupport } = await deviceSupportServer({
  //   mobileOnly: true,
  // });

  // if (!isDeviceSupport) {
  //   return (
  //     <ContainerLayout>
  //       <UnSupportedDevice />
  //     </ContainerLayout>
  //   );
  // }

  const headersList = await headers();
  const subdomain = headersList.get("x-subdomain") || "";

  const payload = { restaurantOrderId };
  const [menulist, buffetExpire, information] = await Promise.all([
    getMenuList({ payload }),
    getMenuAndBuffetExpire({ payload }),
    getTableInformation({ payload }),
  ]);

  const tableInformation = _.get(information, ["tableInformation"]);
  const restaurantInformation = _.get(information, ["restaurantInformation"]);

  return (
    <ClientRestaurantMenu
      $subdomain={subdomain}
      $restaurantOrderId={restaurantOrderId}
      $menulist={menulist}
      $buffetExpire={buffetExpire}
      $tableInformation={tableInformation}
      $restaurantInformation={restaurantInformation}
    />
  );
};

export default ServerSideComponent;
