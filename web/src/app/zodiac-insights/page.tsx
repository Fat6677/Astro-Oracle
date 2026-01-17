// src/app/zodiac/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Zodiac.module.css';

type ZodiacSign = {
  id: number;
  name: string;
  symbol: string;
  element: string;
  modality: string;
  rulingPlanet: string;
  dates: string;
  color: string;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  compatibility: string[];
  famousPeople: string[];
  description: string;
  house: number;
};

const zodiacSigns: ZodiacSign[] = [
  {
    id: 1,
    name: 'Aries',
    symbol: '♈',
    element: 'Fire',
    modality: 'Cardinal',
    rulingPlanet: 'Mars',
    dates: 'March 21 - April 19',
    color: '#FF6B6B',
    traits: ['Courageous', 'Determined', 'Confident', 'Enthusiastic', 'Optimistic'],
    strengths: ['Leadership', 'Bravery', 'Honesty', 'Passion', 'Adventurous'],
    weaknesses: ['Impatience', 'Moodiness', 'Short-tempered', 'Impulsiveness', 'Aggression'],
    compatibility: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
    famousPeople: ['Lady Gaga', 'Robert Downey Jr.', 'Elton John', 'Keira Knightley'],
    description: 'Aries is the first sign of the zodiac, and Arians are the pioneers and trailblazers of the horoscope wheel. As a fire sign ruled by Mars, they are passionate, motivated, and confident leaders who are always ready for action.',
    house: 1
  },
  {
    id: 2,
    name: 'Taurus',
    symbol: '♉',
    element: 'Earth',
    modality: 'Fixed',
    rulingPlanet: 'Venus',
    dates: 'April 20 - May 20',
    color: '#4ECDC4',
    traits: ['Reliable', 'Patient', 'Practical', 'Devoted', 'Responsible'],
    strengths: ['Dependable', 'Persistent', 'Loyal', 'Sensual', 'Generous'],
    weaknesses: ['Stubborn', 'Possessive', 'Uncompromising', 'Materialistic', 'Resistant to change'],
    compatibility: ['Virgo', 'Capricorn', 'Cancer', 'Pisces'],
    famousPeople: ['Adele', 'David Beckham', 'Gal Gadot', 'George Clooney'],
    description: 'Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.',
    house: 2
  },
  {
    id: 3,
    name: 'Gemini',
    symbol: '♊',
    element: 'Air',
    modality: 'Mutable',
    rulingPlanet: 'Mercury',
    dates: 'May 21 - June 20',
    color: '#45B7D1',
    traits: ['Gentle', 'Affectionate', 'Curious', 'Adaptable', 'Quick-witted'],
    strengths: ['Communication', 'Intelligence', 'Versatility', 'Youthful energy', 'Social skills'],
    weaknesses: ['Nervousness', 'Inconsistency', 'Indecisiveness', 'Superficiality', 'Gossipy'],
    compatibility: ['Libra', 'Aquarius', 'Aries', 'Leo'],
    famousPeople: ['Angelina Jolie', 'Kanye West', 'Johnny Depp', 'Naomi Campbell'],
    description: 'Gemini is an air sign represented by the celestial twins. Geminis are intellectual and cerebral, constantly juggling multiple ideas and projects at once. They are curious about everything and everyone.',
    house: 3
  },
  {
    id: 4,
    name: 'Cancer',
    symbol: '♋',
    element: 'Water',
    modality: 'Cardinal',
    rulingPlanet: 'Moon',
    dates: 'June 21 - July 22',
    color: '#96CEB4',
    traits: ['Tenacious', 'Highly imaginative', 'Loyal', 'Emotional', 'Sympathetic'],
    strengths: ['Empathy', 'Nurturing', 'Intuition', 'Protective', 'Caring'],
    weaknesses: ['Pessimistic', 'Suspicious', 'Manipulative', 'Insecure', 'Clingy'],
    compatibility: ['Scorpio', 'Pisces', 'Taurus', 'Virgo'],
    famousPeople: ['Tom Cruise', 'Meryl Streep', 'Post Malone', 'Princess Diana'],
    description: 'Cancer is a water sign represented by the crab. Like their celestial spirit animal, Cancers are shielded by hard, external shells. At first, Cancers may seem prickly and standoffish, but once they get to know you, they are incredibly loving and caring.',
    house: 4
  },
  {
    id: 5,
    name: 'Leo',
    symbol: '♌',
    element: 'Fire',
    modality: 'Fixed',
    rulingPlanet: 'Sun',
    dates: 'July 23 - August 22',
    color: '#FFEAA7',
    traits: ['Creative', 'Passionate', 'Generous', 'Warm-hearted', 'Cheerful'],
    strengths: ['Confidence', 'Charisma', 'Leadership', 'Generosity', 'Loyalty'],
    weaknesses: ['Arrogance', 'Stubbornness', 'Self-centered', 'Lazy', 'Inflexible'],
    compatibility: ['Aries', 'Sagittarius', 'Gemini', 'Libra'],
    famousPeople: ['Barack Obama', 'Jennifer Lawrence', 'Chris Hemsworth', 'Madonna'],
    description: 'Leo is a fire sign represented by the lion. Leos are radiantly joyful, liberal with their appeal and endowments. They are fiercely proud and confident. They love and live life to the fullest rather than being in charge at all times.',
    house: 5
  },
  {
    id: 6,
    name: 'Virgo',
    symbol: '♍',
    element: 'Earth',
    modality: 'Mutable',
    rulingPlanet: 'Mercury',
    dates: 'August 23 - September 22',
    color: '#DDA0DD',
    traits: ['Loyal', 'Analytical', 'Kind', 'Hardworking', 'Practical'],
    strengths: ['Detail-oriented', 'Reliable', 'Helpful', 'Modest', 'Perfectionist'],
    weaknesses: ['Worry', 'Shyness', 'Overly critical', 'Workaholic', 'Harsh'],
    compatibility: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio'],
    famousPeople: ['Beyoncé', 'Keanu Reeves', 'Cameron Diaz', 'Blake Lively'],
    description: 'Virgo is an earth sign represented by the goddess of wheat and agriculture. Virgos are logical, practical, and systematic in their approach to life. They are perfectionists at heart and aren\'t afraid to improve skills through diligent and consistent practice.',
    house: 6
  },
  {
    id: 7,
    name: 'Libra',
    symbol: '♎',
    element: 'Air',
    modality: 'Cardinal',
    rulingPlanet: 'Venus',
    dates: 'September 23 - October 22',
    color: '#98D8C8',
    traits: ['Cooperative', 'Diplomatic', 'Gracious', 'Fair-minded', 'Social'],
    strengths: ['Harmony', 'Justice', 'Partnership', 'Charm', 'Diplomacy'],
    weaknesses: ['Indecisive', 'Avoids confrontations', 'Self-pity', 'Unreliable', 'Superficial'],
    compatibility: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius'],
    famousPeople: ['Will Smith', 'Kim Kardashian', 'Bruno Mars', 'Kate Winslet'],
    description: 'Libra is an air sign represented by the scales. Libras are obsessed with symmetry and strive to create equilibrium in all areas of life. They are the aesthetes of the zodiac, with a keen eye for beauty and art.',
    house: 7
  },
  {
    id: 8,
    name: 'Scorpio',
    symbol: '♏',
    element: 'Water',
    modality: 'Fixed',
    rulingPlanet: 'Pluto',
    dates: 'October 23 - November 21',
    color: '#F7A4A4',
    traits: ['Brave', 'Passionate', 'Stubborn', 'Loyal', 'Ambitious'],
    strengths: ['Resourceful', 'Powerful', 'Passionate', 'Determined', 'Intuitive'],
    weaknesses: ['Distrusting', 'Jealous', 'Secretive', 'Violent', 'Obsessive'],
    compatibility: ['Cancer', 'Pisces', 'Virgo', 'Capricorn'],
    famousPeople: ['Leonardo DiCaprio', 'Julia Roberts', 'Ryan Gosling', 'Katy Perry'],
    description: 'Scorpio is a water sign represented by the scorpion. Scorpios are one of the most misunderstood signs of the zodiac. Because of their incredible passion and power, Scorpios are often mistaken for being a fire sign.',
    house: 8
  },
  {
    id: 9,
    name: 'Sagittarius',
    symbol: '♐',
    element: 'Fire',
    modality: 'Mutable',
    rulingPlanet: 'Jupiter',
    dates: 'November 22 - December 21',
    color: '#FDCB6E',
    traits: ['Generous', 'Idealistic', 'Great sense of humor', 'Adventurous'],
    strengths: ['Optimistic', 'Freedom-loving', 'Honest', 'Philosophical', 'Humorous'],
    weaknesses: ['Promise more than can deliver', 'Impatient', 'Tactless', 'Restless', 'Irresponsible'],
    compatibility: ['Aries', 'Leo', 'Libra', 'Aquarius'],
    famousPeople: ['Taylor Swift', 'Brad Pitt', 'Miley Cyrus', 'Winston Churchill'],
    description: 'Sagittarius is a fire sign represented by the archer. Sagittarians are always on a quest for knowledge. They are the travelers and philosophers of the zodiac, always seeking the meaning of life and exploring new places and ideas.',
    house: 9
  },
  {
    id: 10,
    name: 'Capricorn',
    symbol: '♑',
    element: 'Earth',
    modality: 'Cardinal',
    rulingPlanet: 'Saturn',
    dates: 'December 22 - January 19',
    color: '#74B9FF',
    traits: ['Responsible', 'Disciplined', 'Self-control', 'Good managers'],
    strengths: ['Responsible', 'Disciplined', 'Self-control', 'Determined', 'Patient'],
    weaknesses: ['Know-it-all', 'Unforgiving', 'Condescending', 'Expecting the worst', 'Pessimistic'],
    compatibility: ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
    famousPeople: ['Michelle Obama', 'Bradley Cooper', 'Kit Harington', 'Timothée Chalamet'],
    description: 'Capricorn is an earth sign represented by the sea-goat. Capricorns are the ultimate achievers of the zodiac. They are ambitious, determined, materialistic, and strong. They are masters of self-control and have the ability to lead the way.',
    house: 10
  },
  {
    id: 11,
    name: 'Aquarius',
    symbol: '♒',
    element: 'Air',
    modality: 'Fixed',
    rulingPlanet: 'Uranus',
    dates: 'January 20 - February 18',
    color: '#A29BFE',
    traits: ['Progressive', 'Original', 'Independent', 'Humanitarian'],
    strengths: ['Innovative', 'Humanitarian', 'Independent', 'Intelligent', 'Friendly'],
    weaknesses: ['Runs from emotional expression', 'Temperamental', 'Uncompromising', 'Aloof', 'Contrary'],
    compatibility: ['Gemini', 'Libra', 'Aries', 'Sagittarius'],
    famousPeople: ['Oprah Winfrey', 'Harry Styles', 'Cristiano Ronaldo', 'Jennifer Aniston'],
    description: 'Aquarius is an air sign represented by the water bearer. Aquarians are progressive, independent, and humanitarian. They are visionaries and thinkers who are always ahead of their time. They value intellectualism and innovation.',
    house: 11
  },
  {
    id: 12,
    name: 'Pisces',
    symbol: '♓',
    element: 'Water',
    modality: 'Mutable',
    rulingPlanet: 'Neptune',
    dates: 'February 19 - March 20',
    color: '#FFB8E1',
    traits: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle', 'Wise'],
    strengths: ['Empathetic', 'Artistic', 'Intuitive', 'Gentle', 'Wise'],
    weaknesses: ['Fearful', 'Overly trusting', 'Sad', 'Desire to escape reality', 'Can be a victim'],
    compatibility: ['Cancer', 'Scorpio', 'Taurus', 'Capricorn'],
    famousPeople: ['Rihanna', 'Albert Einstein', 'Steve Jobs', 'Elizabeth Taylor'],
    description: 'Pisces is a water sign represented by two fish swimming in opposite directions. Pisceans are the most intuitive, sensitive, and empathetic of all the zodiac signs. They are the dreamers and artists of the zodiac, with a deep connection to the spiritual realm.',
    house: 12
  }
];

