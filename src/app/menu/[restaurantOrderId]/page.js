import { headers } from "next/headers";
import {
  getMenuAndBuffetExpire,
  getMenuList,
} from "@/services/menu/[restaurantOrderId]";
import { MenuClient } from "./MenuClient";

const MenuRestaurant = async ({ params }) => {
  const { restaurantOrderId } = await params;
  const headersList = await headers();
  const subdomain = headersList.get("x-subdomain") || "";

  const payload = { restaurantOrderId };
  const [menuData, buffetExpire] = await Promise.all([
    getMenuList({ payload }),
    getMenuAndBuffetExpire({ payload }),
  ]);

  return (
    <MenuClient
      $subdomain={subdomain}
      $restaurantOrderId={restaurantOrderId}
      $menuData={menuData}
      $buffetExpire={buffetExpire}
    />
  );
};

export default MenuRestaurant;
