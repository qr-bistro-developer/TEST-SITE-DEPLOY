import { COLOR_BODY_BACKGROUND } from "@/statics/colors";
import styled from "styled-components";

export const ContainerLayout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${({ $backgroundColor = COLOR_BODY_BACKGROUND }) =>
    $backgroundColor};
  min-height: 100vh;
  overflow: ${({ $overflow = "auto" }) => $overflow};
`;
