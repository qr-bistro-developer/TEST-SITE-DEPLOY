import { COLOR_BODY_BACKGROUND } from "@/statics/COLORS";
import styled from "styled-components";

export const ContainerLayout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ $backgroundColor = COLOR_BODY_BACKGROUND }) =>
    $backgroundColor};
  height: ${({ $height = "auto" }) => $height};
  min-height: ${({ $minHeight = "100vh" }) => $minHeight};
  overflow: ${({ $overflow = "auto" }) => $overflow};
`;
