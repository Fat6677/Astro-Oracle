import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur'; 

export default function Header() {
  const insets = useSafeAreaInsets();

  return (
    // BlurView memberikan efek backdrop-blur-md seperti di web
    <BlurView intensity={80} tint="light" style={[styles.header, { paddingTop: insets.top }]}>
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Text style={styles.icon}>🌌</Text>
          <Text style={styles.title}>AstraMind</Text>
        </View>
        
        <Text style={styles.subtitle}>Ramalan Harian Pintar</Text>
      </View>
      <View style={styles.borderBottom} />
    </BlurView>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },

  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    marginRight: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: -0.5,
    color: '#000',
  },