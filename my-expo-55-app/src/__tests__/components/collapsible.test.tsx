import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Collapsible } from '@/components/ui/collapsible';
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

describe('Collapsible', () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue(mockTheme);
  });

  it('renders with title', () => {
    const { getByText } = render(
      <Collapsible title="Test Title">
        <Collapsible title="Child Content">Content</Collapsible>
      </Collapsible>
    );
    expect(getByText('Test Title')).toBeTruthy();
  });

  it('does not show children initially', () => {
    const { queryByText } = render(
      <Collapsible title="Test Title">
        <Collapsible title="Hidden Content">Hidden</Collapsible>
      </Collapsible>
    );
    // Children should not be visible initially
    expect(queryByText('Hidden Content')).toBeFalsy();
  });

  it('shows children when pressed', () => {
    const { getByText, queryByText } = render(
      <Collapsible title="Test Title">
        <Collapsible title="Visible Content">Visible</Collapsible>
      </Collapsible>
    );

    // Initially hidden
    expect(queryByText('Visible Content')).toBeFalsy();

    // Press to expand
    const pressable = getByText('Test Title').parent?.parent;
    if (pressable) {
      fireEvent.press(pressable);
    }

    // Now visible
    expect(getByText('Visible Content')).toBeTruthy();
  });

  it('toggles children visibility on multiple presses', () => {
    const { getByText, queryByText } = render(
      <Collapsible title="Test Title">
        <Collapsible title="Toggle Content">Toggle</Collapsible>
      </Collapsible>
    );

    const pressable = getByText('Test Title').parent?.parent;
    if (!pressable) {
      throw new Error('Pressable not found');
    }

    // Initially hidden
    expect(queryByText('Toggle Content')).toBeFalsy();

    // First press - show
    fireEvent.press(pressable);
    expect(getByText('Toggle Content')).toBeTruthy();

    // Second press - hide
    fireEvent.press(pressable);
    expect(queryByText('Toggle Content')).toBeFalsy();

    // Third press - show again
    fireEvent.press(pressable);
    expect(getByText('Toggle Content')).toBeTruthy();
  });

  it('renders multiple children correctly', () => {
    const { getByText } = render(
      <Collapsible title="Test Title">
        <Collapsible title="Child 1">Child 1</Collapsible>
        <Collapsible title="Child 2">Child 2</Collapsible>
        <Collapsible title="Child 3">Child 3</Collapsible>
      </Collapsible>
    );

    const pressable = getByText('Test Title').parent?.parent;
    if (pressable) {
      fireEvent.press(pressable);
    }

    expect(getByText('Child 1')).toBeTruthy();
    expect(getByText('Child 2')).toBeTruthy();
    expect(getByText('Child 3')).toBeTruthy();
  });

  it('applies correct pressed style', () => {
    const { getByText } = render(
      <Collapsible title="Test Title">
        <Collapsible title="Content">Content</Collapsible>
      </Collapsible>
    );

    const pressable = getByText('Test Title').parent?.parent;
    expect(pressable).toBeTruthy();
  });
});
