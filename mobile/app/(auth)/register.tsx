import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import CosmicBackground from '../../components/Auth/CosmicBackground';
import LoginHeader from '../../components/Auth/LoginHeader';
import { CosmicColors } from '../../constants/CosmicColors';

export default function RegisterScreen() {
  return (
    <CosmicBackground showStars={true}>
      <View style={styles.container}>
        <LoginHeader />
        
        <View style={styles.card}>
          <Text style={styles.comingSoon}>Coming Soon!</Text>
          <Text style={styles.description}>
            Cosmic registration features are being developed by our star engineers.
          </Text>
          
          <Link href="../(auth)/login" style={styles.backLink}>
            Back to Login
          </Link>
        </View>
      </View>
    </CosmicBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'rgba(26, 26, 46, 0.9)',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(108, 99, 255, 0.3)',
    width: '100%',
    maxWidth: 400,
  },
  comingSoon: {
    fontSize: 24,
    color: CosmicColors.gold,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: CosmicColors.light,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  backLink: {
    color: CosmicColors.accent,
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});