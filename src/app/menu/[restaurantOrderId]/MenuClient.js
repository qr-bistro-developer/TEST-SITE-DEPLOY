"use client";

import styled from "styled-components";
import { ContainerLayout } from "@/components/Core/ContainerLayout";
import { UnSupportedDevice } from "@/components/Core/UnSupportedDevice";
import { Text } from "@/components/Core/Text";
import { useSupportedDevice } from "@/hooks/useSupportedDevice";
import { BREAKPOINTS } from "@statics/breakpoints";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const MenuClient = ({
  $subdomain = "",
  $restaurantOrderId = "",
  $menuData = null,
  $buffetExpire = null,
}) => {
  const isSupported = useSupportedDevice({ maxWidth: BREAKPOINTS.MOBILE_MAX });

  console.log("menuData :>> ", $menuData);
  console.log("buffetExpire :>> ", $buffetExpire);

  return (
    <ContainerLayout>
      <Container>
        {isSupported ? (
          <>
            <Text>Subdomain: {$subdomain || "ไม่มี"}</Text>
            <Text>Restaurant Order ID: {$restaurantOrderId || "ไม่มี"}</Text>
          </>
        ) : (
          <UnSupportedDevice />
        )}
      </Container>
    </ContainerLayout>
  );
};
