/**
 * TIPE DATA UNTUK ZODIAK
 * Mendefinisikan struktur lengkap data zodiak
 */

export interface ZodiacSign {
  id: string;
  name: string;
  symbol: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  quality: 'Cardinal' | 'Fixed' | 'Mutable';
  rulingPlanet: string;
  dates: string;
  
  personality: {
    strengths: string[];
    weaknesses: string[];
    keywords: string[];
  };
  
  insights: {
    overview: string;
    loveCompatibility: string[];
    careerPaths: string[];
    famousAries: string[];
  };
  
  cosmicAnalysis: {
    elementAnalysis: string;
    planetAnalysis: string;
    houseAssociation: string;
  };
  
  yearlyFocus: {
    theme: string;
    advice: string;
    challenges: string;
  };
  
  colors: string[];
  gemstones: string[];
  luckyNumbers: number[];
}

/**
 * Interface untuk kartu zodiak
 */
export interface ZodiacCardProps {
  zodiac: ZodiacSign;
  onPress: () => void;
}

/**
 * Interface untuk detail zodiak
 */
export interface ZodiacDetailParams {
  zodiac: string;
}