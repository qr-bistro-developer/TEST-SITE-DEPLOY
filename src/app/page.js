import { FONT_FAMILIES } from "@statics/FONT_FAMILIES";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Index = () => {
  return (
    <Container>
      <div style={{ fontFamily: FONT_FAMILIES.BUENARD }}>BUENARD</div>
      <div style={{ fontFamily: FONT_FAMILIES.ANUPHAN }}>BUENARD</div>
    </Container>
  );
};

export default Index;
