import { COLOR_BODY_BACKGROUND } from "@/statics/colors";
import styled from "styled-components";

export const ContainerLayout = styled.div`
  flex: 1;
  background: ${({ $backgroundColor = COLOR_BODY_BACKGROUND }) =>
    $backgroundColor};
  display: flex;
  justify-content: center;
`;
