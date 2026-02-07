import styled from "styled-components";
import { Button } from "@components/Core/Button";
import { Text } from "@components/Core/Text";
import { MAIN_STYLE } from "@statics/MAIN_STYLE";
import { resolveHexWithOpacity } from "@utils/resolve/resolveHexWithOpacity";
import { useSelector, shallowEqual } from "react-redux";
import IMAGE_DEFAULT_RESTAURANT_MENU from "@assets/images/IMAGE_DEFAULT_RESTAURANT_MENU.png";
import { ICON_IMPORT_DATA } from "@assets/svgs/IMPORT/ICON_IMPORT_DATA";
import _ from "lodash";
import { resolveSize } from "@/utils/resolve/resolveSize";
// import { ContainerManageCardSideDescription } from '@components/ContainerManageCardSideDescription';
// import { resolveCurrency } from '@utils/resolve/resolveCurrency';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;
  border-radius: ${resolveSize({ value: MAIN_STYLE.CONTAINER_DEFAULT_RADIUS })};
  padding-bottom: ${resolveSize({ value: MAIN_STYLE.CONTAINER_GAP })};
`;

const ImageProduct = styled.div`
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
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${resolveSize({ value: 8 })};
  padding-left: ${resolveSize({ px: 8 })};
  padding-right: ${resolveSize({ px: 8 })};
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
    return <Container style={{ opacity: 0 }} />;
  }

  const resolveImagePath = ({ imagePath = null }) => {
    return imagePath ? { uri: imagePath } : IMAGE_DEFAULT_RESTAURANT_MENU;
  };

  return (
    <Button
      disabled={$disabled}
      style={{ flex: 1 }}
      activeOpacity={0.8}
      onClick={$handleCardPress}
    >
      <Container>
        <ImageProduct
          source={resolveImagePath({ imagePath: $item?.imagePath })}
          resizeMode="cover"
          $backgroundColor={resolveHexWithOpacity({
            color: theme?.text?.primary,
            opacity: 10,
          })}
        />
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
          {/* <View style={{ flex: 1 }}>
            <ContainerManageCardSideDescription
              $isActive
              $label="Price"
              $value={
                _.get($item, ["price"]) > 0
                  ? resolveCurrency({ value: _.get($item, ["price"]) })
                  : "-"
              }
            />
          </View>
          <Button
            disabled={$disabled}
            onPress={$handleButtonPress}
            $borderRadius={MAIN_STYLE?.BUTTON_DEFAULT_RADIUS}
            $borderWidth={0}
          >
            <SvgXml
              xml={ICON_IMPORT_DATA}
              fill={theme?.button?.background}
              width={fitPx({ px: 38 })}
              height={fitPx({ px: 38 })}
              opacity={1}
            />
          </Button> */}
        </ContainerPrice>
      </Container>
    </Button>
  );
};
