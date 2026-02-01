import { headers } from "next/headers";
import _ from "lodash";

const MenuRestaurant = async ({ params = {} }) => {
  const headersList = await headers();
  const { restaurantOrderId = "" } = await params;
  const subdomain = headersList.get("x-subdomain") || "";

  return (
    <div>
      <p>Subdomain: {subdomain}</p>
      <p>Restaurant Order ID: {restaurantOrderId}</p>
    </div>
  );
};

export default MenuRestaurant;
