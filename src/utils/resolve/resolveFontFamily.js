import { FONT_FAMILIES, DEFAULT_FONT } from "@/statics/fonts";

export const resolveFontFamily = ({ fontFamily = DEFAULT_FONT } = {}) => {
  return FONT_FAMILIES[fontFamily] || FONT_FAMILIES[DEFAULT_FONT];
};
