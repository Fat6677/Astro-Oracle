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