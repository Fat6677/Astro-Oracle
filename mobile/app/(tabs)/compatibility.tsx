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

          <View style={styles.heartDivider}>
            <View style={styles.line} />
            <Ionicons name="heart" size={32} color="#EC4899" />
            <View style={styles.line} />
          </View>

          <ZodiacPicker 
            label="Zodiak Kedua" 
            selected={zodiac2} 
            onSelect={setZodiac2} 
          />
        </View>

        {/* Tombol Aksi */}
        <TouchableOpacity 
          style={[styles.button, (!zodiac1 || !zodiac2) && styles.buttonDisabled]} 
          onPress={checkCompatibility}
          disabled={loading || !zodiac1 || !zodiac2}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Cek Kecocokan Bintang</Text>
          )}
        </TouchableOpacity>

        {/* Kartu Hasil */}
        {result ? (
          <View style={styles.resultCard}>
            <View style={styles.resultHeader}>
              <Ionicons name="sparkles" size={20} color="#F59E0B" />
              <Text style={styles.resultTitle}>Analisis Kosmik</Text>
            </View>
            <Text style={styles.resultText}>{result}</Text>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
}

// Komponen Reusable untuk Grid Zodiak
const ZodiacPicker = ({ label, selected, onSelect }: any) => (
  <View style={styles.pickerWrapper}>
    <Text style={styles.pickerLabel}>{label}: <Text style={styles.selectedName}>{selected || '?'}</Text></Text>
    <View style={styles.grid}>
      {zodiacs.map((z) => (
        <TouchableOpacity 
          key={z} 
          style={[styles.zodiacItem, selected === z && styles.zodiacActive]} 
          onPress={() => onSelect(z)}
        >
          <Text style={[styles.zodiacText, selected === z && styles.zodiacTextActive]}>{z}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  content: { padding: 20, alignItems: 'center' },
  label: { color: '#94A3B8', fontSize: 16, marginBottom: 30, textAlign: 'center' },
  selectionArea: { width: '100%' },
  pickerWrapper: { marginBottom: 20 },
  pickerLabel: { color: '#94A3B8', fontSize: 14, marginBottom: 12, marginLeft: 5 },
  selectedName: { color: '#8B5CF6', fontWeight: 'bold' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  zodiacItem: { 
    backgroundColor: '#1E293B', 
    paddingVertical: 8, 
    paddingHorizontal: 12, 
    margin: 4, 
    borderRadius: 12, 
    minWidth: '30%', 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)'
  },
  zodiacActive: { backgroundColor: '#8B5CF6', borderColor: '#A855F7' },
  zodiacText: { color: '#94A3B8', fontSize: 12 },
  zodiacTextActive: { color: '#FFF', fontWeight: 'bold' },
  heartDivider: { flexDirection: 'row', alignItems: 'center', marginVertical: 20, justifyContent: 'center' },
  line: { flex: 1, height: 1, backgroundColor: '#1E293B', marginHorizontal: 15 },
  button: { 
    backgroundColor: '#8B5CF6', 
    paddingVertical: 18, 
    paddingHorizontal: 40, 
    borderRadius: 35, 
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#8B5CF6',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8
  },
  buttonDisabled: { backgroundColor: '#334155', elevation: 0 },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16, letterSpacing: 1 },
  resultCard: { 
    backgroundColor: '#1E293B', 
    padding: 25, 
    borderRadius: 25, 
    marginTop: 40, 
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)'
  },
  resultHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  resultTitle: { color: '#8B5CF6', fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  resultText: { color: '#E2E8F0', lineHeight: 24, fontSize: 15, textAlign: 'left' }
});