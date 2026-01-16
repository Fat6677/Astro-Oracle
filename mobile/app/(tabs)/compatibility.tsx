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