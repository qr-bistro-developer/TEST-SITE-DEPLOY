"use client";
import { httpRequest } from "@/helpers/https/httpRequest";
import React, { useEffect } from "react";

const Index = () => {
  const initial = async () => {
    try {
      const data = await httpRequest({
        externalUrl: `https://jsonplaceholder.typicode.com/todos/1`,
        method: "get",
      });
      console.log("data :>> ", data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    initial();
  }, []);
  return <div>Client Side</div>;
};

export default Index;
