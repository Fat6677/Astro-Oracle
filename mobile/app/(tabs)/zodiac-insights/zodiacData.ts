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

   {
    id: 'taurus',
    name: 'Taurus',
    symbol: '♉',
    element: 'Earth',
    quality: 'Fixed',
    rulingPlanet: 'Venus',
    dates: 'April 20 - May 20',
    
    personality: {
      strengths: ['Reliable', 'Patient', 'Practical', 'Devoted', 'Responsible'],
      weaknesses: ['Stubborn', 'Possessive', 'Uncompromising', 'Materialistic'],
      keywords: ['Stable', 'Sensual', 'Luxurious', 'Grounded'],
    },
    
    insights: {
      overview: 'Taurus adalah penjaga kebahagiaan duniawi - mencintai keindahan, kenyamanan, dan stabilitas. Mereka adalah fondasi yang kokoh dalam kehidupan.',
      loveCompatibility: ['Virgo', 'Capricorn', 'Cancer', 'Pisces'],
      careerPaths: ['Banker', 'Chef', 'Artist', 'Architect', 'Landscaper'],
      famousTaurus: ['Adele', 'David Beckham', 'George Clooney', 'Queen Elizabeth II'],
    },
    
    cosmicAnalysis: {
      elementAnalysis: 'Bumi memberi Taurus sifat praktis dan hubungan kuat dengan dunia fisik. Mereka menghargai hal-hal nyata dan material.',
      planetAnalysis: 'Venus, planet cinta dan keindahan, memberi Taurus apresiasi tinggi terhadap seni dan kesenangan sensual.',
      houseAssociation: 'Rumah Kedua - Rumah Nilai dan Kekayaan.',
    },
    
    yearlyFocus: {
      theme: 'Financial Stability & Self-Worth',
      advice: 'Invest dalam hal-hal yang membawa keamanan jangka panjang.',
      challenges: 'Menghindari keras kepala dan belajar beradaptasi dengan perubahan.',
    },
    
    colors: ['Green', 'Pink', 'Light Blue'],
    gemstones: ['Emerald', 'Rose Quartz', 'Sapphire'],
    luckyNumbers: [2, 6, 9],
  },

  
];