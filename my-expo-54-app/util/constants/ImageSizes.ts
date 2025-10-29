/**
 * ImageSizes - Standardized sizes for images, icons, and SVGs in the app
 * 
 * This constants file defines the standard sizes for various visual elements
 * to maintain consistency across the application.
 */

// Icon sizes
export const ICON_SIZE = {
  XSMALL: 16,   // Small indicators, status icons
  SMALL: 20,    // Small nav icons, coin icons
  MEDIUM: 24,   // Standard UI icons
  LARGE: 28,    // Large interactive icons
  XLARGE: 32,   // Primary UI elements
  XXLARGE: 48,  // Large touch targets, profile pictures
};

// Logo sizes
export const LOGO_SIZE = {
  SMALL: {
    WIDTH: 80,
    HEIGHT: 24,
  },
  MEDIUM: {
    WIDTH: 138,
    HEIGHT: 50,
  },
  LARGE: {
    WIDTH: 200,
    HEIGHT: 72,
  },
};

// Avatar sizes
export const AVATAR_SIZE = {
  XSMALL: 24,   // Comments, small lists
  SMALL: 32,    // Secondary UI elements
  MEDIUM: 44,   // Header profiles
  LARGE: 64,    // User profiles
  XLARGE: 96,   // Detailed profile views
  XXLARGE: 128, // Full profile displays
};

// Card image aspect ratios
export const IMAGE_ASPECT_RATIO = {
  SQUARE: 1,      // 1:1
  PORTRAIT: 4/3,  // 4:3
  LANDSCAPE: 16/9, // 16:9
  WIDE: 2,        // 2:1
};

// Banner sizes
export const BANNER_SIZE = {
  SMALL: {
    HEIGHT: 100,
  },
  MEDIUM: {
    HEIGHT: 150,
  },
  LARGE: {
    HEIGHT: 200,
  },
}; 