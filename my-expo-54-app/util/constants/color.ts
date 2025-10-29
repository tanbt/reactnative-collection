// Error Colors
export const ERROR = {
  500: '#f04438', // Main Error Color
};

// Primary Colors
export const PRIMARY = {
  100: '#f1c7d3',
  200: '#de96aa',
  300: '#d2728d',
  400: '#c74469',
  500: '#ed1b64', // Main Primary Color
  600: '#841837',
  700: '#700f2a',
  800: '#640c25',
  900: '#650722',
  90: '#9b2748e6',
  80: '#9b2748cc',
  20: '#9b274833',
  10: '#9b27481a',
  5: '#9b27480d',
};

// Secondary Colors
export const SECONDARY = {
  100: '#e1f1bc',
  200: '#cee993',
  300: '#bcde6b',
  400: '#afd751',
  500: '#383f99', // Main Secondary Color
  600: '#97bd33',
  700: '#88a52a',
  800: '#798d21',
  900: '#626615',
  90: '#a3d139e6',
  80: '#a3d139cc',
  20: '#a3d13933',
  10: '#a3d1391a',
  5: '#a3d1390d',
};

// Tertiary Colors
export const TERTIARY = {
  100: '#eee0fb',
  200: '#dcc0f7',
  300: '#cba1f2',
  400: '#b981ee',
  500: '#a862ea', // Main Tertiary Color
  600: '#864ebb',
  700: '#653b8c',
  800: '#43275e',
  900: '#22142f',
  90: '#a862eae6',
  80: '#a862eacc',
  20: '#a862ea33',
  10: '#a862ea1a',
  5: '#a862ea0d',
};

// Neutral Colors
export const DARK = {
  500: '#181214', // Main Dark Color
  90: '#181214e6',
  80: '#181214cc',
  20: '#18121433',
  10: '#1812141a',
  5: '#1812140d',
};

export const GRAY = {
  500: '#9c9497', // Main Gray Color
  90: '#9c9497e6',
  80: '#9c9497cc',
  20: '#9c949733',
  10: '#9c94971a',
  5: '#9c94970d',
};

export const LIGHT = {
  500: '#d9e1e1', // Main Light Color
  90: '#d9e1e1e6',
  80: '#d9e1e1cc',
  20: '#d9e1e133',
  10: '#d9e1e11a',
  5: '#d9e1e10d',
};

export const WHITE = {
  500: '#ffffff', // Main White Color
  90: '#ffffffe6',
  80: '#ffffffcc',
  20: '#ffffff33',
  10: '#ffffff1a',
  5: '#ffffff0d',
};

// Option Colors
export const OPTION = {
  1: '#30be82',
  2: '#30beb6',
  3: '#5d30be',
  4: '#304fbe',
};

// Gradients
export const GRADIENT = {
  1: ['#f74e89', '#af68dd'],
  2: ['#30beb6', '#3069be'],
  3: ['#5d30be', '#b330be'],
};

// Legacy colors for backward compatibility
const KamuBlue = "#2F52DA";
const NeonGreen = "#BAF26D";
const ForestGreen = "#003331";
const tabIconSelected = PRIMARY[500];

export const Colors = {
  // New palette
  PRIMARY,
  SECONDARY,
  TERTIARY,
  DARK,
  GRAY,
  LIGHT,
  WHITE,
  OPTION,
  GRADIENT,
  ERROR,
  
  // Legacy colors
  RedText: "#FF6262",
  ForestGreenVideoBg: "#043830",
  ForestGreen,
  ForestGreenLight: "#1B5D5A",
  Grey300: "#EBEBEB",
  BlackTransparent54: "#757575",
  KamuBlue,
  NeonGreen,

  // Theme colors
  light: {
    text: DARK[500],
    background: WHITE[500],
    bottomTabBackground: DARK[500],
    tabIconDefault: GRAY[500],
    tabIconSelected: PRIMARY[500],
    Grey300: LIGHT[500],
  },

  dark: {
    text: WHITE[500],
    background: DARK[500],
    bottomTabBackground: DARK[80],
    tabIconDefault: GRAY[500],
    tabIconSelected: PRIMARY[500],
    Grey300: DARK[20],
  },
};
