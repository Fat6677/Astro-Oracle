import { StyleSheet, Dimensions } from 'react-native';
import { CosmicColors } from '../../../constants/CosmicColors';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const loginScreenStyles = StyleSheet.create({
  // Area aman untuk perangkat dengan notch
  safeArea: {
    flex: 1,
    backgroundColor: CosmicColors.darker,
  },
  
  // Konten scrollable utama
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    minHeight: SCREEN_HEIGHT,
  },
  
  // Container untuk konten utama
  content: {
    alignItems: 'center',
    width: '100%',
    maxWidth: 400, // Batas maksimum lebar untuk tablet
    alignSelf: 'center',
  },
  
  // Container untuk link sign up
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(108, 99, 255, 0.2)',
    width: '100%',
    flexWrap: 'wrap', // Untuk teks panjang di perangkat kecil
  },
  
  // Teks untuk sign up
  signupText: {
    color: CosmicColors.light,
    fontSize: 14,
    textAlign: 'center',
  },
  
  // Link untuk sign up
  signupLink: {
    color: CosmicColors.accent,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 14,
    marginLeft: 5,
  },
});

// Responsive styles untuk berbagai ukuran perangkat
export const responsiveStyles = {
  // Styles untuk tablet
  tablet: {
    scrollContent: {
      paddingHorizontal: 40,
    },
    content: {
      maxWidth: 500,
    },
  },
  
  // Styles untuk perangkat kecil
  small: {
    signupContainer: {
      flexDirection: 'column',
    },
    signupText: {
      marginBottom: 5,
    },
    signupLink: {
      marginLeft: 0,
    },
  },
};

// Helper untuk mendapatkan styles responsif berdasarkan ukuran layar
export const getResponsiveStyles = () => {
  if (SCREEN_WIDTH >= 768) {
    return responsiveStyles.tablet;
  } else if (SCREEN_WIDTH <= 320) {
    return responsiveStyles.small;
  }
  return {};
};