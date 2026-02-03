"use client";
import { ContainerLayout } from "@/components/Core/ContainerLayout";
import { UnSupportedDevice } from "@/components/Core/UnSupportedDevice";
import { useSupportedDevice } from "@/hooks/useSupportedDevice";
import { BREAKPOINTS } from "@/statics/breakpoints";
import { MAIN_STYLE } from "@/statics/MAIN_STYLE";
import _ from "lodash";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: red;
  max-width: ${BREAKPOINTS.MOBILE_MAX}px;
  width: 100%;
`;

const ContainerFilter = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${MAIN_STYLE.CONTAINER_GAP}px;
`;

export const ClientRestaurantMenu = ({
  $subdomain,
  $menulist,
  $buffetExpire,
  $restaurantOrderId,
}) => {
  const { isDeviceSupport } = useSupportedDevice({
    maxWidth: BREAKPOINTS.MOBILE_MAX,
  });

  const categories = _.chain($menulist)
    .map((item) => {
      return {
        id: _.get(item, ["id"]),
        value: _.get(item, ["name"]),
      };
    })
    .value();

  const productWithCategoryKey = _.chain($menulist)
    .keyBy((item) => {
      return _.get(item, ["id"]);
    })
    .mapValues((item) => {
      return _.get(item, ["restaurantProducts"], []);
    })
    .value();

  return (
    <ContainerLayout>
      {!isDeviceSupport ? (
        <UnSupportedDevice />
      ) : (
        <Container>ClientRestaurantMenu</Container>
      )}
    </ContainerLayout>
  );
};
