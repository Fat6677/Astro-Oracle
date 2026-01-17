import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Data & Components
import { zodiacData } from '../../(tabs)/zodiac-insights/zodiacData';
import ZodiacCard from '../../../components/Zodiac/ZodiacCard';
import { ZodiacSign } from '../../types/zodiac';

// Styles
import { zodiacInsightsStyles as styles } from '../zodiac-insights/zodiac-insight.styles';
import { CosmicColors } from '../../../constants/CosmicColors';

export default function ZodiacInsightsScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'fire' | 'earth' | 'air' | 'water'>('all');

  /**
   * Filter zodiak berdasarkan pencarian dan elemen
   */
  const filteredZodiacs = zodiacData.filter((zodiac) => {
    const matchesSearch = zodiac.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         zodiac.dates.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesElement = !selectedElement || zodiac.element.toLowerCase() === selectedElement.toLowerCase();
    
    return matchesSearch && matchesElement;
  });

  /**
   * Navigasi ke detail zodiak
   */
  const handleZodiacPress = (zodiacId: string) => {
    router.push (`/(tabs)/zodiac-insights/${zodiacId}` as any);
  };

  /**
   * Render item untuk FlatList
   */
  const renderZodiacItem = ({ item }: { item: ZodiacSign }) => (
    <View style={styles.cardWrapper}>
      <ZodiacCard
        zodiac={item}
        onPress={() => handleZodiacPress(item.id)}
      />
    </View>
  );

  /**
   * Element filter buttons
   */
  const ElementFilter = () => (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.elementFilter}
      contentContainerStyle={styles.elementFilterContent}
    >
      <TouchableOpacity
        style={[
          styles.elementButton,
          activeTab === 'all' && styles.elementButtonActive
        ]}
        onPress={() => {
          setSelectedElement(null);
          setActiveTab('all');
        }}
      >
        <Ionicons name="star" size={20} color={activeTab === 'all' ? 'white' : CosmicColors.light} />
        <Text style={[
          styles.elementButtonText,
          activeTab === 'all' && styles.elementButtonTextActive
        ]}>
          All Signs
        </Text>
      </TouchableOpacity>

      {['Fire', 'Earth', 'Air', 'Water'].map((element) => {
        const iconMap = {
          Fire: 'flame',
          Earth: 'leaf',
          Air: 'cloud',
          Water: 'water'
        };

        // Warna untuk setiap elemen
        const elementColors = {
          Fire: '#FF6B6B',
          Earth: '#5D9C59',
          Air: '#4D96FF',
          Water: '#36D1DC'
        };

        return (
          <TouchableOpacity
            key={element}
            style={[
              styles.elementButton,
              activeTab === element.toLowerCase() && styles.elementButtonActive,
              { backgroundColor: elementColors[element as keyof typeof elementColors] + '20' }
            ]}
            onPress={() => {
              setSelectedElement(element);
              setActiveTab(element.toLowerCase() as any);
            }}
          >
            <Ionicons 
              name={iconMap[element as keyof typeof iconMap] as any} 
              size={20} 
              color={activeTab === element.toLowerCase() ? 'white' : elementColors[element as keyof typeof elementColors]} 
            />
            <Text style={[
              styles.elementButtonText,
              activeTab === element.toLowerCase() && styles.elementButtonTextActive
            ]}>
              {element}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={CosmicColors.darker} />
      
      {/* Background dengan View biasa (temporary) */}
      <View style={{ 
        flex: 1, 
        backgroundColor: CosmicColors.darker 
      }}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Zodiac Insights</Text>
            <Text style={styles.subtitle}>Deep exploration of 12 zodiac signs</Text>
          </View>
          <TouchableOpacity style={styles.infoButton}>
            <Ionicons name="information-circle-outline" size={24} color={CosmicColors.light} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={CosmicColors.light + '80'} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search zodiac signs..."
            placeholderTextColor={CosmicColors.light + '80'}
            value={searchQuery}
            onChangeText={setSearchQuery}
            clearButtonMode="while-editing"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')} style={styles.clearButton}>
              <Ionicons name="close-circle" size={20} color={CosmicColors.light} />
            </TouchableOpacity>
          )}
        </View>

        {/* Element Filter */}
        <ElementFilter />

        {/* Zodiac Count */}
        <View style={styles.countContainer}>
          <Text style={styles.countText}>
            Showing {filteredZodiacs.length} of {zodiacData.length} zodiac signs
          </Text>
        </View>

        {/* Zodiac Grid */}
        <FlatList
          data={filteredZodiacs}
          renderItem={renderZodiacItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.gridRow}
          contentContainerStyle={styles.gridContainer}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons name="search-outline" size={64} color={CosmicColors.light + '40'} />
              <Text style={styles.emptyText}>No zodiac signs found</Text>
              <Text style={styles.emptySubtext}>Try a different search term</Text>
            </View>
          }
        />

        {/* Quick Navigation */}
        <View style={styles.quickNav}>
          <Text style={styles.quickNavTitle}>Quick Navigation</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.quickNavContent}
          >
            {zodiacData.slice(0, 6).map((zodiac) => (
              <TouchableOpacity
                key={zodiac.id}
                style={styles.quickNavItem}
                onPress={() => handleZodiacPress(zodiac.id)}
              >
                <Text style={styles.quickNavSymbol}>{zodiac.symbol}</Text>
                <Text style={styles.quickNavName}>{zodiac.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}