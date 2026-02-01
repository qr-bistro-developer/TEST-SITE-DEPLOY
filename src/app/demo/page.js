"use client";
import styled from "styled-components";
import { ContainerLayout } from "@/components/Core/ContainerLayout";
import { useDispatch } from "react-redux";
import { set } from "lodash";
import { setAccessToken } from "@/store/reducers/accessToken.reducers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  max-width: 1200px;
  min-height: 100vh;
  background: blue;
`;

const MenuRestaurant = ({ params = {} }) => {
  const dispatch = useDispatch();

  const handleSaveToken = () => {
    dispatch(setAccessToken("sample_token_12345"));
    localStorage.setItem("accessToken", "sample_token_12345");
  };

  return (
    <ContainerLayout>
      <Container>
        <button onClick={handleSaveToken}>Save Access Token</button>
      </Container>
    </ContainerLayout>
  );
};

export default MenuRestaurant;
