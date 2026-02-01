import { headers } from "next/headers";
import _ from "lodash";
import { httpRequest } from "@/helpers/https/httpRequest";

const MenuRestaurant = async ({ params = {} }) => {
  // const headersList = await headers();
  // const { restaurantOrderId = "" } = await params;
  // const subdomain = headersList.get("x-subdomain") || "";

  const data = await httpRequest({
    externalUrl: `https://jsonplaceholder.typicode.com/todos/1`,
    method: "get",
  });
  console.log("data :>> ", data);

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
      {/* <p>Subdomain: {subdomain}</p>
      <p>Restaurant Order ID: {restaurantOrderId}</p> */}
    </div>
  );
};

export default MenuRestaurant;
