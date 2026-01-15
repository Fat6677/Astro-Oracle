import { DefaultTheme } from 'react-native-paper';
import { CosmicColors } from './CosmicColors';

export const CosmicTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: CosmicColors.primary,
    accent: CosmicColors.accent,
    background: CosmicColors.darker,
    surface: CosmicColors.dark,
    text: CosmicColors.light,
    placeholder: CosmicColors.light + '80',
    backdrop: 'rgba(15, 15, 27, 0.9)',
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: 'System',
      fontWeight: '400' as const,
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '600' as const,
    },
    light: {
      fontFamily: 'System',
      fontWeight: '300' as const,
    },
    thin: {
      fontFamily: 'System',
      fontWeight: '100' as const,
    },
  },
  roundness: 12,
} as const;

export type CosmicThemeType = typeof CosmicTheme;