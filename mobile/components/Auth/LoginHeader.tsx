import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CosmicColors } from '../../theme/CosmicColors';

const LoginHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ASTRO ORACLES</Text>
      <Text style={styles.subtitle}>Unlock Your Cosmic Destiny</Text>
      <View style={styles.underline} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: CosmicColors.gold,
    letterSpacing: 4,
    textShadowColor: 'rgba(108, 99, 255, 0.7)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 14,
    color: CosmicColors.light,
    marginTop: 8,
    letterSpacing: 2,
  },
  underline: {
    width: 120,
    height: 2,
    backgroundColor: CosmicColors.accent,
    marginTop: 12,
    borderRadius: 1,
  },
});

export default LoginHeader;