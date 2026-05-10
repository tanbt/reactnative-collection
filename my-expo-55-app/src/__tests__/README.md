# Unit Tests for my-expo-55-app

This directory contains unit tests for the Expo SDK 55 project.

## Setup

The project uses Jest with React Native Testing Library for unit testing.

### Test Dependencies

- `jest` - Testing framework
- `jest-expo` - Jest preset for Expo projects
- `@testing-library/react-native` - React Native testing utilities
- `react-test-renderer` - React renderer for testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Test Structure

Tests are organized in the `src/__tests__` directory:

```
src/__tests__/
├── components/        # Component tests
│   ├── themed-text.test.tsx
│   ├── themed-view.test.tsx
│   ├── hint-row.test.tsx
│   └── collapsible.test.tsx
├── hooks/            # Hook tests
│   └── use-theme.test.ts
└── constants/        # Constants tests
    └── theme.test.ts
```

## Test Coverage

### Components Tested

- **ThemedText** - Text component with theme support and multiple style variants
- **ThemedView** - View component with theme-aware backgrounds
- **HintRow** - Row displaying hints with code snippets
- **Collapsible** - Expandable/collapsible section with animation

### Hooks Tested

- **useTheme** - Returns current theme colors based on color scheme

### Constants Tested

- **Colors** - Light and dark theme color definitions
- **Fonts** - Platform-specific font mappings
- **Spacing** - Spacing scale constants

## Configuration

- **jest.config.js** - Jest configuration with Expo preset
- **jest.setup.js** - Setup file with mocks for Expo modules and React Native Reanimated

## Writing Tests

Example test structure:

```typescript
import React from 'react';
import { render } from '@testing-library/react-native';
import { YourComponent } from '@/components/your-component';

describe('YourComponent', () => {
  it('renders correctly', () => {
    const { getByText } = render(<YourComponent />);
    expect(getByText('Expected Text')).toBeTruthy();
  });
});
```

## Notes

- All Expo modules are mocked in `jest.setup.js`
- React Native Reanimated is mocked to avoid native module dependencies
- CSS imports are mocked to avoid parsing errors
- The `@/` path alias is configured to resolve to `src/`
