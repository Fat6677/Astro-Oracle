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
    
    personality: {
      strengths: ['Courageous', 'Determined', 'Confident', 'Enthusiastic', 'Optimistic'],
      weaknesses: ['Impatient', 'Moody', 'Short-tempered', 'Impulsive', 'Aggressive'],
      keywords: ['Pioneer', 'Trailblazer', 'Energetic', 'Adventurous'],
    },
    
    insights: {
      overview: 'Aries adalah pionir zodiak - penuh energi, berani, dan selalu siap memimpin. Sebagai zodiak pertama, mereka membawa semangat baru dan awal yang segar.',
      loveCompatibility: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
      careerPaths: ['Entrepreneur', 'Athlete', 'Military', 'Surgeon', 'Explorer'],
      famousPeople: ['Lady Gaga', 'Robert Downey Jr.', 'Elton John', 'Emma Watson'], // Ganti dari famousAries
    },
    
    cosmicAnalysis: {
      elementAnalysis: 'Api memberi Aries energi tak terbatas dan semangat kompetitif. Mereka seperti api unggun yang menyala terang dan panas.',
      planetAnalysis: 'Mars, planet perang, memberi Aries sifat agresif dan hasrat untuk menaklukkan.',
      houseAssociation: 'Rumah Pertama - Rumah Diri, memengaruhi identitas dan penampilan pribadi.',
    },
    
    yearlyFocus: {
      theme: 'Personal Growth & New Beginnings',
      advice: 'Fokus pada proyek-proyek baru dan jangan takut mengambil risiko.',
      challenges: 'Belajar mengendalikan emosi dan menjadi lebih sabar.',
    },
    
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
      famousPeople: ['Adele', 'David Beckham', 'George Clooney', 'Queen Elizabeth II'], // Ganti dari famousTaurus
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
      famousPeople: ['Kanye West', 'Angelina Jolie', 'Johnny Depp', 'Kendrick Lamar'], // Ganti dari famousGemini
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
      famousPeople: ['Tom Hanks', 'Selena Gomez', 'Post Malone', 'Princess Diana'], // Ganti dari famousCancer
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
      famousPeople: ['Barack Obama', 'Madonna', 'Chris Hemsworth', 'Jennifer Lopez'], // Ganti dari famousLeo
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
      famousPeople: ['Beyoncé', 'Keanu Reeves', 'Zendaya', 'Freddie Mercury'], // Ganti dari famousVirgo
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
  
  {
    id: 'libra',
    name: 'Libra',
    symbol: '♎',
    element: 'Air',
    quality: 'Cardinal',
    rulingPlanet: 'Venus',
    dates: 'September 23 - October 22',
    
    personality: {
      strengths: ['Cooperative', 'Diplomatic', 'Gracious', 'Fair-minded', 'Social'],
      weaknesses: ['Indecisive', 'Avoids confrontations', 'Self-pity', 'Unreliable'],
      keywords: ['Diplomat', 'Romantic', 'Charming', 'Balance-seeker'],
    },
    
    insights: {
      overview: 'Libra adalah diplomat zodiak - selalu mencari harmoni, keadilan, dan keindahan. Mereka adalah penghubung antar manusia.',
      loveCompatibility: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius'],
      careerPaths: ['Lawyer', 'Mediator', 'Artist', 'Counselor', 'Stylist'],
      famousPeople: ['Kim Kardashian', 'Will Smith', 'Bruno Mars', 'Gwyneth Paltrow'], // Ganti dari famousLibra
    },
    
    cosmicAnalysis: {
      elementAnalysis: 'Udara memberi Libra kemampuan untuk melihat semua sisi dan mencari keseimbangan.',
      planetAnalysis: 'Venus memberi Libra cinta akan keindahan dan hubungan yang harmonis.',
      houseAssociation: 'Rumah Ketujuh - Rumah Partnership dan Pernikahan.',
    },
    
    yearlyFocus: {
      theme: 'Relationships & Harmony',
      advice: 'Fokus pada hubungan yang seimbang dan kerja sama.',
      challenges: 'Belajar mengambil keputusan tegas dan menghadapi konflik.',
    },
    
    colors: ['Pink', 'Blue', 'Emerald'],
    gemstones: ['Opal', 'Lapis Lazuli', 'Diamond'],
    luckyNumbers: [6, 15, 24],
  },
  
  {
    id: 'scorpio',
    name: 'Scorpio',
    symbol: '♏',
    element: 'Water',
    quality: 'Fixed',
    rulingPlanet: 'Pluto',
    dates: 'October 23 - November 21',
    
    personality: {
      strengths: ['Brave', 'Passionate', 'Stubborn', 'Resourceful', 'True'],
      weaknesses: ['Distrusting', 'Jealous', 'Secretive', 'Violent'],
      keywords: ['Intense', 'Mysterious', 'Transformative', 'Powerful'],
    },
    
    insights: {
      overview: 'Scorpio adalah zodiak paling misterius dan intens - penuh gairah, intuitif, dan transformatif. Mereka memiliki kedalaman yang tidak dimiliki zodiak lain.',
      loveCompatibility: ['Cancer', 'Pisces', 'Virgo', 'Capricorn'],
      careerPaths: ['Detective', 'Psychologist', 'Researcher', 'Surgeon', 'Banker'],
      famousPeople: ['Drake', 'Julia Roberts', 'Ryan Gosling', 'Bill Gates'], // Ganti dari famousScorpio
    },
    
    cosmicAnalysis: {
      elementAnalysis: 'Air memberi Scorpio kedalaman emosi dan kemampuan untuk melihat dibawah permukaan.',
      planetAnalysis: 'Pluto memberi Scorpio sifat transformatif dan hubungan dengan kehidupan-kematian-kelahiran kembali.',
      houseAssociation: 'Rumah Kedelapan - Rumah Transformasi dan Kehidupan Batin.',
    },
    
    yearlyFocus: {
      theme: 'Transformation & Power',
      advice: 'Fokus pada transformasi pribadi dan menghadapi ketakutan terdalam.',
      challenges: 'Belajar mempercayai orang lain dan mengendalikan kecemburuan.',
    },
    
    colors: ['Black', 'Red', 'Burgundy'],
    gemstones: ['Topaz', 'Obsidian', 'Malachite'],
    luckyNumbers: [8, 11, 18],
  },
  
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    symbol: '♐',
    element: 'Fire',
    quality: 'Mutable',
    rulingPlanet: 'Jupiter',
    dates: 'November 22 - December 21',
    
    personality: {
      strengths: ['Generous', 'Idealistic', 'Great sense of humor', 'Adventurous'],
      weaknesses: ['Promises more than can deliver', 'Very impatient', 'Will say anything no matter how undiplomatic'],
      keywords: ['Explorer', 'Philosopher', 'Optimistic', 'Freedom-loving'],
    },
    
    insights: {
      overview: 'Sagittarius adalah petualang zodiak - optimis, filosofis, dan selalu mencari kebenaran. Mereka adalah pengembara yang bebas.',
      loveCompatibility: ['Aries', 'Leo', 'Libra', 'Aquarius'],
      careerPaths: ['Professor', 'Travel Guide', 'Publisher', 'Athlete', 'Explorer'],
      famousPeople: ['Taylor Swift', 'Brad Pitt', 'Miley Cyrus', 'Jay-Z'], // Ganti dari famousSagittarius
    },
    
    cosmicAnalysis: {
      elementAnalysis: 'Api memberi Sagittarius semangat petualangan dan optimisme yang tak terbendung.',
      planetAnalysis: 'Jupiter memberi Sagittarius keberuntungan dan keinginan untuk ekspansi.',
      houseAssociation: 'Rumah Kesembilan - Rumah Filsafat dan Perjalanan.',
    },
    
    yearlyFocus: {
      theme: 'Expansion & Adventure',
      advice: 'Eksplorasi budaya baru dan perluasan pengetahuan.',
      challenges: 'Belajar fokus dan menghormati komitmen.',
    },
    
    colors: ['Purple', 'Dark Blue', 'Gold'],
    gemstones: ['Turquoise', 'Amethyst', 'Topaz'],
    luckyNumbers: [3, 7, 12],
  },
  
  {
    id: 'capricorn',
    name: 'Capricorn',
    symbol: '♑',
    element: 'Earth',
    quality: 'Cardinal',
    rulingPlanet: 'Saturn',
    dates: 'December 22 - January 19',
    
    personality: {
      strengths: ['Responsible', 'Disciplined', 'Self-control', 'Good managers'],
      weaknesses: ['Know-it-all', 'Unforgiving', 'Condescending', 'Expecting the worst'],
      keywords: ['Ambitious', 'Disciplined', 'Patient', 'Practical'],
    },
    
    insights: {
      overview: 'Capricorn adalah pekerja keras zodiak - ambisius, disiplin, dan bertanggung jawab. Mereka adalah pendaki gunung kehidupan.',
      loveCompatibility: ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
      careerPaths: ['CEO', 'Engineer', 'Scientist', 'Administrator', 'Politician'],
      famousPeople: ['Michelle Obama', 'LeBron James', 'Kate Middleton', 'Elvis Presley'], // Ganti dari famousCapricorn
    },
    
    cosmicAnalysis: {
      elementAnalysis: 'Bumi memberi Capricorn sifat praktis dan kemampuan membangun fondasi yang kokoh.',
      planetAnalysis: 'Saturn memberi Capricorn disiplin dan kesabaran untuk mencapai tujuan jangka panjang.',
      houseAssociation: 'Rumah Kesepuluh - Rumah Karir dan Reputasi.',
    },
    
    yearlyFocus: {
      theme: 'Career & Structure',
      advice: 'Fokus pada tujuan karir dan membangun struktur yang stabil.',
      challenges: 'Belajar bersantai dan menikmati hidup selain pekerjaan.',
    },
    
    colors: ['Brown', 'Gray', 'Black'],
    gemstones: ['Garnet', 'Onyx', 'Ruby'],
    luckyNumbers: [4, 8, 13],
  },
  
  {
    id: 'aquarius',
    name: 'Aquarius',
    symbol: '♒',
    element: 'Air',
    quality: 'Fixed',
    rulingPlanet: 'Uranus',
    dates: 'January 20 - February 18',
    
    personality: {
      strengths: ['Progressive', 'Original', 'Humanitarian', 'Independent'],
      weaknesses: ['Runs from emotional expression', 'Temperamental', 'Uncompromising'],
      keywords: ['Innovator', 'Humanitarian', 'Eccentric', 'Visionary'],
    },
    
    insights: {
      overview: 'Aquarius adalah inovator zodiak - visioner, humanis, dan selalu berpikir ke depan. Mereka adalah agen perubahan.',
      loveCompatibility: ['Gemini', 'Libra', 'Aries', 'Sagittarius'],
      careerPaths: ['Scientist', 'Inventor', 'Social Worker', 'Astronomer', 'Programmer'],
      famousPeople: ['Oprah Winfrey', 'Cristiano Ronaldo', 'Harry Styles', 'Shakira'], // Ganti dari famousAquarius
    },
    
    cosmicAnalysis: {
      elementAnalysis: 'Udara memberi Aquarius kemampuan berpikir visioner dan konseptual.',
      planetAnalysis: 'Uranus memberi Aquarius sifat revolusioner dan keinginan untuk kebebasan.',
      houseAssociation: 'Rumah Kesebelas - Rumah Persahabatan dan Harapan.',
    },
    
    yearlyFocus: {
      theme: 'Innovation & Community',
      advice: 'Fokus pada proyek-proyek inovatif dan kontribusi sosial.',
      challenges: 'Belajar mengekspresikan emosi dan menghubungkan dengan orang lain secara personal.',
    },
    
    colors: ['Electric Blue', 'Silver', 'Aqua'],
    gemstones: ['Amethyst', 'Aquamarine', 'Opal'],
    luckyNumbers: [4, 7, 11],
  },
  
  {
    id: 'pisces',
    name: 'Pisces',
    symbol: '♓',
    element: 'Water',
    quality: 'Mutable',
    rulingPlanet: 'Neptune',
    dates: 'February 19 - March 20',
    
    personality: {
      strengths: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle', 'Wise'],
      weaknesses: ['Fearful', 'Overly trusting', 'Sad', 'Desire to escape reality'],
      keywords: ['Dreamer', 'Empath', 'Creative', 'Spiritual'],
    },
    
    insights: {
      overview: 'Pisces adalah visioner zodiak - intuitif, spiritual, dan sangat kreatif. Mereka adalah penghubung antara dunia fisik dan spiritual.',
      loveCompatibility: ['Cancer', 'Scorpio', 'Taurus', 'Capricorn'],
      careerPaths: ['Artist', 'Musician', 'Psychic', 'Marine Biologist', 'Nurse'],
      famousPeople: ['Rihanna', 'Albert Einstein', 'Steve Jobs', 'Kurt Cobain'], // Ganti dari famousPisces
    },
    
    cosmicAnalysis: {
      elementAnalysis: 'Air memberi Pisces sensitivitas tinggi dan kemampuan untuk merasakan energi orang lain.',
      planetAnalysis: 'Neptune memberi Pisces sifat mistis dan hubungan dengan alam bawah sadar.',
      houseAssociation: 'Rumah Keduabelas - Rumah Spiritualitas dan Subconscious.',
    },
    
    yearlyFocus: {
      theme: 'Spirituality & Creativity',
      advice: 'Fokus pada perkembangan spiritual dan ekspresi kreatif.',
      challenges: 'Tetap grounded di realitas dan menghindari pelarian.',
    },
    
    colors: ['Sea Green', 'Purple', 'Violet'],
    gemstones: ['Aquamarine', 'Amethyst', 'Moonstone'],
    luckyNumbers: [3, 9, 12],
  },
];