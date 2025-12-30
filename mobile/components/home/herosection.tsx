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

      <TouchableOpacity style={styles.button} onPress={onStart}>
        <Text style={styles.buttonText}>Mulai Perjalanan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 container: { padding: 20, alignItems: 'center', marginTop: 40 },
 badge: { backgroundColor: '#2D1B4E', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
 badgeText: { color: '#A855F7', fontSize: 12, fontWeight: 'bold' },   
 title: { fontSize: 32, fontWeight: 'bold', color: '#FFF', textAlign: 'center', marginTop: 20 },
 highlight: { color: '#8B5CF6' },
 timeCard: { backgroundColor: 'rgba(255,255,255,0.05)', padding: 15, borderRadius: 15, marginVertical: 20, width: '100%', alignItems: 'center' },
 timeLabel: { color: '#9CA3AF', fontSize: 12 },
});