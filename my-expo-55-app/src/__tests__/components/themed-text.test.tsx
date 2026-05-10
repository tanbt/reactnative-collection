import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemedText } from '@/components/themed-text';
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

describe('ThemedText', () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue(mockTheme);
  });

  it('renders with default type', () => {
    const { getByText } = render(<ThemedText>Hello World</ThemedText>);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('applies text color from theme', () => {
    const { getByText } = render(<ThemedText>Themed Text</ThemedText>);
    const textElement = getByText('Themed Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ color: mockTheme.text }),
      ])
    );
  });

  it('applies custom theme color', () => {
    const { getByText } = render(
      <ThemedText themeColor="textSecondary">Secondary Text</ThemedText>
    );
    const textElement = getByText('Secondary Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ color: mockTheme.textSecondary }),
      ])
    );
  });

  it('renders with title type', () => {
    const { getByText } = render(<ThemedText type="title">Title</ThemedText>);
    const textElement = getByText('Title');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 48, fontWeight: 600, lineHeight: 52 }),
      ])
    );
  });

  it('renders with subtitle type', () => {
    const { getByText } = render(<ThemedText type="subtitle">Subtitle</ThemedText>);
    const textElement = getByText('Subtitle');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 32, fontWeight: 600, lineHeight: 44 }),
      ])
    );
  });

  it('renders with small type', () => {
    const { getByText } = render(<ThemedText type="small">Small Text</ThemedText>);
    const textElement = getByText('Small Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 14, fontWeight: 500, lineHeight: 20 }),
      ])
    );
  });

  it('renders with smallBold type', () => {
    const { getByText } = render(<ThemedText type="smallBold">Small Bold</ThemedText>);
    const textElement = getByText('Small Bold');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 14, fontWeight: 700, lineHeight: 20 }),
      ])
    );
  });

  it('renders with link type', () => {
    const { getByText } = render(<ThemedText type="link">Link Text</ThemedText>);
    const textElement = getByText('Link Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 14, lineHeight: 30 }),
      ])
    );
  });

  it('renders with linkPrimary type', () => {
    const { getByText } = render(<ThemedText type="linkPrimary">Primary Link</ThemedText>);
    const textElement = getByText('Primary Link');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 14, lineHeight: 30, color: '#3c87f7' }),
      ])
    );
  });

  it('renders with code type', () => {
    const { getByText } = render(<ThemedText type="code">const code = true;</ThemedText>);
    const textElement = getByText('const code = true;');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 12 }),
      ])
    );
  });

  it('applies custom style prop', () => {
    const customStyle = { fontSize: 20, fontWeight: 'bold' as const };
    const { getByText } = render(
      <ThemedText style={customStyle}>Custom Style</ThemedText>
    );
    const textElement = getByText('Custom Style');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([customStyle])
    );
  });

  it('passes through other Text props', () => {
    const { getByText } = render(
      <ThemedText testID="custom-test-id" numberOfLines={2}>
        Test Props
      </ThemedText>
    );
    const textElement = getByText('Test Props');
    expect(textElement.props.testID).toBe('custom-test-id');
    expect(textElement.props.numberOfLines).toBe(2);
  });
});
