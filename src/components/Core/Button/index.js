/**
 * Custom Button Component (Next.js)
 *
 * Layout & Flex:
 * - $justifyContent: 'center' | 'flex-start' | 'flex-end' | 'space-between' | ...
 * - $alignItems: 'center' | 'flex-start' | 'flex-end'
 * - $flexDirection: 'row' | 'column'
 * - $gap: number (px)
 *
 * Size:
 * - $width, $height: number (px) | 'auto' | '100%'
 *
 * Spacing:
 * - Margin: $mt, $mb, $ml, $mr (px)
 * - Padding: $pt, $pb, $pl, $pr (px)
 *
 * Style:
 * - $borderStyle: 'solid' | 'dashed' | 'dotted'
 * - $borderWidth: number (px)
 * - $borderRadius: number (px)
 * - $borderColor: hex
 * - $backgroundColor: hex
 * - $opacity: number (default = 1)
 *
 * Disabled:
 * - disabled: boolean
 *
 * Interaction:
 * - $hoverBg: hex (hover background color)
 * - $activeBg: hex (active/pressed background color)
 */

import styled, { css } from "styled-components";
import { resolveSize } from "@utils/resolve/resolveSize";

export const Button = styled.button`
  display: flex;
  justify-content: ${({ $justifyContent = "center" }) => $justifyContent};
  align-items: ${({ $alignItems = "center" }) => $alignItems};
  flex-direction: ${({ $flexDirection = "row" }) => $flexDirection};
  gap: ${({ $gap = 0 }) => `${$gap}px`};

  width: ${({ $width = "auto" }) => resolveSize({ value: $width })};
  height: ${({ $height = "auto" }) => resolveSize({ value: $height })};

  ${({ $isSquare = false }) =>
    $isSquare &&
    css`
      aspect-ratio: 1;
    `}

  margin-top: ${({ $mt = 0 }) => `${$mt}px`};
  margin-bottom: ${({ $mb = 0 }) => `${$mb}px`};
  margin-left: ${({ $ml = 0 }) => `${$ml}px`};
  margin-right: ${({ $mr = 0 }) => `${$mr}px`};

  padding-top: ${({ $pt = 0 }) => `${$pt}px`};
  padding-bottom: ${({ $pb = 0 }) => `${$pb}px`};
  padding-left: ${({ $pl = 0 }) => `${$pl}px`};
  padding-right: ${({ $pr = 0 }) => `${$pr}px`};

  border-width: ${({ $borderWidth = 0 }) => `${$borderWidth}px`};
  border-style: ${({ $borderStyle = "solid" }) => $borderStyle};
  border-radius: ${({ $borderRadius = 0 }) => `${$borderRadius}px`};
  border-color: ${({ $borderColor = "transparent" }) => $borderColor};

  background-color: ${({ $backgroundColor = "transparent" }) =>
    $backgroundColor};
  opacity: ${({ $opacity = 1, disabled = false }) => (disabled ? 0.5 : $opacity)};

  cursor: ${({ disabled = false }) => (disabled ? "not-allowed" : "pointer")};
  outline: none;
  box-sizing: border-box;
  font-family: inherit;
  transition: background-color 0.2s ease, opacity 0.2s ease, transform 0.1s ease;

  &:hover:not(:disabled) {
    background-color: ${({ $hoverBg, $backgroundColor = "transparent" }) =>
      $hoverBg || $backgroundColor};
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
    background-color: ${({ $activeBg, $hoverBg, $backgroundColor = "transparent" }) =>
      $activeBg || $hoverBg || $backgroundColor};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
