"use client";

import { ContainerLayout } from "@components/Core/ContainerLayout";
import { Text } from "@components/Core/Text";
import _ from "lodash";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

const Line = styled.div`
  width: 1px;
  height: 40px;
  background-color: #171717;
`;

const parseErrorDigest = (digest) => {
  try {
    return JSON.parse(digest);
  } catch {
    return null;
  }
};

const ClientSide = ({ error }) => {
  const router = useRouter();
  const digestData = parseErrorDigest(_.get(error, ["digest"]));
  const errorStatus =
    _.get(digestData, ["status"]) || _.get(error, ["status"], null);
  const errorMessage =
    _.get(digestData, ["message"]) ||
    _.get(error, ["message"], "Something went wrong");

  useEffect(() => {
    if (errorStatus === 401) {
      alert(errorMessage);
      router.replace("/");
    }
  }, [errorStatus, errorMessage, router]);

  if (errorStatus === 401) {
    return null;
  }

  return (
    <ContainerLayout $overflow="hidden" $backgroundColor="white">
      <Container>
        <ContainerContent>
          <Text as={"h1"} $fontSize={22} $fontWeight={500}>
            Error
          </Text>
          <Line />
          <Text
            $textTransform="capitalize"
            as={"h2"}
            $fontSize={14}
            $fontWeight={400}
          >
            {errorMessage}
          </Text>
        </ContainerContent>
      </Container>
    </ContainerLayout>
  );
};

export default ClientSide;
