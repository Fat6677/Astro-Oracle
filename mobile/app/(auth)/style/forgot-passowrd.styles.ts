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
  
 