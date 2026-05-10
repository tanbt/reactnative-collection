import React from 'react';
import { render } from '@testing-library/react-native';
import { HintRow } from '@/components/hint-row';
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

describe('HintRow', () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue(mockTheme);
  });

  it('renders with default props', () => {
    const { getByText } = render(<HintRow />);
    expect(getByText('Try editing')).toBeTruthy();
    expect(getByText('app/index.tsx')).toBeTruthy();
  });

  it('renders with custom title', () => {
    const { getByText } = render(<HintRow title="Custom Title" />);
    expect(getByText('Custom Title')).toBeTruthy();
    expect(getByText('app/index.tsx')).toBeTruthy();
  });

  it('renders with custom hint', () => {
    const { getByText } = render(<HintRow hint="src/components/Button.tsx" />);
    expect(getByText('Try editing')).toBeTruthy();
    expect(getByText('src/components/Button.tsx')).toBeTruthy();
  });

  it('renders with both custom title and hint', () => {
    const { getByText } = render(
      <HintRow title="Modify this file" hint="app/settings.tsx" />
    );
    expect(getByText('Modify this file')).toBeTruthy();
    expect(getByText('app/settings.tsx')).toBeTruthy();
  });

  it('renders with ReactNode hint', () => {
    const { getAllByText, getByText } = render(
      <HintRow hint={<HintRow title="Nested" hint="content.tsx" />} />
    );
    expect(getAllByText('Try editing').length).toBeGreaterThan(0);
    expect(getByText('Nested')).toBeTruthy();
    expect(getByText('content.tsx')).toBeTruthy();
  });

  it('has correct layout structure', () => {
    const { getByText } = render(<HintRow />);
    const title = getByText('Try editing');
    const hint = getByText('app/index.tsx');

    // Both should be rendered
    expect(title).toBeTruthy();
    expect(hint).toBeTruthy();
  });
});
