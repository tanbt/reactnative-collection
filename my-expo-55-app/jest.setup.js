// Built-in matchers are now available in @testing-library/react-native v12.4+
// No need to import @testing-library/jest-native

// Mock CSS imports
jest.mock('@/global.css', () => ({}));

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const View = require('react-native').View;
  return {
    default: {
      call: () => {},
    },
    FadeIn: {
      duration: () => ({}),
    },
    useSharedValue: jest.fn(),
    useAnimatedStyle: jest.fn(),
    withTiming: jest.fn(),
    withSpring: jest.fn(),
    withDelay: jest.fn(),
    Easing: {},
    View: View,
  };
});

// Mock react-native-worklets
jest.mock('react-native-worklets', () => ({}));

// Mock expo-router
jest.mock('expo-router', () => ({
  Link: 'Link',
  Tabs: 'Tabs',
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
  useLocalSearchParams: () => ({}),
  useSegments: () => [],
}));

// Mock expo-splash-screen
jest.mock('expo-splash-screen', () => ({
  hideAsync: jest.fn(),
  preventAutoHideAsync: jest.fn(),
}));

// Mock expo-symbols
jest.mock('expo-symbols', () => ({
  SymbolView: 'SymbolView',
}));

// Mock expo-web-browser
jest.mock('expo-web-browser', () => ({
  openBrowserAsync: jest.fn(),
}));

// Mock expo-font
jest.mock('expo-font', () => ({
  loadAsync: jest.fn(),
  isLoaded: jest.fn(() => true),
}));

