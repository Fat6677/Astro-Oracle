import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ZodiacCardProps } from '../../app/types/zodiac';
import { zodiacCardStyles as styles } from './ZodiacCard.styles';

const ZodiacCard: React.FC<ZodiacCardProps> = ({ zodiac, onPress }) => {
  // Warna gradient untuk setiap elemen
  const getBackgroundColor = (element: string) => {
    switch (element) {
      case 'Fire':
        return '#FF6B6B';
      case 'Earth':
        return '#5D9C59';
      case 'Air':
        return '#4D96FF';
      case 'Water':
        return '#36D1DC';
      default:
        return '#667eea';
    }
  };

  const backgroundColor = getBackgroundColor(zodiac.element);
  
  const elementIconMap: Record<string, string> = {
    Fire: 'flame',
    Earth: 'leaf',
    Air: 'cloud',
    Water: 'water',
  };

  const elementIcon = elementIconMap[zodiac.element] || 'star';

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.symbolContainer}>
            <Text style={styles.symbol}>{zodiac.symbol}</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.name}>{zodiac.name}</Text>
            <Text style={styles.dates}>{zodiac.dates}</Text>
          </View>
          <Ionicons 
            name={elementIcon as any} 
            size={24} 
            color="white" 
            style={styles.elementIcon} 
          />
        </View>

        {/* Element & Planet Info */}
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Element</Text>
            <Text style={styles.infoValue}>{zodiac.element}</Text>
          </View>
          <View style={styles.infoDivider} />
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Planet</Text>
            <Text style={styles.infoValue}>{zodiac.rulingPlanet}</Text>
          </View>
          <View style={styles.infoDivider} />
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Quality</Text>
            <Text style={styles.infoValue}>{zodiac.quality}</Text>
          </View>
        </View>

        {/* Keywords */}
        <View style={styles.keywordsContainer}>
          {zodiac.personality.keywords.slice(0, 3).map((keyword, index) => (
            <View key={index} style={styles.keywordChip}>
              <Text style={styles.keywordText}>{keyword}</Text>
            </View>
          ))}
        </View>

        {/* Preview Description */}
        <Text style={styles.previewText} numberOfLines={2}>
          {zodiac.insights.overview.substring(0, 80)}...
        </Text>

        {/* Explore Button */}
        <View style={styles.exploreButton}>
          <Text style={styles.exploreText}>Explore Insights</Text>
          <Ionicons name="arrow-forward" size={16} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ZodiacCard;