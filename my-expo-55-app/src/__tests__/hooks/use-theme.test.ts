import { renderHook } from '@testing-library/react-native';
import { useTheme } from '@/hooks/use-theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';

// Mock the useColorScheme hook
jest.mock('@/hooks/use-color-scheme');

describe('useTheme', () => {
  it('returns light theme when color scheme is light', () => {
    (useColorScheme as jest.Mock).mockReturnValue('light');

    const { result } = renderHook(() => useTheme());

    expect(result.current).toEqual(Colors.light);
  });

  it('returns dark theme when color scheme is dark', () => {
    (useColorScheme as jest.Mock).mockReturnValue('dark');

    const { result } = renderHook(() => useTheme());

    expect(result.current).toEqual(Colors.dark);
  });

  it('returns light theme when color scheme is unspecified', () => {
    (useColorScheme as jest.Mock).mockReturnValue('unspecified');

    const { result } = renderHook(() => useTheme());

    expect(result.current).toEqual(Colors.light);
  });

  it('returns theme object with correct properties', () => {
    (useColorScheme as jest.Mock).mockReturnValue('light');

    const { result } = renderHook(() => useTheme());

    expect(result.current).toHaveProperty('text');
    expect(result.current).toHaveProperty('background');
    expect(result.current).toHaveProperty('backgroundElement');
    expect(result.current).toHaveProperty('backgroundSelected');
    expect(result.current).toHaveProperty('textSecondary');
  });

  it('updates theme when color scheme changes', () => {
    (useColorScheme as jest.Mock).mockReturnValue('light');

    const { result, rerender } = renderHook(() => useTheme());

    expect(result.current).toEqual(Colors.light);

    // Change to dark mode
    (useColorScheme as jest.Mock).mockReturnValue('dark');
    rerender();

    expect(result.current).toEqual(Colors.dark);
  });
});
