import { Platform } from 'react-native';

// Android and iOS have different shadow implementations
export const SHADOWS = {
  // Based on the design tokens shadow 'ds_1'
  DEFAULT: Platform.select({
    ios: {
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 38.5,
      },
      shadowOpacity: 0.03,
      shadowRadius: 25.5,
    },
    android: {
      elevation: 5,
    },
  }),

  MEDIUM: Platform.select({
    ios: {
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 100,
      },
      shadowOpacity: 0.05,
      shadowRadius: 80,
    },
    android: {
      elevation: 10,
    },
  }),

  NONE: Platform.select({
    ios: {
      shadowColor: "transparent",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0,
      shadowRadius: 0,
    },
    android: {
      elevation: 0,
    },
  }),
}; 