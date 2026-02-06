import { MAIN_STYLE } from "@/statics/MAIN_STYLE";
import styled from "styled-components";

export const ContainerCashierOrderHeader = styled.View`
  display: flex;
  flex-direction: column;
  gap: ${MAIN_STYLE?.CONTAINER_GAP}px;
  padding-top: ${MAIN_STYLE.CONTAINER_GAP}px;
  padding-left: ${MAIN_STYLE.CONTAINER_GAP}px;
  padding-right: ${MAIN_STYLE.CONTAINER_GAP}px;
  background-color: ${({ $backgroundColor = "transparent" }) =>
    $backgroundColor};
  padding-bottom: ${MAIN_STYLE?.CONTAINER_GAP}px;
`;

export const ContainerCashierOrderList = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: ${MAIN_STYLE.CONTAINER_GAP}px;
  padding-left: ${MAIN_STYLE.CONTAINER_GAP}px;
  padding-right: ${MAIN_STYLE.CONTAINER_GAP}px;
  background-color: ${({ $backgroundColor = "transparent" }) =>
    $backgroundColor};
`;

export const ContainerFooter = styled.View`
  padding-left: ${MAIN_STYLE.CONTAINER_GAP}px;
  padding-right: ${MAIN_STYLE.CONTAINER_GAP}px;
  margin-top: ${MAIN_STYLE.CONTAINER_GAP}px;
  display: flex;
  flex-direction: row;
  gap: ${MAIN_STYLE.CONTAINER_GAP}px;
`;

export const ContainerFilter = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${MAIN_STYLE.CONTAINER_GAP}px;
`;
