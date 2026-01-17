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

   {
    id: 'gemini',
    name: 'Gemini',
    symbol: '♊',
    element: 'Air',
    quality: 'Mutable',
    rulingPlanet: 'Mercury',
    dates: 'May 21 - June 20',
    
    personality: {
      strengths: ['Gentle', 'Affectionate', 'Curious', 'Adaptable', 'Eloquent'],
      weaknesses: ['Nervous', 'Inconsistent', 'Indecisive', 'Superficial'],
      keywords: ['Communicator', 'Versatile', 'Youthful', 'Intellectual'],
    },
    
    insights: {
      overview: 'Gemini adalah si kembar yang selalu haus pengetahuan - cerewet, cepat belajar, dan selalu ingin tahu. Mereka adalah jembatan antar manusia.',
      loveCompatibility: ['Libra', 'Aquarius', 'Aries', 'Leo'],
      careerPaths: ['Journalist', 'Teacher', 'Salesperson', 'Writer', 'Broadcaster'],
      famousGemini: ['Kanye West', 'Angelina Jolie', 'Johnny Depp', 'Kendrick Lamar'],
    },
    
    cosmicAnalysis: {
      elementAnalysis: 'Udara memberi Gemini kemampuan komunikasi dan pemikiran analitis. Mereka seperti angin yang selalu bergerak dan berubah.',
      planetAnalysis: 'Mercury, planet komunikasi, memberi Gemini kemampuan verbal dan intelektual yang luar biasa.',
      houseAssociation: 'Rumah Ketiga - Rumah Komunikasi dan Hubungan.',
    },
    
    yearlyFocus: {
      theme: 'Communication & Learning',
      advice: 'Eksplorasi bidang baru dan perbanyak jaringan sosial.',
      challenges: 'Fokus menyelesaikan satu hal sebelum pindah ke hal lain.',
    },
    
    colors: ['Yellow', 'Light Green', 'Silver'],
    gemstones: ['Agate', 'Citrine', 'Pearl'],
    luckyNumbers: [3, 5, 12],
  },

    {
    id: 'cancer',
    name: 'Cancer',
    symbol: '♋',
    element: 'Water',
    quality: 'Cardinal',
    rulingPlanet: 'Moon',
    dates: 'June 21 - July 22',
    
    personality: {
      strengths: ['Loyal', 'Emotional', 'Sympathetic', 'Persuasive', 'Caring'],
      weaknesses: ['Moody', 'Pessimistic', 'Suspicious', 'Clingy'],
      keywords: ['Nurturer', 'Protective', 'Intuitive', 'Sentimental'],
    },
    
    insights: {
      overview: 'Cancer adalah penjaga rumah dan keluarga - penuh kasih sayang, intuitif, dan sangat protektif. Mereka adalah jiwa yang emosional dan sensitif.',
      loveCompatibility: ['Scorpio', 'Pisces', 'Taurus', 'Virgo'],
      careerPaths: ['Chef', 'Historian', 'Real Estate', 'Nurse', 'Interior Designer'],
      famousCancer: ['Tom Hanks', 'Selena Gomez', 'Post Malone', 'Princess Diana'],
    },
    
    cosmicAnalysis: {
      elementAnalysis: 'Air memberi Cancer kedalaman emosi dan intuisi yang kuat. Mereka seperti laut yang dalam dengan arus bawah yang kuat.',
      planetAnalysis: 'Bulan memberi Cancer sifat melindungi dan kepekaan terhadap suasana hati.',
      houseAssociation: 'Rumah Keempat - Rumah Keluarga dan Akar.',
    },
    
    yearlyFocus: {
      theme: 'Emotional Security & Family',
      advice: 'Bangun fondasi emosional yang kuat dan fokus pada kehidupan rumah.',
      challenges: 'Belajar mengelola mood dan tidak terlalu protektif.',
    },
    
    colors: ['Silver', 'White', 'Sea Green'],
    gemstones: ['Pearl', 'Moonstone', 'Emerald'],
    luckyNumbers: [2, 7, 11],
  },

    {
    id: 'leo',
    name: 'Leo',
    symbol: '♌',
    element: 'Fire',
    quality: 'Fixed',
    rulingPlanet: 'Sun',
    dates: 'July 23 - August 22',
    
    personality: {
      strengths: ['Creative', 'Passionate', 'Generous', 'Cheerful', 'Humorous'],
      weaknesses: ['Arrogant', 'Stubborn', 'Self-centered', 'Lazy'],
      keywords: ['Leader', 'Dramatic', 'Confident', 'Warm-hearted'],
    },
    
    insights: {
      overview: 'Leo adalah raja hutan zodiak - karismatik, kreatif, dan penuh percaya diri. Mereka lahir untuk bersinar dan memimpin.',
      loveCompatibility: ['Aries', 'Sagittarius', 'Gemini', 'Libra'],
      careerPaths: ['Actor', 'Politician', 'CEO', 'Designer', 'Event Planner'],
      famousLeo: ['Barack Obama', 'Madonna', 'Chris Hemsworth', 'Jennifer Lopez'],
    },
    
    cosmicAnalysis: {
      elementAnalysis: 'Api memberi Leo energi kreatif dan semangat hidup yang menggebu-gebu.',
      planetAnalysis: 'Matahari memberi Leo sifat kepemimpinan dan keinginan untuk menjadi pusat perhatian.',
      houseAssociation: 'Rumah Kelima - Rumah Kreativitas dan Kesenangan.',
    },
    
    yearlyFocus: {
      theme: 'Self-Expression & Creativity',
      advice: 'Tampilkan bakat kreatif dan ambil peran kepemimpinan.',
      challenges: 'Belajar mendengarkan orang lain dan menghindari ego yang berlebihan.',
    },
    
    colors: ['Gold', 'Orange', 'Royal Blue'],
    gemstones: ['Ruby', 'Amber', 'Citrine'],
    luckyNumbers: [1, 4, 10],
  },

   {
    id: 'virgo',
    name: 'Virgo',
    symbol: '♍',
    element: 'Earth',
    quality: 'Mutable',
    rulingPlanet: 'Mercury',
    dates: 'August 23 - September 22',
    
    personality: {
      strengths: ['Loyal', 'Analytical', 'Kind', 'Hardworking', 'Practical'],
      weaknesses: ['Worrying', 'Shy', 'Overcritical', 'Perfectionist'],
      keywords: ['Analyst', 'Perfectionist', 'Modest', 'Helpful'],
    },
    
    insights: {
      overview: 'Virgo adalah ahli zodiak - detail-oriented, analitis, dan selalu mencari kesempurnaan. Mereka adalah problem solver yang handal.',
      loveCompatibility: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio'],
      careerPaths: ['Doctor', 'Accountant', 'Editor', 'Researcher', 'Nutritionist'],
      famousVirgo: ['Beyoncé', 'Keanu Reeves', 'Zendaya', 'Freddie Mercury'],
    },
    
    cosmicAnalysis: {
      elementAnalysis: 'Bumi memberi Virgo sifat praktis dan perhatian pada detail-detail kecil.',
      planetAnalysis: 'Mercury memberi Virgo kemampuan analitis dan komunikasi yang jelas.',
      houseAssociation: 'Rumah Keenam - Rumah Kesehatan dan Rutinitas.',
    },
    
    yearlyFocus: {
      theme: 'Health & Service',
      advice: 'Fokus pada kesehatan, rutinitas, dan membantu orang lain.',
      challenges: 'Belajar menerima ketidaksempurnaan dan mengurangi kekhawatiran.',
    },
    
    colors: ['Navy Blue', 'Beige', 'Gray'],
    gemstones: ['Sapphire', 'Carnelian', 'Peridot'],
    luckyNumbers: [5, 14, 23],
  },
];