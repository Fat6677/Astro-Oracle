// Warna tema cosmic/astro
export const CosmicColors = {
  primary: '#6C63FF',       // Purple cosmic
  secondary: '#FF6B8B',     // Pink nebula
  dark: '#1A1A2E',         // Deep space
  darker: '#0F0F1B',       // Space void
  light: '#E6E6FA',        // Starlight
  accent: '#36D1DC',       // Cosmic teal
  gold: '#FFD700',         // Stellar gold
  google: '#DB4437',
  facebook: '#4267B2',
  twitter: '#1DA1F2',
} as const;

export type CosmicColorType = keyof typeof CosmicColors;