import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemedView } from '@/components/themed-view';
import { useTheme } from '@/hooks/use-theme';

// Mock the useTheme hook
jest.mock('@/hooks/use-theme');

const mockTheme = {
  text: '#000000',
  background: '#ffffff',
  backgroundElement: '#F0F0F3',
  backgroundSelected: '#E0E1E6',
  textSecondary: '#60646C',
};

describe('ThemedView', () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue(mockTheme);
  });

  it('renders children correctly', () => {
    const { getByTestId } = render(
      <ThemedView testID="parent-view">
        <ThemedView testID="child-view">Child Content</ThemedView>
      </ThemedView>
    );
    expect(getByTestId('child-view')).toBeTruthy();
    expect(getByTestId('parent-view')).toBeTruthy();
  });

  it('applies default background color from theme', () => {
    const { getByTestId } = render(
      <ThemedView testID="themed-view">Content</ThemedView>
    );
    const view = getByTestId('themed-view');
    expect(view.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ backgroundColor: mockTheme.background }),
      ])
    );
  });

  it('applies custom theme color type', () => {
    const { getByTestId } = render(
      <ThemedView testID="themed-view" type="backgroundElement">
        Content
      </ThemedView>
    );
    const view = getByTestId('themed-view');
    expect(view.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ backgroundColor: mockTheme.backgroundElement }),
      ])
    );
  });

  it('applies backgroundSelected type', () => {
    const { getByTestId } = render(
      <ThemedView testID="themed-view" type="backgroundSelected">
        Content
      </ThemedView>
    );
    const view = getByTestId('themed-view');
    expect(view.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ backgroundColor: mockTheme.backgroundSelected }),
      ])
    );
  });

  it('applies custom style prop', () => {
    const customStyle = { padding: 20, margin: 10 };
    const { getByTestId } = render(
      <ThemedView testID="themed-view" style={customStyle}>
        Content
      </ThemedView>
    );
    const view = getByTestId('themed-view');
    expect(view.props.style).toEqual(
      expect.arrayContaining([customStyle])
    );
  });

  it('passes through other View props', () => {
    const { getByTestId } = render(
      <ThemedView testID="custom-test-id" accessibilityLabel="Test View">
        Content
      </ThemedView>
    );
    const view = getByTestId('custom-test-id');
    expect(view.props.accessibilityLabel).toBe('Test View');
  });

  it('ignores lightColor and darkColor props (legacy props)', () => {
    const { getByTestId } = render(
      <ThemedView
        testID="themed-view"
        lightColor="#fff"
        darkColor="#000"
      >
        Content
      </ThemedView>
    );
    const view = getByTestId('themed-view');
    // Should use theme background, not the lightColor/darkColor
    expect(view.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ backgroundColor: mockTheme.background }),
      ])
    );
  });
});
