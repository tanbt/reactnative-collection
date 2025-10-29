import { Colors, PRIMARY, SECONDARY, TERTIARY, DARK, LIGHT, GRAY, WHITE, OPTION, GRADIENT } from './color';
import { Typography, FONT_FAMILY, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT } from './Typography';
import { Spacing, SPACING, GRID } from './Spacing';
import { SHADOWS } from './Shadows';
import { BORDER_RADIUS } from './BorderRadius';

export const DesignTokens = {
  colors: {
    primary: PRIMARY,
    secondary: SECONDARY,
    tertiary: TERTIARY,
    dark: DARK,
    gray: GRAY,
    light: LIGHT,
    white: WHITE,
    option: OPTION,
    gradient: GRADIENT,
  },
  typography: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE,
    fontWeight: FONT_WEIGHT,
    lineHeight: LINE_HEIGHT,
    styles: Typography,
  },
  spacing: {
    ...SPACING,
    grid: GRID,
  },
  shadows: SHADOWS,
  borderRadius: BORDER_RADIUS,
  
  // Theme support
  themes: {
    light: Colors.light,
    dark: Colors.dark,
  },
};

export default DesignTokens; 