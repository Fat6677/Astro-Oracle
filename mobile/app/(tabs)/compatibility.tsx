import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const zodiacs = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export default function Compatibility() {
  const [zodiac1, setZodiac1] = useState('');
  const [zodiac2, setZodiac2] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

const checkCompatibility = () => {
    if (!zodiac1 || !zodiac2) return;
    
    setLoading(true);
    setResult('');

setTimeout(() => {
      const dummyResults = [
        ` Skor Kecocokan: 95%. ${zodiac1} dan ${zodiac2} adalah pasangan spiritual yang sempurna. Semesta mendukung setiap langkah kalian.`,
        ` Skor Kecocokan: 75%. Hubungan yang penuh petualangan! ${zodiac1} memberikan energi, sementara ${zodiac2} memberikan kedalaman emosi.`,
        ` Skor Kecocokan: 50%. Ada tantangan di depan, namun dengan komunikasi yang baik, rasi bintang kalian bisa berpadu dengan harmonis.`,
        ` Skor Kecocokan: 88%. Getaran antara ${zodiac1} dan ${zodiac2} sangat kuat. Chemistry kalian tidak bisa dibantah oleh logika apapun.`,
        ` Skor Kecocokan: 62%. Hubungan ini memerlukan kesabaran ekstra, namun hasil akhirnya akan seindah berlian yang diasah.`
      ];

      const randomIndex = Math.floor(Math.random() * dummyResults.length);
      setResult(dummyResults[randomIndex]);
      setLoading(false);
    }, 1500);
  };

return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header Navigasi */}
      <Stack.Screen 
        options={{ 
          title: 'Compatibility Checker', 
          headerShown: true,
          headerStyle: { backgroundColor: '#0F172A' },
          headerTintColor: '#FFF',
          headerTitleStyle: { fontWeight: 'bold' },
        }} 
      />

<View style={styles.content}>
        <Text style={styles.label}>Pilih Dua Zodiak untuk Dicek</Text>
        
        {/* Area Pemilihan */}
        <View style={styles.selectionArea}>
          <ZodiacPicker 
            label="Zodiak Pertama" 
            selected={zodiac1} 
            onSelect={setZodiac1} 
          />