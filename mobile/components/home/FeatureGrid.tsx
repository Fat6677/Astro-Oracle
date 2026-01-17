import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { features, Feature } from '../../constants/FeaturesData';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export const FeatureGrid = ({ onFeaturePress }: { onFeaturePress: (path: string) => void }) => {
  // Tambahkan fitur Zodiac Insights ke dalam data features
  const allFeatures = [
    ...features,
    {
      id: 6, // ID baru
      title: 'Zodiac Insights',
      description: 'Eksplorasi mendalam 12 zodiak dengan analisis lengkap',
      icon: '♋', // Atau gunakan icon dari Ionicons
      color: '#36D1DC', // Warna untuk Water element
      path: '/(tabs)/zodiac-insights'
    }
  ];

  // Fungsi untuk mendapatkan icon berdasarkan path
  const getFeatureIcon = (item: Feature & { path?: string }) => {
    if (item.path === '/(tabs)/zodiac-insights') {
      return <Ionicons name="planet" size={24} color="#36D1DC" />;
    }
    return <Text style={[styles.icon, { color: item.color }]}>{item.icon}</Text>;
  };

  // Fungsi untuk handle navigation
  const handleNavigation = (item: Feature & { path?: string }) => {
    if (item.path) {
      router.push(item.path as any);
    } else {
      onFeaturePress(item.title);
    }
  };

  const renderItem = ({ item }: { item: Feature & { path?: string } }) => (
    <TouchableOpacity 
      style={[styles.card, { borderLeftColor: item.color }]} 
      onPress={() => handleNavigation(item)}
      activeOpacity={0.7}
    >
      {getFeatureIcon(item)}
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDesc} numberOfLines={2}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Fitur Eksklusif</Text>
      <FlatList
        data={allFeatures}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        scrollEnabled={false}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    padding: 20,
    backgroundColor: 'transparent',
  },
  sectionTitle: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#FFF', 
    marginBottom: 20,
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  listContent: {
    paddingBottom: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: { 
    flex: 1, 
    backgroundColor: 'rgba(31, 41, 55, 0.8)', 
    marginHorizontal: 5,
    padding: 18, 
    borderRadius: 16,
    borderLeftWidth: 4,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    minHeight: 140,
    maxWidth: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },  
  icon: { 
    fontSize: 28, 
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  cardTitle: { 
    color: '#FFF', 
    fontWeight: 'bold', 
    fontSize: 16, 
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  cardDesc: { 
    color: '#9CA3AF', 
    fontSize: 12, 
    lineHeight: 16,
    opacity: 0.9,
  }
});