import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { HeroSection } from '../../components/home/herosection';
import { FeatureGrid } from '../../components/home/FeatureGrid';

export default function HomeScreen() {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('id-ID', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.background} />
        
        <HeroSection 
          currentTime={currentTime} 
          onStart={() => router.push('/signup' as any)} 
        />

        <FeatureGrid 
          onFeaturePress={(path) => router.push(path as any)} 
        />
        
        <View style={{ height: 100 }} /> 
      </ScrollView>
    </SafeAreaView>
  );
}