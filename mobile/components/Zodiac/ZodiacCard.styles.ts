import { StyleSheet, Dimensions, Platform } from 'react-native';
import { CosmicColors } from '../../constants/CosmicColors';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = (SCREEN_WIDTH - 48) / 2; // 2 columns with padding
const isSmallDevice = SCREEN_WIDTH < 375;

export const zodiacCardStyles = StyleSheet.create({
  // ===== MAIN CONTAINER =====
  container: {
    width: CARD_WIDTH,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    backgroundColor: CosmicColors.darker,
  },

  // ===== GRADIENT BACKGROUND =====
  gradient: {
    padding: 16,
    borderRadius: 20,
    height: 220,
    justifyContent: 'space-between',
  },

  // ===== HEADER SECTION =====
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  symbolContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },

  symbol: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },

  titleContainer: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 0.5,
    marginBottom: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  dates: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
    letterSpacing: 0.3,
  },

  elementIcon: {
    opacity: 0.9,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  // ===== INFO ROW SECTION =====
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },

  infoItem: {
    flex: 1,
    alignItems: 'center',
  },

  infoLabel: {
    fontSize: 9,
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },

  infoValue: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  infoDivider: {
    width: 1,
    height: '60%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginHorizontal: 4,
  },

  // ===== KEYWORDS SECTION =====
  keywordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
    gap: 6,
  },

  keywordChip: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },

  keywordText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '600',
    letterSpacing: 0.3,
  },

  // ===== PREVIEW TEXT =====
  previewText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 16,
    marginBottom: 12,
    fontStyle: 'italic',
  },

  // ===== EXPLORE BUTTON =====
  exploreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },

  exploreText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginRight: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  // ===== ANIMATION STYLES =====
  animationContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    overflow: 'hidden',
    zIndex: -1,
  },

  glowEffect: {
    position: 'absolute',
    top: -50,
    left: -50,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    opacity: 0,
  },

  // ===== LOADING STATE =====
  loadingContainer: {
    width: CARD_WIDTH,
    height: 220,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    marginTop: 10,
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
  },

  // ===== ELEMENT-SPECIFIC OVERLAYS =====
  fireOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
  },

  earthOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    backgroundColor: 'rgba(93, 156, 89, 0.1)',
  },

  airOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    backgroundColor: 'rgba(77, 150, 255, 0.1)',
  },

  waterOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    backgroundColor: 'rgba(54, 209, 220, 0.1)',
  },
});

// Responsive styles for different screen sizes
export const responsiveStyles = {
  small: StyleSheet.create({
    container: {
      width: SCREEN_WIDTH - 40,
    },
    gradient: {
      height: 200,
      padding: 14,
    },
    name: {
      fontSize: 16,
    },
    dates: {
      fontSize: 10,
    },
    symbol: {
      fontSize: 20,
    },
    previewText: {
      fontSize: 11,
      lineHeight: 14,
    },
  }),

  medium: StyleSheet.create({
    container: {
      width: (SCREEN_WIDTH - 60) / 2,
    },
    gradient: {
      height: 240,
      padding: 18,
    },
    name: {
      fontSize: 19,
    },
    dates: {
      fontSize: 12,
    },
  }),

  large: StyleSheet.create({
    container: {
      width: (SCREEN_WIDTH - 80) / 2,
    },
    gradient: {
      height: 260,
      padding: 20,
    },
    name: {
      fontSize: 20,
    },
    infoValue: {
      fontSize: 13,
    },
    previewText: {
      fontSize: 13,
      lineHeight: 18,
    },
  }),
};

// Helper function to get responsive styles based on screen width
export const getResponsiveCardStyles = () => {
  if (SCREEN_WIDTH >= 768) {
    return responsiveStyles.large;
  } else if (SCREEN_WIDTH >= 414) {
    return responsiveStyles.medium;
  } else if (SCREEN_WIDTH <= 375) {
    return responsiveStyles.small;
  }
  return {};
};

// Element-specific color mapping for dynamic styling
export const elementColorMapping = {
  Fire: {
    gradient: ['#FF6B6B', '#FF8E53', '#FF6B6B'],
    overlay: 'rgba(255, 107, 107, 0.15)',
    border: 'rgba(255, 107, 107, 0.4)',
    shadow: '#FF6B6B',
  },
  Earth: {
    gradient: ['#5D9C59', '#C7B198', '#5D9C59'],
    overlay: 'rgba(93, 156, 89, 0.15)',
    border: 'rgba(93, 156, 89, 0.4)',
    shadow: '#5D9C59',
  },
  Air: {
    gradient: ['#4D96FF', '#6BC5D2', '#4D96FF'],
    overlay: 'rgba(77, 150, 255, 0.15)',
    border: 'rgba(77, 150, 255, 0.4)',
    shadow: '#4D96FF',
  },
  Water: {
    gradient: ['#36D1DC', '#5B86E5', '#36D1DC'],
    overlay: 'rgba(54, 209, 220, 0.15)',
    border: 'rgba(54, 209, 220, 0.4)',
    shadow: '#36D1DC',
  },
};

// Helper function to get element-specific styles
export const getElementStyles = (element: string) => {
  const defaultStyles = {
    gradient: ['#667eea', '#764ba2'],
    overlay: 'rgba(102, 126, 234, 0.15)',
    border: 'rgba(102, 126, 234, 0.4)',
    shadow: '#667eea',
  };
  
  return elementColorMapping[element as keyof typeof elementColorMapping] || defaultStyles;
};

// Animation keyframes (for use with react-native-reanimated if needed)
export const animationPresets = {
  pressIn: {
    scale: 0.98,
    opacity: 0.9,
  },
  pressOut: {
    scale: 1,
    opacity: 1,
  },
  hover: {
    scale: 1.02,
    shadowRadius: 16,
  },
};