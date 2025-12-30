import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { features, Feature } from '../../constants/FeaturesData'

export const FeatureGrid = ({ onFeaturePress }: { onFeaturePress: (path: string) => void }) => {
  const renderItem = ({ item }: { item: Feature }) => (
    <TouchableOpacity 
      style={[styles.card, { borderLeftColor: item.color }]} 
      onPress={() => onFeaturePress(item.path)}
    >
      <Text style={styles.icon}>{item.icon}</Text>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDesc} numberOfLines={2}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Fitur Eksklusif</Text>
      <FlatList
        data={features}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        scrollEnabled={false} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
    
});