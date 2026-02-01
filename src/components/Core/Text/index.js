/**
 * Custom Text Component (Next.js)
 *
 * Props:
 *
 * Typography:
 * - $fontWeight: 100 | 200 | 300 | ... | 900
 * - $fontFamily: 'niramit' | 'anuphan' | 'kanit' (CSS variable name)
 * - $fontSize: number (default = 16)
 * - $color: string (hex | theme color)
 * - $textTransform: 'none' | 'uppercase' | 'lowercase' | 'capitalize'
 * - $decorationLine: 'none' | 'underline' | 'line-through'
 * - $align: 'left' | 'center' | 'right'
 * - $opacity: number (default = 1)
 *
 * Spacing:
 * - Margin: $mt, $mb, $ml, $mr (px)
 * - Padding: $pt, $pb, $pl, $pr (px)
 *
 * Ellipsis:
 * - $ellipsis: boolean (default = false)
 * - $maxLines: number (default = 1)
 *
 * Disabled:
 * - $disabled: boolean
 */

import styled, { css } from "styled-components";
import { COLOR_DARK } from "@/statics/colors";
import { FONT_FAMILIES } from "@/statics/fonts";
import { resolveSize } from "@/utils/resolve/resolveSize";

export const Text = styled.span`
  color: ${({ $color = COLOR_DARK }) => $color};
  font-family: ${({ $fontFamily = FONT_FAMILIES.IBM_PLEX_SANS_THAI }) =>
    $fontFamily};
  font-weight: ${({ $fontWeight = 400 }) => $fontWeight};
  font-size: ${({ $fontSize = 16 }) => `${$fontSize}px`};

  opacity: ${({ $disabled = false, $opacity = 1 }) =>
    $disabled ? 0.5 : $opacity};
  width: ${({ $width = "auto" }) => resolveSize({ value: $width })};

  text-decoration: ${({ $decorationLine = "none" }) => $decorationLine};
  text-transform: ${({ $textTransform = "none" }) => $textTransform};
  text-align: ${({ $align = "left" }) => $align};
  line-height: ${({ $lineHeight = 1.5 }) => $lineHeight};

  margin-top: ${({ $mt = 0 }) => `${$mt}px`};
  margin-bottom: ${({ $mb = 0 }) => `${$mb}px`};
  margin-left: ${({ $ml = 0 }) => `${$ml}px`};
  margin-right: ${({ $mr = 0 }) => `${$mr}px`};

  padding-top: ${({ $pt = 0 }) => `${$pt}px`};
  padding-bottom: ${({ $pb = 0 }) => `${$pb}px`};
  padding-left: ${({ $pl = 0 }) => `${$pl}px`};
  padding-right: ${({ $pr = 0 }) => `${$pr}px`};

  ${({ $ellipsis = false, $maxLines = 1 }) =>
    $ellipsis &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${$maxLines};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;
