import { headers } from "next/headers";
import _ from "lodash";

const MenuRestaurant = async ({ params = {} }) => {
  // ดึง subdomain จาก middleware
  const headersList = await headers();
  const subdomain = headersList.get("x-subdomain") || "";

  // ดึง restaurantOrderId จาก URL params
  const { restaurantOrderId = "" } = await params;

  return (
    <div>
      <p>Subdomain: {subdomain}</p>
      <p>Restaurant Order ID: {restaurantOrderId}</p>
    </div>
  );
};

export default MenuRestaurant;
