import { headers } from "next/headers";
import {
  getMenuAndBuffetExpire,
  getMenuList,
} from "@/services/menu/[restaurantOrderId]";
import { validateUUID } from "@utils/validateUUID";

const MenuRestaurant = async ({ params }) => {
  const { restaurantOrderId } = await params;
  validateUUID({ value: restaurantOrderId });

  const headersList = await headers();
  const subdomain = headersList.get("x-subdomain") || "";

  const payload = { restaurantOrderId };
  const [menuData, buffetExpire] = await Promise.all([
    getMenuList({ payload }),
    getMenuAndBuffetExpire({ payload }),
  ]);

  console.log("buffetExpire :>> ", buffetExpire);
  console.log("menuData :>> ", menuData);

  return null;
  // <MenuClient
  //   $subdomain={subdomain}
  //   $restaurantOrderId={restaurantOrderId}
  //   $menuData={menuData}
  //   $buffetExpire={buffetExpire}
  // />
};

export default MenuRestaurant;
