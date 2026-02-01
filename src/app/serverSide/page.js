import { httpRequest } from "@/helpers/https/httpRequest";
import React from "react";

const Index = async () => {
  const resp = await httpRequest({
    externalUrl: `https://jsonplaceholder.typicode.com/todos/1`,
    method: "get",
  });
  console.log("resp :>> ", resp);
  return <div>Server Side</div>;
};

export default Index;
