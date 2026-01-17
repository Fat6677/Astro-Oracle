import { StyleSheet, Dimensions, Platform } from 'react-native';
import { CosmicColors } from '../../../constants/CosmicColors';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const isSmallDevice = SCREEN_WIDTH < 375;
const isTablet = SCREEN_WIDTH >= 768;

export const zodiacInsightsStyles = StyleSheet.create({
  // ===== SAFE AREA & BACKGROUND =====
  safeArea: {
    flex: 1,
    backgroundColor: CosmicColors.darker,
  },

  gradientBackground: {
    flex: 1,
  },

  // ===== HEADER SECTION =====
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 20,
    backgroundColor: 'transparent',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: CosmicColors.light,
    letterSpacing: 0.5,
    textShadowColor: 'rgba(108, 99, 255, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },

  subtitle: {
    fontSize: 14,
    color: CosmicColors.light + 'CC',
    marginTop: 4,
    letterSpacing: 0.3,
  },

  infoButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(108, 99, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(108, 99, 255, 0.3)',
  },

  // ===== SEARCH SECTION =====
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(108, 99, 255, 0.2)',
    paddingHorizontal: 15,
    height: 52,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },

  searchIcon: {
    marginRight: 10,
    opacity: 0.7,
  },

  searchInput: {
    flex: 1,
    color: CosmicColors.light,
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    paddingVertical: 5,
  },

  clearButton: {
    padding: 5,
    marginLeft: 10,
  },

  // ===== ELEMENT FILTER SECTION =====
  elementFilter: {
    maxHeight: 60,
    marginBottom: 20,
  },

  elementFilterContent: {
    paddingHorizontal: 20,
    gap: 10,
  },

  elementButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(108, 99, 255, 0.1)',
    gap: 8,
    minWidth: 100,
  },

  elementButtonActive: {
    backgroundColor: 'rgba(108, 99, 255, 0.2)',
    borderColor: CosmicColors.accent,
  },

  elementButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: CosmicColors.light + 'CC',
  },

  elementButtonTextActive: {
    color: CosmicColors.light,
    fontWeight: '700',
  },

  // ===== COUNT SECTION =====
  countContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  countText: {
    fontSize: 13,
    color: CosmicColors.light + '99',
    fontStyle: 'italic',
  },

  // ===== GRID SECTION =====
  gridContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  gridRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  cardWrapper: {
    // Container untuk kartu dengan efek tambahan
  },

  // ===== EMPTY STATE =====
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100,
    paddingHorizontal: 40,
  },

  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: CosmicColors.light + '80',
    marginTop: 20,
    marginBottom: 8,
  },

  emptySubtext: {
    fontSize: 14,
    color: CosmicColors.light + '60',
    textAlign: 'center',
  },

  // ===== QUICK NAVIGATION =====
  quickNav: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(108, 99, 255, 0.1)',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 'auto',
  },

  quickNavTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: CosmicColors.light + '99',
    marginBottom: 15,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  quickNavContent: {
    gap: 12,
    paddingRight: 20,
  },

  quickNavItem: {
    alignItems: 'center',
    backgroundColor: 'rgba(108, 99, 255, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(108, 99, 255, 0.2)',
    minWidth: 80,
  },

  quickNavSymbol: {
    fontSize: 24,
    color: CosmicColors.light,
    marginBottom: 4,
  },

  quickNavName: {
    fontSize: 12,
    color: CosmicColors.light,
    fontWeight: '500',
  },

  // ===== LOADING STATE =====
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CosmicColors.darker,
  },

  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: CosmicColors.light + '80',
  },

  // ===== SCROLLVIEW STYLES =====
  scrollView: {
    flex: 1,
  },

  contentContainer: {
    flexGrow: 1,
  },

  // ===== ELEMENT COLOR BADGES =====
  elementBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginHorizontal: 4,
  },

  fireBadge: {
    backgroundColor: 'rgba(255, 107, 107, 0.2)',
    borderColor: 'rgba(255, 107, 107, 0.4)',
  },

  earthBadge: {
    backgroundColor: 'rgba(93, 156, 89, 0.2)',
    borderColor: 'rgba(93, 156, 89, 0.4)',
  },

  airBadge: {
    backgroundColor: 'rgba(77, 150, 255, 0.2)',
    borderColor: 'rgba(77, 150, 255, 0.4)',
  },

  waterBadge: {
    backgroundColor: 'rgba(54, 209, 220, 0.2)',
    borderColor: 'rgba(54, 209, 220, 0.4)',
  },

  elementBadgeText: {
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});

