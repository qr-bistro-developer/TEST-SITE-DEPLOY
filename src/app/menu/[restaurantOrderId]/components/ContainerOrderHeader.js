"use client";
import { Text } from "@components/Core/Text";
import { MAIN_STYLE } from "@statics/MAIN_STYLE";
import { resolveSize } from "@utils/resolve/resolveSize";
import { shallowEqual, useSelector } from "react-redux";
import styled from "styled-components";
import _ from "lodash";
import { resolveHexWithOpacity } from "@utils/resolve/resolveHexWithOpacity";
import Image from "next/image";
import IMAGE_DEFAULT_APP_LOGO from "@assets/images/IMAGE_DEFAULT_APP_LOGO.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ContainerNavigate = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${resolveSize({ value: MAIN_STYLE.CONTAINER_GAP })};
`;

const ContainerContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${resolveSize({ value: 4 })};
`;

const ContainerDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContainerLogo = styled.div`
  position: relative;
  width: ${resolveSize({ value: 48 })};
  aspect-ratio: 1 / 1;
  border-radius: ${resolveSize({ value: MAIN_STYLE.INPUT_DEFAULT_RADIUS })};
  background: white;
  overflow: hidden;
`;

export const ContainerCashierNavigateBack = ({
  $title = null,
  $serviceType = null,
  $countdown = null,
  $isExpired = false,
  $description = null,
  $logoImagePath = null,
  $restaurantName = null,
  children,
}) => {
  const navigateDescription = `Service type: ${_.capitalize($serviceType)}`;

  const theme = useSelector((state) => state?.themeColors?.data, shallowEqual);
  return (
    <Container>
      <ContainerNavigate>
        <ContainerLogo>
          <Image
            src={$logoImagePath || IMAGE_DEFAULT_APP_LOGO}
            alt={
              $logoImagePath
                ? `${$restaurantName} - QR Bistro Restaurant`
                : "QR Bistro Restaurant Logo"
            }
            fill
            style={{ objectFit: "cover" }}
          />
        </ContainerLogo>
        <ContainerContent>
          <Text
            as="h1"
            $fontSize={16}
            $fontWeight={500}
            $color={theme?.button?.text}
          >
            {$title}
          </Text>
          {$description && (
            <ContainerDescription>
              <Text
                as="p"
                $fontSize={13}
                $fontWeight={500}
                $color={resolveHexWithOpacity({
                  color: theme?.button?.text,
                  opacity: 100,
                })}
              >
                {$description}
              </Text>
            </ContainerDescription>
          )}
          {$serviceType && (
            <ContainerDescription>
              <Text
                as="p"
                $fontSize={13}
                $fontWeight={500}
                $color={resolveHexWithOpacity({
                  color: theme?.button?.text,
                  opacity: 100,
                })}
              >
                {navigateDescription}
              </Text>
              {$serviceType === "BUFFET" && $countdown && (
                <Text
                  as="time"
                  $fontSize={13}
                  $fontWeight={500}
                  $color={resolveHexWithOpacity({
                    color: theme?.button?.text,
                    opacity: 100,
                  })}
                >
                  {$isExpired ? "Expired" : $countdown}
                </Text>
              )}
            </ContainerDescription>
          )}
        </ContainerContent>
      </ContainerNavigate>
      {children}
    </Container>
  );
};
