"use client";
import {
  ContainerCashierOrderHeader,
  ContainerCashierOrderList,
  ContainerFilter,
  ContainerFooter,
} from "@app/menu/[restaurantOrderId]/components/StyledComponents";
import { ContainerLayout } from "@/components/Core/ContainerLayout";
import { UnSupportedDevice } from "@/components/Core/UnSupportedDevice";
import { InputFilter } from "@components/Core/InputFilter";
import { ICON_ORDER_LIST } from "@assets/svgs/INPUT_FILTER/ICON_ORDER_LIST";
import { useSupportedDevice } from "@/hooks/useSupportedDevice";
import { BREAKPOINTS } from "@/statics/BREAKPOINTS";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setThemeColors } from "@store/redux/reducers/themeColors.reducers";
import _ from "lodash";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Button } from "@/components/Core/Button";
import { ContainerCashierNavigateBack } from "@/app/menu/[restaurantOrderId]/components/ContainerOrderHeader";
import { useCountdown } from "@/hooks/useCountdown";
import { Text } from "@/components/Core/Text";
import { MAIN_STYLE } from "@/statics/MAIN_STYLE";
import { useRequesting } from "@/hooks/useRequesting";
import { ContainerProductItem } from "@/app/menu/[restaurantOrderId]/components/ContainerProductItem";

const Container = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  max-width: ${BREAKPOINTS.MOBILE_MAX}px;
  width: 100%;
`;

const InputFilterWrapper = styled.div`
  flex: 1;
`;

const ContainerCategories = styled.div`
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
  gap: ${MAIN_STYLE.CONTAINER_GAP}px;
  padding: ${MAIN_STYLE.CONTAINER_GAP}px;
`;

export const ClientSideComponent = ({
  $subdomain,
  $menulist,
  $buffetExpire,
  $restaurantOrderId,
  $tableInformation,
  $restaurantInformation,
}) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state?.themeColors?.data, shallowEqual);
  const orderCart = useSelector(
    (state) => state?.orderCart?.data,
    shallowEqual,
  );
  const { isRequesting, startRequest, endRequest } = useRequesting();
  const resultExpireIn = _.get($buffetExpire, ["expireIn"], null);
  const serviceType = _.get($tableInformation, ["serviceType"], "A LA CARTE");
  const { countdownFormatted, isExpired } = useCountdown(resultExpireIn);
  const restaurantTheme = _.get($restaurantInformation, ["theme"], null);
  const disabled =
    serviceType === "A LA CARTE" ? false : isRequesting || isExpired;
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = _.chain($menulist)
    .map((item) => {
      return {
        id: _.get(item, ["id"]),
        value: _.get(item, ["name"]),
      };
    })
    .value();

  const productWithCategoryKey = _.chain($menulist)
    .keyBy((item) => {
      return _.get(item, ["id"]);
    })
    .mapValues((item) => {
      return _.get(item, ["restaurantProducts"], []);
    })
    .value();

  useEffect(() => {
    if (restaurantTheme) {
      dispatch(setThemeColors(restaurantTheme));
    }
  }, [restaurantTheme, dispatch]);

  const [filterName, setFilterName] = useState("");

  const displayProductList = useMemo(() => {
    if (!productWithCategoryKey) {
      return [];
    }

    if (filterName && filterName.trim() !== "") {
      return _.chain(productWithCategoryKey)
        .values()
        .flatten()
        .filter((product) => {
          const productName = _.get(product, ["name"], "").toLowerCase();
          const searchText = filterName.toLowerCase();
          return productName.includes(searchText);
        })
        .uniqBy("id")
        .value();
    }

    if (selectedCategory) {
      return _.get(productWithCategoryKey, [selectedCategory], []);
    }

    return [];
  }, [productWithCategoryKey, filterName, selectedCategory]);

  const { isDeviceSupport } = useSupportedDevice({
    maxWidth: BREAKPOINTS.MOBILE_MAX,
  });

  const handleFilter = ({ filterName }) => {
    setFilterName(filterName);
  };

  const handleNavigateToOrderList = () => {
    // TODO: implement navigation to order list
  };

  const handleNavigateToCart = () => {
    // TODO: implement navigation to cart
  };

  return (
    <ContainerLayout $overflow="hidden" $height="100vh" $minHeight="0">
      {/* {isDeviceSupport ? ( */}
      <Container>
        <ContainerCashierOrderHeader
          $backgroundColor={theme?.button?.background}
        >
          <ContainerCashierNavigateBack
            $title={_.get($tableInformation, ["name"])}
            $logoImagePath={_.get($restaurantInformation, ["logoImagePath"])}
            $restaurantName={_.get($restaurantInformation, ["name"])}
            $countdown={countdownFormatted}
            $isExpired={isExpired}
            $serviceType={serviceType}
          />
          <ContainerFilter>
            <InputFilterWrapper>
              <InputFilter
                $placeholder="Enter name"
                $handleFilter={handleFilter}
                $setFilterName={setFilterName}
              />
            </InputFilterWrapper>
            <Button
              type="button"
              aria-label="View order list"
              onClick={() => handleNavigateToOrderList()}
            >
              <ICON_ORDER_LIST $size={38} $fill={theme?.button?.text} />
            </Button>
          </ContainerFilter>
        </ContainerCashierOrderHeader>
        <ContainerCategories>
          {_.map(categories, (item) => {
            const categoryId = _.get(item, ["id"]);
            const categoryName = _.get(item, ["value"]);
            const isSelected = categoryId === selectedCategory;
            const isFilterActive = filterName && filterName.trim() !== "";
            return (
              <Button
                key={categoryId}
                disabled={isFilterActive}
                onClick={() => setSelectedCategory(categoryId)}
                $height={MAIN_STYLE.BUTTON_DEFAULT_HEIGHT - 12}
                $pr={16}
                $pl={16}
                $backgroundColor={
                  isSelected ? theme?.button?.background : theme?.button?.text
                }
                $borderWidth={1}
                $borderRadius={8}
                $borderColor={theme?.button?.background}
              >
                <Text
                  $ellipsis={false}
                  $whiteSpace="nowrap"
                  $fontSize={14}
                  $fontWeight={600}
                  $textTransform="capitalize"
                  $align="center"
                  $color={
                    isSelected ? theme?.button?.text : theme?.button?.background
                  }
                >
                  {categoryName}
                </Text>
              </Button>
            );
          })}
        </ContainerCategories>
        <ContainerCashierOrderList>
          {_.map(new Array(300), (item, index) => {
            return <ContainerProductItem key={index} />;
          })}
        </ContainerCashierOrderList>
        <ContainerFooter>
          <Button
            style={{ flex: 1 }}
            disabled={
              disabled ||
              _.chain(orderCart).get([$restaurantOrderId]).isEmpty().value()
            }
            onClick={() => handleNavigateToCart()}
            $height={MAIN_STYLE?.BUTTON_DEFAULT_HEIGHT}
            $borderRadius={MAIN_STYLE?.BUTTON_DEFAULT_RADIUS}
            $backgroundColor={theme?.button?.background}
          >
            <Text
              $fontWeight={600}
              $fontSize={16}
              $color={theme?.button?.text}
              $textTransform={"uppercase"}
            >
              Cart
            </Text>
          </Button>
        </ContainerFooter>
      </Container>
      {/* ) : (
         <UnSupportedDevice />
       )} */}
    </ContainerLayout>
  );
};