// Responsive styles for different screen sizes
export const responsiveStyles = {
  small: StyleSheet.create({
    header: {
      paddingTop: Platform.OS === 'ios' ? 40 : 15,
      paddingHorizontal: 15,
    },
    title: {
      fontSize: 26,
    },
    subtitle: {
      fontSize: 12,
    },
    searchContainer: {
      marginHorizontal: 15,
      height: 48,
    },
    searchInput: {
      fontSize: 14,
    },
    gridContainer: {
      paddingHorizontal: 12,
    },
    elementButton: {
      paddingHorizontal: 14,
      paddingVertical: 8,
      minWidth: 90,
    },
    elementButtonText: {
      fontSize: 12,
    },
    quickNavItem: {
      paddingHorizontal: 12,
      paddingVertical: 10,
      minWidth: 70,
    },
    quickNavSymbol: {
      fontSize: 20,
    },
    quickNavName: {
      fontSize: 10,
    },
  }),

  tablet: StyleSheet.create({
    header: {
      paddingTop: Platform.OS === 'ios' ? 60 : 30,
      paddingHorizontal: 30,
    },
    title: {
      fontSize: 38,
    },
    subtitle: {
      fontSize: 16,
    },
    searchContainer: {
      marginHorizontal: 30,
      height: 56,
    },
    gridContainer: {
      paddingHorizontal: 24,
    },
    elementButton: {
      paddingHorizontal: 22,
      paddingVertical: 12,
      minWidth: 120,
    },
    elementButtonText: {
      fontSize: 15,
    },
    quickNav: {
      paddingHorizontal: 30,
    },
    quickNavItem: {
      paddingHorizontal: 20,
      paddingVertical: 14,
      minWidth: 100,
    },
    quickNavSymbol: {
      fontSize: 28,
    },
    quickNavName: {
      fontSize: 14,
    },
  }),

  large: StyleSheet.create({
    header: {
      paddingTop: Platform.OS === 'ios' ? 70 : 40,
      paddingHorizontal: 40,
    },
    title: {
      fontSize: 42,
    },
    subtitle: {
      fontSize: 18,
    },
    searchContainer: {
      marginHorizontal: 40,
      marginBottom: 25,
      height: 60,
      borderRadius: 20,
    },
    gridContainer: {
      paddingHorizontal: 32,
    },
    elementFilterContent: {
      paddingHorizontal: 40,
      gap: 15,
    },
    quickNav: {
      paddingHorizontal: 40,
    },
  }),
};

// Helper function to get responsive styles
export const getResponsiveStyles = () => {
  if (SCREEN_WIDTH >= 1024) {
    return responsiveStyles.large;
  } else if (SCREEN_WIDTH >= 768) {
    return responsiveStyles.tablet;
  } else if (SCREEN_WIDTH <= 375) {
    return responsiveStyles.small;
  }
  return {};
};

// Element color mapping for dynamic styling
export const elementColorMapping = {
  Fire: {
    primary: '#FF6B6B',
    secondary: 'rgba(255, 107, 107, 0.2)',
    gradient: ['#FF6B6B', '#FF8E53'],
  },
  Earth: {
    primary: '#5D9C59',
    secondary: 'rgba(93, 156, 89, 0.2)',
    gradient: ['#5D9C59', '#C7B198'],
  },
  Air: {
    primary: '#4D96FF',
    secondary: 'rgba(77, 150, 255, 0.2)',
    gradient: ['#4D96FF', '#6BC5D2'],
  },
  Water: {
    primary: '#36D1DC',
    secondary: 'rgba(54, 209, 220, 0.2)',
    gradient: ['#36D1DC', '#5B86E5'],
  },
};

// Animation presets
export const animationPresets = {
  fadeIn: {
    opacity: 1,
    transition: { duration: 300 },
  },
  fadeOut: {
    opacity: 0,
    transition: { duration: 300 },
  },
  slideIn: {
    translateY: 0,
    transition: { duration: 400, type: 'spring' },
  },
  slideOut: {
    translateY: 20,
    transition: { duration: 300 },
  },
};

// Helper function to get element color
export const getElementColor = (element: string) => {
  return elementColorMapping[element as keyof typeof elementColorMapping] || {
    primary: CosmicColors.accent,
    secondary: 'rgba(108, 99, 255, 0.2)',
    gradient: ['#667eea', '#764ba2'],
  };
};

// Additional utility styles
export const utilityStyles = StyleSheet.create({
  // Shadows
  shadowLight: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  shadowMedium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },

  shadowHeavy: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },

  // Borders
  borderLight: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },

  borderMedium: {
    borderWidth: 1,
    borderColor: 'rgba(108, 99, 255, 0.3)',
  },

  // Spacing
  spacingXS: { margin: 4 },
  spacingS: { margin: 8 },
  spacingM: { margin: 16 },
  spacingL: { margin: 24 },
  spacingXL: { margin: 32 },

  // Flex utilities
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  flexRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Text utilities
  textCenter: {
    textAlign: 'center',
  },

  textUppercase: {
    textTransform: 'uppercase',
  },

  textCapitalize: {
    textTransform: 'capitalize',
  },
});