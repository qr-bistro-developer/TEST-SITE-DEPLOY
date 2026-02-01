import { headers } from "next/headers";
import _ from "lodash";
import { httpRequest } from "@/helpers/https/httpRequest";
import styled from "styled-components";
import { ContainerLayout } from "@/components/Core/ContainerLayout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  max-width: 1200px;
  min-height: 100vh;
  background: blue;
`;

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
    <ContainerLayout>
      <Container>
        <div style={{ background: "green", height: 300, width: 20 }} />
        <div style={{ background: "green", height: 300, width: 20 }} />
        <div style={{ background: "green", height: 300, width: 20 }} />
        <div style={{ background: "green", height: 300, width: 20 }} />
        <div style={{ background: "green", height: 300, width: 20 }} />
        <div style={{ background: "green", height: 300, width: 20 }} />
        <div style={{ background: "green", height: 300, width: 20 }} />
        <div style={{ background: "green", height: 300, width: 20 }} />
        <div style={{ background: "green", height: 300, width: 20 }} />
        <div style={{ background: "green", height: 300, width: 20 }} />
        <div style={{ background: "green", height: 300, width: 20 }} />
        <div style={{ background: "black", height: 300, width: 20 }} />
      </Container>
    </ContainerLayout>
  );
};

export default MenuRestaurant;
