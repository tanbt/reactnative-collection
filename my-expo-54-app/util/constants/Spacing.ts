export const SPACING = {
  // Base spacing values
  XXSMALL: 4,
  XSMALL: 8,
  SSMALL: 10,
  SMALL: 12,
  MEDIUM: 16,
  XMEDIUM: 18,
  LARGE: 20,
  XLARGE: 24,
  XSLARGE: 30,
  XXLARGE: 32,
  XXXLARGE: 40,
  XXXXLARGE: 50,
  HUGE: 60,
  HUGE_2: 80,
  HUGE_3: 100,
};

// Grid constants from the design tokens
export const GRID = {
  COLUMN_COUNT: 4,
  GUTTER_SIZE: 20,
  OFFSET: 20,
  ALIGNMENT: 'stretch',
  PATTERN: 'columns',
};

export const Spacing = {
  ...SPACING,
  GRID,
}; 