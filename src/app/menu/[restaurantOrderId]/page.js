"use client";

import _ from "lodash";
import styled from "styled-components";
import { ContainerLayout } from "@/components/Core/ContainerLayout";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { UnSupportedDevice } from "@/components/Core/UnSupportedDevice";
import { Text } from "@/components/Core/Text";
import { httpRequest } from "@helpers/https/httpRequest";
import { useSubdomain } from "@/hooks/useSubdomain";
import { useSupportedDevice } from "@/hooks/useSupportedDevice";
import { BREAKPOINTS } from "@statics/breakpoints";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const MenuRestaurant = () => {
  const params = useParams();
  const restaurantOrderId = _.get(params, ["restaurantOrderId"], "");
  const subdomain = useSubdomain();
  const isSupported = useSupportedDevice({ maxWidth: BREAKPOINTS.MOBILE_MAX });

  const initial = async () => {
    try {
      const payload = { restaurantOrderId };
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

  return (
    <ContainerLayout>
      <Container>
        {isSupported ? (
          <>
            <Text>Subdomain: {subdomain || "ไม่มี"}</Text>
            <Text>Restaurant Order ID: {restaurantOrderId || "ไม่มี"}</Text>
          </>
        ) : (
          <UnSupportedDevice />
        )}
      </Container>
    </ContainerLayout>
  );
};

export default MenuRestaurant;
