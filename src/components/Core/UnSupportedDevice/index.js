import { Text } from "@components/Core/Text";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UnSupportedDevice = () => {
  return (
    <Container>
      <Text>ไม่รองรับการแสดงผลบนหน้าจอขนาดนี้</Text>
      <Text>กรุณาใช้งานผ่านมือถือหรือแท็บเล็ต</Text>
    </Container>
  );
};
