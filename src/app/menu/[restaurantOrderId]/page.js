"use client";

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
  height: 100vh;
  background: blue;
`;

const MenuRestaurant = async ({ params = {} }) => {
  return (
    <ContainerLayout>
      <Container></Container>
    </ContainerLayout>
  );
};

export default MenuRestaurant;
