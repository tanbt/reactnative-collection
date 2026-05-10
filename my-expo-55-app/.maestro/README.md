# Maestro E2E Tests

This directory contains end-to-end tests for the Expo SDK 55 app using [Maestro](https://maestro.mobile.dev/).

## Test Files

### `app-flow.yaml`
The main E2E test flow that validates:
- App launch and initialization
- Home screen UI elements
- Tab navigation functionality
- Explore screen content
- Interactive collapsible sections
- Return navigation to Home

## Running Tests

### Prerequisites
1. Maestro CLI must be installed (see main README.md)
2. App must be running in a simulator/emulator

### Execute Tests
```bash
# From project root
npm run test:e2e

# Or directly with Maestro
maestro test .maestro/app-flow.yaml
```

## Test Structure

Each test file follows this structure:
```yaml
appId: com.vina-tan.my-expo-55-app
---
- launchApp
- assertVisible: "text to find"
- tapOn: "button or element"
```

## Common Maestro Commands

- `launchApp` - Launches the app
- `assertVisible: "text"` - Asserts that text is visible on screen
- `tapOn: "text"` - Taps on an element containing the text
- `scrollUntilVisible:` - Scrolls until an element is visible
- `inputText: "text"` - Inputs text into the currently focused field

## Adding New Tests

1. Create a new `.yaml` file in this directory
2. Define the appId at the top
3. Write test steps using Maestro commands
4. Run with: `maestro test .maestro/your-test.yaml`

## Tips for Writing Tests

- Use exact text matches from your UI components
- Break complex flows into smaller, focused test files
- Test one user journey per file for better debugging
- Use descriptive file names (e.g., `login-flow.yaml`, `checkout-flow.yaml`)

## Documentation

- [Maestro Documentation](https://maestro.mobile.dev/)
- [Command Reference](https://maestro.mobile.dev/reference/commands)
- [Examples](https://maestro.mobile.dev/examples)