type ElementType = 'All' | 'Fire' | 'Earth' | 'Air' | 'Water';
type SortOption = 'name' | 'element' | 'house' | 'dates';

export default function ZodiacInsightsPage() {
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(zodiacSigns[0]);
  const [filterElement, setFilterElement] = useState<ElementType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('house');
  const [isComparing, setIsComparing] = useState(false);
  const [comparisonSigns, setComparisonSigns] = useState<ZodiacSign[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(false);

  // Filter and sort zodiac signs
  const filteredSigns = zodiacSigns
    .filter(sign => {
      if (filterElement !== 'All' && sign.element !== filterElement) return false;
      if (searchQuery && !sign.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name': return a.name.localeCompare(b.name);
        case 'element': return a.element.localeCompare(b.element);
        case 'house': return a.house - b.house;
        case 'dates': return a.dates.localeCompare(b.dates);
        default: return 0;
      }
    });

  const handleSignSelect = (sign: ZodiacSign) => {
    if (isComparing) {
      if (comparisonSigns.includes(sign)) {
        setComparisonSigns(prev => prev.filter(s => s.id !== sign.id));
      } else if (comparisonSigns.length < 3) {
        setComparisonSigns(prev => [...prev, sign]);
      }
    } else {
      setSelectedSign(sign);
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 300);
    }
  };

  const toggleComparison = () => {
    setIsComparing(!isComparing);
    if (isComparing) {
      setComparisonSigns([]);
    }
  };

  const clearComparison = () => {
    setComparisonSigns([]);
  };

  const getElementColor = (element: string) => {
    switch (element) {
      case 'Fire': return '#FF6B6B';
      case 'Earth': return '#4ECDC4';
      case 'Air': return '#45B7D1';
      case 'Water': return '#74B9FF';
      default: return '#8B5CF6';
    }
  };

  const getElementIcon = (element: string) => {
    switch (element) {
      case 'Fire': return '🔥';
      case 'Earth': return '🌍';
      case 'Air': return '💨';
      case 'Water': return '💧';
      default: return '✨';
    }
  };

  return (
    <div className={styles.zodiacContainer}>
      {/* Background Elements */}
      <div className={styles.cosmicBackground}></div>
      <div className={styles.nebulaEffect}></div>
      <div className={styles.constellationOverlay}></div>
      
      {/* Animated Planets */}
      <div className={styles.planetOne}></div>
      <div className={styles.planetTwo}></div>
      <div className={styles.planetThree}></div>

      <div className={styles.contentWrapper}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>
            <span className={styles.titleIcon}>♋</span>
            Zodiac Insights
          </h1>
          <p className={styles.subtitle}>
            Explore the 12 zodiac signs in detail. Discover personalities, traits, and cosmic connections.
          </p>
        </header>

        {/* Controls Section */}
        <div className={styles.controlsSection}>
          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search zodiac signs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  className={styles.clearButton}
                  onClick={() => setSearchQuery('')}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className={styles.filtersContainer}>
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>Filter by Element:</label>
              <div className={styles.elementFilters}>
                <button
                  className={`${styles.elementButton} ${filterElement === 'All' ? styles.active : ''}`}
                  onClick={() => setFilterElement('All')}
                >
                  All ✨
                </button>
                {['Fire', 'Earth', 'Air', 'Water'].map(element => (
                  <button
                    key={element}
                    className={`${styles.elementButton} ${filterElement === element ? styles.active : ''}`}
                    onClick={() => setFilterElement(element as ElementType)}
                    style={{ '--element-color': getElementColor(element) } as React.CSSProperties}
                  >
                    {getElementIcon(element)} {element}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>Sort by:</label>
              <select 
                className={styles.sortSelect}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
              >
                <option value="house">Zodiac Order</option>
                <option value="name">Name A-Z</option>
                <option value="element">Element</option>
                <option value="dates">Date Range</option>
              </select>
            </div>

            <div className={styles.viewControls}>
              <button
                className={`${styles.viewButton} ${viewMode === 'grid' ? styles.active : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <span className={styles.viewIcon}>◼◼</span> Grid
              </button>
              <button
                className={`${styles.viewButton} ${viewMode === 'list' ? styles.active : ''}`}
                onClick={() => setViewMode('list')}
              >
                <span className={styles.viewIcon}>☰</span> List
              </button>
            </div>

            <div className={styles.comparisonControl}>
              <button
                className={`${styles.comparisonButton} ${isComparing ? styles.comparing : ''}`}
                onClick={toggleComparison}
              >
                <span className={styles.comparisonIcon}>⚖️</span>
                {isComparing ? 'Exit Comparison' : 'Compare Signs'}
                {comparisonSigns.length > 0 && (
                  <span className={styles.comparisonCount}>{comparisonSigns.length}</span>
                )}
              </button>
              {isComparing && comparisonSigns.length > 0 && (
                <button
                  className={styles.clearComparisonButton}
                  onClick={clearComparison}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Comparison Bar */}
        {isComparing && comparisonSigns.length > 0 && (
          <div className={styles.comparisonBar}>
            <div className={styles.comparisonHeader}>
              <h3>Comparing {comparisonSigns.length} Signs:</h3>
              <span className={styles.comparisonHint}>
                Select up to 3 signs for detailed comparison
              </span>
            </div>
            <div className={styles.comparisonChips}>
              {comparisonSigns.map(sign => (
                <div key={sign.id} className={styles.comparisonChip}>
                  <span className={styles.chipSymbol}>{sign.symbol}</span>
                  <span className={styles.chipName}>{sign.name}</span>
                  <button
                    className={styles.chipRemove}
                    onClick={() => handleSignSelect(sign)}
                  >
                    ✕
                  </button>
                </div>
              ))}
              {comparisonSigns.length === 3 && (
                <div className={styles.maxLimit}>Max 3 signs</div>
              )}
            </div>
            {comparisonSigns.length >= 2 && (
              <button className={styles.analyzeButton}>
                Analyze Compatibility →
              </button>
            )}
          </div>
        )}

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Zodiac Signs Grid/List */}
          <div className={styles.zodiacSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                The 12 Zodiac Signs
                <span className={styles.signsCount}> ({filteredSigns.length})</span>
              </h2>
              <div className={styles.elementsLegend}>
                <div className={styles.legendItem}>
                  <span className={styles.legendIcon} style={{ color: '#FF6B6B' }}>🔥</span>
                  <span>Fire</span>
                </div>
                <div className={styles.legendItem}>
                  <span className={styles.legendIcon} style={{ color: '#4ECDC4' }}>🌍</span>
                  <span>Earth</span>
                </div>
                <div className={styles.legendItem}>
                  <span className={styles.legendIcon} style={{ color: '#45B7D1' }}>💨</span>
                  <span>Air</span>
                </div>
                <div className={styles.legendItem}>
                  <span className={styles.legendIcon} style={{ color: '#74B9FF' }}>💧</span>
                  <span>Water</span>
                </div>
              </div>
            </div>

            {viewMode === 'grid' ? (
              <div className={styles.zodiacGrid}>
                {filteredSigns.map(sign => (
                  <div
                    key={sign.id}
                    className={`${styles.zodiacCard} ${
                      selectedSign?.id === sign.id ? styles.selected : ''
                    } ${comparisonSigns.includes(sign) ? styles.comparisonSelected : ''}`}
                    onClick={() => handleSignSelect(sign)}
                    style={{
                      '--zodiac-color': sign.color,
                      '--element-color': getElementColor(sign.element),
                    } as React.CSSProperties}
                  >
                    <div className={styles.cardHeader}>
                      <div className={styles.zodiacSymbol}>{sign.symbol}</div>
                      <div className={styles.zodiacInfo}>
                        <h3 className={styles.cardTitle}>{sign.name}</h3>
                        <div className={styles.cardDates}>{sign.dates}</div>
                      </div>
                      {comparisonSigns.includes(sign) && (
                        <div className={styles.comparisonBadge}>✓</div>
                      )}
                    </div>

                    <div className={styles.cardBody}>
                      <div className={styles.elementBadge}>
                        <span className={styles.elementIcon}>
                          {getElementIcon(sign.element)}
                        </span>
                        <span>{sign.element}</span>
                      </div>
                      <div className={styles.cardTraits}>
                        {sign.traits.slice(0, 3).map((trait, index) => (
                          <span key={index} className={styles.traitTag}>
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.cardFooter}>
                      <div className={styles.planetInfo}>
                        <span className={styles.planetIcon}>🪐</span>
                        {sign.rulingPlanet}
                      </div>
                      <div className={styles.houseBadge}>
                        House {sign.house}
                      </div>
                    </div>

                    <div className={styles.cardGlow}></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.zodiacList}>
                {filteredSigns.map(sign => (
                  <div
                    key={sign.id}
                    className={`${styles.listItem} ${
                      selectedSign?.id === sign.id ? styles.selected : ''
                    }`}
                    onClick={() => handleSignSelect(sign)}
                  >
                    <div className={styles.listSymbol}>{sign.symbol}</div>
                    <div className={styles.listContent}>
                      <div className={styles.listHeader}>
                        <h3>{sign.name}</h3>
                        <span className={styles.listDates}>{sign.dates}</span>
                      </div>
                      <div className={styles.listDetails}>
                        <span className={styles.listElement}>
                          {getElementIcon(sign.element)} {sign.element}
                        </span>
                        <span className={styles.listPlanet}>🪐 {sign.rulingPlanet}</span>
                        <span className={styles.listHouse}>House {sign.house}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Zodiac Details Panel */}
          {selectedSign && !isComparing && (
            <div className={styles.detailsPanel}>
              <div className={styles.panelHeader}>
                <div className={styles.panelSymbol} style={{ color: selectedSign.color }}>
                  {selectedSign.symbol}
                </div>
                <div className={styles.panelTitle}>
                  <h2>{selectedSign.name}</h2>
                  <div className={styles.panelSubtitle}>
                    <span className={styles.panelDates}>{selectedSign.dates}</span>
                    <span className={styles.panelElement}>
                      {getElementIcon(selectedSign.element)} {selectedSign.element} • {selectedSign.modality}
                    </span>
                  </div>
                </div>
                <button
                  className={styles.addToComparison}
                  onClick={() => {
                    if (!comparisonSigns.includes(selectedSign) && comparisonSigns.length < 3) {
                      setComparisonSigns(prev => [...prev, selectedSign]);
                    }
                  }}
                  disabled={comparisonSigns.includes(selectedSign) || comparisonSigns.length >= 3}
                >
                  + Compare
                </button>
              </div>

              {isLoading ? (
                <div className={styles.loadingPanel}>
                  <div className={styles.loadingSpinner}></div>
                  <p>Loading cosmic insights...</p>
                </div>
              ) : (
                <>
                  <div className={styles.panelContent}>
                    {/* Overview */}
                    <div className={styles.overviewSection}>
                      <h3 className={styles.sectionTitle}>
                        <span className={styles.titleIcon}>📖</span>
                        Overview
                      </h3>
                      <p className={styles.description}>{selectedSign.description}</p>
                      
                      <div className={styles.keyFacts}>
                        <div className={styles.factItem}>
                          <div className={styles.factLabel}>Ruling Planet</div>
                          <div className={styles.factValue}>
                            <span className={styles.planetIcon}>🪐</span>
                            {selectedSign.rulingPlanet}
                          </div>
                        </div>
                        <div className={styles.factItem}>
                          <div className={styles.factLabel}>Element</div>
                          <div className={styles.factValue}>
                            <span className={styles.elementIcon}>
                              {getElementIcon(selectedSign.element)}
                            </span>
                            {selectedSign.element}
                          </div>
                        </div>
                        <div className={styles.factItem}>
                          <div className={styles.factLabel}>Modality</div>
                          <div className={styles.factValue}>{selectedSign.modality}</div>
                        </div>
                        <div className={styles.factItem}>
                          <div className={styles.factLabel}>House</div>
                          <div className={styles.factValue}>House {selectedSign.house}</div>
                        </div>
                      </div>
                    </div>

                    {/* Traits Grid */}
                    <div className={styles.traitsGrid}>
                      <div className={styles.traitsColumn}>
                        <h3 className={styles.traitsTitle}>
                          <span className={styles.titleIcon}>✨</span>
                          Key Traits
                        </h3>
                        <div className={styles.traitsList}>
                          {selectedSign.traits.map((trait, index) => (
                            <div key={index} className={styles.traitItem}>
                              <span className={styles.traitBullet}>•</span>
                              {trait}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={styles.traitsColumn}>
                        <h3 className={styles.traitsTitle}>
                          <span className={styles.titleIcon}>💪</span>
                          Strengths
                        </h3>
                        <div className={styles.traitsList}>
                          {selectedSign.strengths.map((strength, index) => (
                            <div key={index} className={styles.traitItem}>
                              <span className={styles.traitBullet}>✓</span>
                              {strength}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={styles.traitsColumn}>
                        <h3 className={styles.traitsTitle}>
                          <span className={styles.titleIcon}>⚠️</span>
                          Weaknesses
                        </h3>
                        <div className={styles.traitsList}>
                          {selectedSign.weaknesses.map((weakness, index) => (
                            <div key={index} className={styles.traitItem}>
                              <span className={styles.traitBullet}>•</span>
                              {weakness}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Compatibility */}
                    <div className={styles.compatibilitySection}>
                      <h3 className={styles.sectionTitle}>
                        <span className={styles.titleIcon}>💫</span>
                        Best Compatibility
                      </h3>
                      <div className={styles.compatibilityGrid}>
                        {selectedSign.compatibility.map((compatSign, index) => {
                          const compat = zodiacSigns.find(z => z.name === compatSign);
                          return compat ? (
                            <div key={index} className={styles.compatCard}>
                              <div className={styles.compatSymbol}>{compat.symbol}</div>
                              <div className={styles.compatInfo}>
                                <h4>{compat.name}</h4>
                                <div className={styles.compatElement}>
                                  {getElementIcon(compat.element)} {compat.element}
                                </div>
                              </div>
                            </div>
                          ) : null;
                        })}
                      </div>
                    </div>

                    {/* Famous People */}
                    <div className={styles.famousSection}>
                      <h3 className={styles.sectionTitle}>
                        <span className={styles.titleIcon}>🌟</span>
                        Famous {selectedSign.name}s
                      </h3>
                      <div className={styles.famousGrid}>
                        {selectedSign.famousPeople.map((person, index) => (
                          <div key={index} className={styles.famousCard}>
                            <div className={styles.famousAvatar}>
                              {person.charAt(0)}
                            </div>
                            <div className={styles.famousName}>{person}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cosmic Insights */}
                    <div className={styles.insightsSection}>
                      <h3 className={styles.sectionTitle}>
                        <span className={styles.titleIcon}>🔮</span>
                        Cosmic Insights
                      </h3>
                      <div className={styles.insightsContent}>
                        <div className={styles.insightCard}>
                          <div className={styles.insightIcon}>🌙</div>
                          <div className={styles.insightText}>
                            <strong>Moon Connection:</strong> {selectedSign.name}s are most 
                            emotionally aligned during {selectedSign.element.toLowerCase()} seasons.
                          </div>
                        </div>
                        <div className={styles.insightCard}>
                          <div className={styles.insightIcon}>⭐</div>
                          <div className={styles.insightText}>
                            <strong>Career Path:</strong> Naturally drawn to {selectedSign.element.toLowerCase()}-based professions.
                          </div>
                        </div>
                        <div className={styles.insightCard}>
                          <div className={styles.insightIcon}>💖</div>
                          <div className={styles.insightText}>
                            <strong>Love Language:</strong> Express love through {selectedSign.element.toLowerCase()} element qualities.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.panelFooter}>
                    <button className={styles.shareButton}>
                      <span className={styles.shareIcon}>📤</span>
                      Share Insights
                    </button>
                    <button className={styles.saveButton}>
                      <span className={styles.saveIcon}>💾</span>
                      Save to Profile
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Comparison Panel */}
          {isComparing && comparisonSigns.length > 0 && (
            <ComparisonPanel signs={comparisonSigns} />
          )}
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerNote}>
              <p>
                <strong>Note:</strong> Zodiac insights are for entertainment and self-reflection purposes. 
                Individual experiences may vary based on many factors beyond sun signs.
              </p>
            </div>
            <div className={styles.footerLinks}>
              <button className={styles.footerLink}>Zodiac Calendar</button>
              <button className={styles.footerLink}>Element Guide</button>
              <button className={styles.footerLink}>Birth Chart Calculator</button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Comparison Panel Component
function ComparisonPanel({ signs }: { signs: ZodiacSign[] }) {
  const getElementIcon = (element: string) => {
    switch (element) {
      case 'Fire': return '🔥';
      case 'Earth': return '🌍';
      case 'Air': return '💨';
      case 'Water': return '💧';
      default: return '✨';
    }
  };

  return (
    <div className={styles.comparisonPanel}>
      <div className={styles.comparisonHeader}>
        <h2 className={styles.comparisonTitle}>
          <span className={styles.titleIcon}>⚖️</span>
          Zodiac Comparison
        </h2>
        <p className={styles.comparisonSubtitle}>
          Compare traits, elements, and compatibility between {signs.length} signs
        </p>
      </div>

      <div className={styles.comparisonGrid}>
        {/* Header Row */}
        <div className={styles.comparisonRow}>
          <div className={styles.comparisonLabel}></div>
          {signs.map(sign => (
            <div key={sign.id} className={styles.comparisonSignHeader}>
              <div className={styles.compSymbol}>{sign.symbol}</div>
              <h3>{sign.name}</h3>
              <div className={styles.compElement}>
                {getElementIcon(sign.element)} {sign.element}
              </div>
            </div>
          ))}
        </div>

        {/* Element Row */}
        <div className={styles.comparisonRow}>
          <div className={styles.comparisonLabel}>Element</div>
          {signs.map(sign => (
            <div key={sign.id} className={styles.comparisonCell}>
              {sign.element}
            </div>
          ))}
        </div>

        {/* Modality Row */}
        <div className={styles.comparisonRow}>
          <div className={styles.comparisonLabel}>Modality</div>
          {signs.map(sign => (
            <div key={sign.id} className={styles.comparisonCell}>
              {sign.modality}
            </div>
          ))}
        </div>

        {/* Ruling Planet Row */}
        <div className={styles.comparisonRow}>
          <div className={styles.comparisonLabel}>Ruling Planet</div>
          {signs.map(sign => (
            <div key={sign.id} className={styles.comparisonCell}>
              {sign.rulingPlanet}
            </div>
          ))}
        </div>

        {/* Traits Row */}
        <div className={styles.comparisonRow}>
          <div className={styles.comparisonLabel}>Key Traits</div>
          {signs.map(sign => (
            <div key={sign.id} className={styles.comparisonCell}>
              <div className={styles.traitsTags}>
                {sign.traits.slice(0, 3).map((trait, idx) => (
                  <span key={idx} className={styles.compTraitTag}>
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Compatibility Row */}
        <div className={styles.comparisonRow}>
          <div className={styles.comparisonLabel}>Compatibility</div>
          {signs.map(sign => (
            <div key={sign.id} className={styles.comparisonCell}>
              <div className={styles.compCompatibility}>
                {sign.compatibility.slice(0, 2).map((comp, idx) => (
                  <span key={idx} className={styles.compCompatTag}>
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.comparisonActions}>
        <button className={styles.compActionButton}>
          <span className={styles.actionIcon}>📊</span>
          Detailed Analysis
        </button>
        <button className={styles.compActionButton}>
          <span className={styles.actionIcon}>💑</span>
          Check Compatibility
        </button>
        <button className={styles.compActionButton}>
          <span className={styles.actionIcon}>📥</span>
          Export Comparison
        </button>
      </div>
    </div>
  );
}