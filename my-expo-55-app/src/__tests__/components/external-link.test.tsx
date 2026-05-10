import React from 'react';
import { render } from '@testing-library/react-native';
import { ExternalLink } from '@/components/external-link';
import { openBrowserAsync, WebBrowserPresentationStyle } from 'expo-web-browser';
import { Link } from 'expo-router';

// Mock expo-web-browser with proper types
jest.mock('expo-web-browser', () => ({
  openBrowserAsync: jest.fn(),
  WebBrowserPresentationStyle: {
    AUTOMATIC: 0,
    FORM_SHEET: 1,
    FULL_SCREEN: 2,
    OVER_FULL_SCREEN: 3,
    PAGE_SHEET: 4,
    POPOVER: 5,
  },
}));

// Mock expo-router with a functional component
jest.mock('expo-router', () => ({
  Link: jest.fn(({ children, ...props }) => {
    const React = require('react');
    const { Text } = require('react-native');
    return React.createElement(Text, props, children);
  }),
}));

describe('ExternalLink', () => {
  const mockHref = 'https://example.com';

  beforeEach(() => {
    jest.clearAllMocks();
    (Link as jest.Mock).mockClear();
  });

  it('renders with the provided href', () => {
    render(<ExternalLink href={mockHref}>Visit Example</ExternalLink>);

    const callArgs = (Link as jest.Mock).mock.calls[0][0];
    expect(callArgs.href).toBe(mockHref);
    expect(callArgs.target).toBe('_blank');
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <ExternalLink href={mockHref}>Click Here</ExternalLink>
    );
    expect(getByText('Click Here')).toBeTruthy();
  });

  it('passes target="_blank" to Link component', () => {
    render(<ExternalLink href={mockHref}>Link</ExternalLink>);

    const callArgs = (Link as jest.Mock).mock.calls[0][0];
    expect(callArgs.target).toBe('_blank');
  });

  it('has an onPress handler', () => {
    render(<ExternalLink href={mockHref}>Link</ExternalLink>);

    const callArgs = (Link as jest.Mock).mock.calls[0][0];
    expect(callArgs.onPress).toBeDefined();
    expect(typeof callArgs.onPress).toBe('function');
  });

  it('passes through additional props to Link', () => {
    render(
      <ExternalLink href={mockHref} testID="custom-link">
        Link with Props
      </ExternalLink>
    );

    const callArgs = (Link as jest.Mock).mock.calls[0][0];
    expect(callArgs.testID).toBe('custom-link');
    expect(callArgs.href).toBe(mockHref);
  });

  it('onPress handler calls openBrowserAsync with correct arguments', async () => {
    const mockOpenBrowserAsync = openBrowserAsync as jest.Mock;

    render(<ExternalLink href={mockHref}>Native Link</ExternalLink>);

    // Get the onPress handler passed to Link
    const linkCall = (Link as jest.Mock).mock.calls[0][0];
    const onPress = linkCall.onPress;

    // Simulate press event
    const mockEvent = { preventDefault: jest.fn() };
    await onPress(mockEvent);

    // Verify openBrowserAsync was called with correct parameters
    expect(mockOpenBrowserAsync).toHaveBeenCalledWith(mockHref, {
      presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
    });
  });

  it('onPress handler prevents default behavior', async () => {
    render(<ExternalLink href={mockHref}>Link</ExternalLink>);

    // Get the onPress handler passed to Link
    const linkCall = (Link as jest.Mock).mock.calls[0][0];
    const onPress = linkCall.onPress;

    // Simulate press event
    const mockEvent = { preventDefault: jest.fn() };
    await onPress(mockEvent);

    // Verify preventDefault was called
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});
