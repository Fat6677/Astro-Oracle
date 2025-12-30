import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const HeroSection = ({ currentTime, onStart }: { currentTime: string, onStart: () => void }) => {
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}> Portal Kosmik Terbuka</Text>
      </View>

      <Text style={styles.title}>
        Temukan Takdir Anda di <Text style={styles.highlight}>Dunia Astrologi</Text>
      </Text>

      <View style={styles.timeCard}>
        <Text style={styles.timeLabel}>Waktu Kosmik</Text>
        <Text style={styles.timeValue}>{currentTime}</Text>
      </View>