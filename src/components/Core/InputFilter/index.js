"use client";
import React, { useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { ICON_INPUT_FILTER } from "@assets/svgs/INPUT_FILTER/ICON_INPUT_FILTER";
import { ICON_CLEAR_FILTER } from "@assets/svgs/INPUT_FILTER/ICON_CLEAR_FILTER";
import _ from "lodash";
import { FILTER_DEBOUNCE } from "@statics/DEBOUNCE";
import { shallowEqual, useSelector } from "react-redux";
import { MAIN_STYLE } from "@statics/MAIN_STYLE";
import { COLOR_GRAY } from "@statics/COLORS";
import { FONT_FAMILIES } from "@/statics/FONT_FAMILIES";
import { resolveSize } from "@utils/resolve/resolveSize";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  left: 12px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ClearButtonContainer = styled.button`
  position: absolute;
  right: 12px;
  z-index: 1;
  padding: 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;

const InputBase = styled.input`
  flex: 1;
  height: ${resolveSize({ value: MAIN_STYLE.INPUT_DEFAULT_HEIGHT })};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ $borderColor = "transparent" }) => $borderColor};
  padding-left: ${resolveSize({ value: 44 })};
  padding-right: ${resolveSize({
    value: MAIN_STYLE?.INPUT_DEFAULT_PADDING_LEFT,
  })};
  border-radius: ${resolveSize({ value: MAIN_STYLE?.INPUT_DEFAULT_RADIUS })};
  opacity: ${({ $disabled = false }) => ($disabled ? 0.7 : 1)};
  background: ${({ $backgroundColor = "transparent", $disabled = false }) =>
    $disabled ? COLOR_GRAY : $backgroundColor};
  font-family: ${({ $fontFamily = FONT_FAMILIES.IBM_PLEX_SANS_THAI }) =>
    $fontFamily};
  font-size: ${({ $fontSize = 16 }) => resolveSize({ value: $fontSize })};
  color: ${({ $inputColor = "inherit" }) => $inputColor};
  outline: none;

  &::placeholder {
    color: ${({ $placeholderColor = "#999" }) => $placeholderColor};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const InputFilter = ({
  $placeholder = "Enter filter",
  $handleFilter = () => undefined,
  $setFilterName = () => undefined,
  $disabled = false,
}) => {
  const theme = useSelector((state) => state?.themeColors?.data, shallowEqual);
  const inputRef = useRef(null);
  const [showClear, setShowClear] = useState(false);

  const debouncedFilter = useMemo(
    () =>
      _.debounce((text) => {
        $handleFilter({ filterName: text });
      }, FILTER_DEBOUNCE),
    [$handleFilter],
  );

  const handleChangeInput = (e) => {
    const value = _.get(e, ["target", "value"], "");
    setShowClear(value?.length > 0);
    $setFilterName(value);
    debouncedFilter(value);
  };

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setShowClear(false);
    $setFilterName("");
    $handleFilter({ filterName: "" });
  };

  return (
    <Container>
      <IconContainer>
        <ICON_INPUT_FILTER $size={20} $fill={theme?.text?.primary} />
      </IconContainer>
      <InputBase
        ref={inputRef}
        disabled={$disabled}
        $disabled={$disabled}
        $inputColor={theme?.input?.color}
        $borderColor={theme?.input?.color}
        $backgroundColor={theme?.input?.background}
        $placeholderColor={theme?.input?.placeholder}
        onChange={handleChangeInput}
        autoCorrect="off"
        autoCapitalize="off"
        placeholder={$placeholder}
        spellCheck={false}
      />
      {showClear && !$disabled && (
        <ClearButtonContainer onClick={handleClear} type="button">
          <ICON_CLEAR_FILTER $size={20} $fill={theme?.text?.primary} />
        </ClearButtonContainer>
      )}
    </Container>
  );
};
