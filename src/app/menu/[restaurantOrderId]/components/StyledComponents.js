import { MAIN_STYLE } from "@/statics/MAIN_STYLE";
import styled from "styled-components";

export const ContainerCashierOrderHeader = styled.div`
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

export const ContainerCashierOrderList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: ${MAIN_STYLE.CONTAINER_GAP}px;
  padding-left: ${MAIN_STYLE.CONTAINER_GAP}px;
  padding-right: ${MAIN_STYLE.CONTAINER_GAP}px;
  background-color: ${({ $backgroundColor = "transparent" }) =>
    $backgroundColor};
`;

export const ContainerFooter = styled.div`
  padding-left: ${MAIN_STYLE.CONTAINER_GAP}px;
  padding-right: ${MAIN_STYLE.CONTAINER_GAP}px;
  padding-bottom: ${MAIN_STYLE.CONTAINER_GAP}px;
  padding-top: ${MAIN_STYLE.CONTAINER_GAP}px;
  display: flex;
  flex-direction: row;
  gap: ${MAIN_STYLE.CONTAINER_GAP}px;
`;

export const ContainerFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${MAIN_STYLE.CONTAINER_GAP}px;
`;
