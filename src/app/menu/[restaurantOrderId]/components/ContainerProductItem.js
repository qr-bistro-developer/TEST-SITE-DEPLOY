import styled from "styled-components";
import { Button } from "@components/Core/Button";
import { Text } from "@components/Core/Text";
import { MAIN_STYLE } from "@statics/MAIN_STYLE";
import { resolveHexWithOpacity } from "@utils/resolve/resolveHexWithOpacity";
import { useSelector, shallowEqual } from "react-redux";
import IMAGE_DEFAULT_RESTAURANT_MENU from "@assets/images/IMAGE_DEFAULT_RESTAURANT_MENU.png";
import { ICON_IMPORT_DATA } from "@assets/svgs/IMPORT/ICON_IMPORT_DATA";
import _ from "lodash";
import { resolveSize } from "@utils/resolve/resolveSize";
import Image from "next/image";

const Container = styled.div`
  width: calc((100% - ${MAIN_STYLE.CONTAINER_GAP}px) / 2);
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;
  border-radius: ${resolveSize({ value: MAIN_STYLE.CONTAINER_DEFAULT_RADIUS })};
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${resolveSize({ value: 140 })};
  background-color: ${({ $backgroundColor = "#f0f0f0" }) => $backgroundColor};
`;

const ContainerInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: ${resolveSize({ value: 8 })};
  padding-left: ${resolveSize({ value: 8 })};
  padding-right: ${resolveSize({ value: 8 })};
`;

const ContainerPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${resolveSize({ value: 8 })};
  padding-left: ${resolveSize({ value: 8 })};
  padding-right: ${resolveSize({ value: 8 })};
  padding-bottom: ${resolveSize({ value: 8 })};
`;

export const ContainerProductItem = ({
  $item = null,
  $disabled = false,
  $handleCardPress = () => undefined,
  $handleButtonPress = () => undefined,
}) => {
  const isPlaceholder = _.get($item, ["isPlaceholder"], false);
  const theme = useSelector((state) => state?.themeColors?.data, shallowEqual);

  if (isPlaceholder) {
    return <Container style={{ visibility: "hidden" }} />;
  }

  const imagePath = _.get($item, ["imagePath"], null);

  return (
    <Container
      onClick={$disabled ? undefined : $handleCardPress}
      style={{ cursor: $disabled ? "default" : "pointer" }}
    >
      <ImageWrapper
        $backgroundColor={resolveHexWithOpacity({
          color: theme?.text?.primary,
          opacity: 10,
        })}
      >
        <Image
          src={imagePath || IMAGE_DEFAULT_RESTAURANT_MENU}
          alt={_.get($item, ["name"], "product")}
          fill
          sizes="50vw"
          style={{ objectFit: "cover" }}
        />
      </ImageWrapper>
      <ContainerInfo>
        <Text
          $color={theme?.text?.primary}
          $ellipsis
          $maxLines={1}
          $fontSize={16}
          $fontWeight={400}
        >
          {_.get($item, ["name"], "-")}
        </Text>
      </ContainerInfo>
      <ContainerPrice>
        <Text
          style={{ flex: 1 }}
          $color={theme?.text?.secondary}
          $fontSize={14}
          $fontWeight={400}
        >
          {_.get($item, ["price"], 0) > 0
            ? `฿${_.get($item, ["price"], 0)}`
            : "-"}
        </Text>
        <Button
          type="button"
          aria-label="Add to cart"
          disabled={$disabled}
          onClick={(e) => {
            e.stopPropagation();
            $handleButtonPress();
          }}
          $borderRadius={MAIN_STYLE?.BUTTON_DEFAULT_RADIUS}
          $borderWidth={0}
        >
          <ICON_IMPORT_DATA $size={38} $fill={theme?.button?.background} />
        </Button>
      </ContainerPrice>
    </Container>
  );
};
