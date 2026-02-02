"use client";

import _ from "lodash";
import styled from "styled-components";
import { ContainerLayout } from "@/components/Core/ContainerLayout";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { UnSupportedDevice } from "@/components/Core/UnSupportedDevice";
import { Text } from "@/components/Core/Text";
import { useSubdomain } from "@/hooks/useSubdomain";
import { useSupportedDevice } from "@/hooks/useSupportedDevice";
import { BREAKPOINTS } from "@statics/breakpoints";
import {
  getMenuAndBuffetExpire,
  getMenuList,
} from "@/services/menu/[restaurantOrderId]";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

// const REQUEST_MAIN_PATH = "/restaurant/menu";

const MenuRestaurant = () => {
  const params = useParams();
  const restaurantOrderId = _.get(params, ["restaurantOrderId"], "");
  const subdomain = useSubdomain();
  const isSupported = useSupportedDevice({ maxWidth: BREAKPOINTS.MOBILE_MAX });

  const initial = async () => {
    try {
      const payload = { restaurantOrderId };
      const [respMenuList, respBuffetExpire] = await Promise.all([
        getMenuList({ payload }),
        getMenuAndBuffetExpire({ payload }),
      ]);
      console.log("respMenuList :>> ", respMenuList);
      console.log("respBuffetExpire :>> ", respBuffetExpire);
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
