import { StyleSheet, Dimensions, Platform } from 'react-native';
import { CosmicColors } from '../../../constants/CosmicColors';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const isSmallDevice = SCREEN_WIDTH < 375;

export const forgotPasswordStyles = StyleSheet.create({
  // ===== LAYOUT STYLES =====
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    minHeight: SCREEN_HEIGHT,
  },
  
  content: {
    alignItems: 'center',
    width: '100%',
    maxWidth: 450,
    alignSelf: 'center',
  },
  
  
  // ===== BACK BUTTON STYLES =====
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(108, 99, 255, 0.1)',
  },
  
  backButtonText: {
    color: CosmicColors.light,
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
  },
  
  backButtonSuccess: {
    marginTop: 20,
  },
  
  
  // ===== HEADER STYLES =====
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
  },
  
  iconContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  
  iconGlow: {
    position: 'absolute',
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
    backgroundColor: CosmicColors.accent,
    opacity: 0.2,
    borderRadius: 50,
    zIndex: -1,
  },
  
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: CosmicColors.light,
    marginBottom: 10,
    textAlign: 'center',
  },
  
  subtitle: {
    fontSize: 16,
    color: CosmicColors.light + 'CC',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  
  
