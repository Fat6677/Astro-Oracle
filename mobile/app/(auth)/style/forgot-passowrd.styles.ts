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
  
  
  // ===== CARD STYLES =====
  authCard: {
    width: '100%',
    padding: 25,
  },
  
  
  // ===== INPUT STYLES =====
  inputContainer: {
    marginBottom: 25,
  },
  
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: CosmicColors.light,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(108, 99, 255, 0.3)',
    paddingHorizontal: 15,
    height: 56,
  },
  
  textInput: {
    flex: 1,
    color: CosmicColors.light,
    fontSize: 16,
    paddingVertical: 15,
    marginLeft: 10,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  
  inputIcon: {
    opacity: 0.7,
  },
  
  clearButton: {
    padding: 5,
  },
  
  validationText: {
    fontSize: 12,
    color: CosmicColors.secondary,
    marginTop: 5,
    marginLeft: 5,
  },
  
  
  // ===== BUTTON STYLES =====
  submitButton: {
    marginTop: 10,
    marginBottom: 20,
  },
  
  
  // ===== INFO BOX STYLES =====
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(33, 150, 243, 0.1)',
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: CosmicColors.google,
    marginTop: 10,
  },
  
  infoText: {
    flex: 1,
    color: CosmicColors.light + 'CC',
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 10,
  },
  
  
  // ===== SUCCESS STATE STYLES =====
  successContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  
  successIconContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  
  successGlow: {
    position: 'absolute',
    top: -15,
    left: -15,
    right: -15,
    bottom: -15,
    backgroundColor: CosmicColors.facebook,
    opacity: 0.15,
    borderRadius: 50,
    zIndex: -1,
  },
  
  successTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: CosmicColors.facebook,
    marginBottom: 15,
  },
  
  successMessage: {
    fontSize: 16,
    color: CosmicColors.light + 'CC',
    textAlign: 'center',
    marginBottom: 5,
  },
  
  successEmail: {
    fontSize: 18,
    fontWeight: 'bold',
    color: CosmicColors.light,
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(108, 99, 255, 0.1)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
  },
  
  successInstruction: {
    fontSize: 14,
    color: CosmicColors.light + '99',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 10,
  },
  
  successActions: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  
  resendText: {
    fontSize: 14,
    color: CosmicColors.light + 'CC',
    textAlign: 'center',
    marginTop: 25,
  },
  
  resendLink: {
    color: CosmicColors.accent,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  
  
  // ===== DIVIDER STYLES =====
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(108, 99, 255, 0.2)',
  },
  
  dividerText: {
    color: CosmicColors.light + '80',
    fontSize: 12,
    fontWeight: '600',
    marginHorizontal: 15,
    textTransform: 'uppercase',
  },
  
  
  // ===== ALTERNATIVE ACTION STYLES =====
  alternativeContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  
  alternativeText: {
    fontSize: 15,
    color: CosmicColors.light + 'CC',
    marginBottom: 12,
  },
  
  alternativeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(108, 99, 255, 0.1)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(108, 99, 255, 0.3)',
  },
  
  alternativeButtonText: {
    color: CosmicColors.accent,
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  
  
  // ===== FOOTER STYLES =====
  footer: {
    marginTop: 40,
    alignItems: 'center',
  },
  
  footerText: {
    fontSize: 14,
    color: CosmicColors.light + '99',
  },
  
  footerLink: {
    color: CosmicColors.accent,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});


// Responsive styles untuk perangkat kecil
export const responsiveStyles = {
  small: {
    title: {
      fontSize: 28,
    },
    authCard: {
      padding: 20,
    },
    textInput: {
      fontSize: 15,
    },
    submitButton: {
      height: 50,
    },
  },
  
  tablet: {
    content: {
      maxWidth: 500,
    },
    authCard: {
      padding: 30,
    },
  },
};

// Helper untuk mendapatkan styles responsif
export const getResponsiveStyles = () => {
  if (SCREEN_WIDTH >= 768) {
    return responsiveStyles.tablet;
  } else if (SCREEN_WIDTH <= 375) {
    return responsiveStyles.small;
  }
  return {};
};