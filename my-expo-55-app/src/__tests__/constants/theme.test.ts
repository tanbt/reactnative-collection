import { Colors, Fonts, Spacing, BottomTabInset, MaxContentWidth } from '@/constants/theme';
import { Platform } from 'react-native';

describe('Theme Constants', () => {
  describe('Colors', () => {
    it('defines light theme colors', () => {
      expect(Colors.light).toEqual({
        text: '#000000',
        background: '#ffffff',
        backgroundElement: '#F0F0F3',
        backgroundSelected: '#E0E1E6',
        textSecondary: '#60646C',
      });
    });

    it('defines dark theme colors', () => {
      expect(Colors.dark).toEqual({
        text: '#ffffff',
        background: '#000000',
        backgroundElement: '#212225',
        backgroundSelected: '#2E3135',
        textSecondary: '#B0B4BA',
      });
    });

    it('has matching keys in light and dark themes', () => {
      const lightKeys = Object.keys(Colors.light).sort();
      const darkKeys = Object.keys(Colors.dark).sort();
      expect(lightKeys).toEqual(darkKeys);
    });

    it('all colors are valid hex codes', () => {
      const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;

      Object.values(Colors.light).forEach((color) => {
        expect(color).toMatch(hexColorRegex);
      });

      Object.values(Colors.dark).forEach((color) => {
        expect(color).toMatch(hexColorRegex);
      });
    });
  });

  describe('Fonts', () => {
    it('defines font families', () => {
      expect(Fonts).toBeDefined();
      expect(Fonts).toHaveProperty('sans');
      expect(Fonts).toHaveProperty('serif');
      expect(Fonts).toHaveProperty('rounded');
      expect(Fonts).toHaveProperty('mono');
    });

    it('returns platform-specific font definitions', () => {
      expect(typeof Fonts.sans).toBe('string');
      expect(typeof Fonts.serif).toBe('string');
      expect(typeof Fonts.rounded).toBe('string');
      expect(typeof Fonts.mono).toBe('string');
    });
  });

  describe('Spacing', () => {
    it('defines spacing scale', () => {
      expect(Spacing).toEqual({
        half: 2,
        one: 4,
        two: 8,
        three: 16,
        four: 24,
        five: 32,
        six: 64,
      });
    });

    it('spacing values follow a logical progression', () => {
      expect(Spacing.half).toBeLessThan(Spacing.one);
      expect(Spacing.one).toBeLessThan(Spacing.two);
      expect(Spacing.two).toBeLessThan(Spacing.three);
      expect(Spacing.three).toBeLessThan(Spacing.four);
      expect(Spacing.four).toBeLessThan(Spacing.five);
      expect(Spacing.five).toBeLessThan(Spacing.six);
    });

    it('all spacing values are positive numbers', () => {
      Object.values(Spacing).forEach((value) => {
        expect(typeof value).toBe('number');
        expect(value).toBeGreaterThan(0);
      });
    });
  });

  describe('Layout Constants', () => {
    it('defines BottomTabInset', () => {
      expect(typeof BottomTabInset).toBe('number');
      expect(BottomTabInset).toBeGreaterThanOrEqual(0);
    });

    it('defines MaxContentWidth', () => {
      expect(MaxContentWidth).toBe(800);
      expect(typeof MaxContentWidth).toBe('number');
      expect(MaxContentWidth).toBeGreaterThan(0);
    });
  });
});
