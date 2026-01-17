import { ZodiacSign } from '../../types/zodiac';

/**
 * DATA LENGKAP 12 ZODIAK
 * Setiap zodiak memiliki informasi komprehensif untuk insights mendalam
 */

export const zodiacData: ZodiacSign[] = [
  {
    id: 'aries',
    name: 'Aries',
    symbol: '♈',
    element: 'Fire',
    quality: 'Cardinal',
    rulingPlanet: 'Mars',
    dates: 'March 21 - April 19',
    
    // Personality Traits
    personality: {
      strengths: ['Courageous', 'Determined', 'Confident', 'Enthusiastic', 'Optimistic'],
      weaknesses: ['Impatient', 'Moody', 'Short-tempered', 'Impulsive', 'Aggressive'],
      keywords: ['Pioneer', 'Trailblazer', 'Energetic', 'Adventurous'],
    },
    
    // Deep Insights
    insights: {
      overview: 'Aries adalah pionir zodiak - penuh energi, berani, dan selalu siap memimpin. Sebagai zodiak pertama, mereka membawa semangat baru dan awal yang segar.',
      loveCompatibility: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
      careerPaths: ['Entrepreneur', 'Athlete', 'Military', 'Surgeon', 'Explorer'],
      famousAries: ['Lady Gaga', 'Robert Downey Jr.', 'Elton John', 'Emma Watson'],
    },
    
    // Cosmic Analysis
    cosmicAnalysis: {
      elementAnalysis: 'Api memberi Aries energi tak terbatas dan semangat kompetitif. Mereka seperti api unggun yang menyala terang dan panas.',
      planetAnalysis: 'Mars, planet perang, memberi Aries sifat agresif dan hasrat untuk menaklukkan.',
      houseAssociation: 'Rumah Pertama - Rumah Diri, memengaruhi identitas dan penampilan pribadi.',
    },
    
    // Yearly Focus
    yearlyFocus: {
      theme: 'Personal Growth & New Beginnings',
      advice: 'Fokus pada proyek-proyek baru dan jangan takut mengambil risiko.',
      challenges: 'Belajar mengendalikan emosi dan menjadi lebih sabar.',
    },
    
    // Visual Properties
    colors: ['Red', 'Scarlet', 'Crimson'],
    gemstones: ['Diamond', 'Ruby', 'Bloodstone'],
    luckyNumbers: [1, 9, 19],
  },

  
];