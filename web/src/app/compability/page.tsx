// src/app/compatibility/page.tsx
'use client';

import { useState, useEffect } from 'react';
import styles from './compability.module.css';

type ZodiacSign = {
  id: number;
  name: string;
  symbol: string;
  dateRange: string;
  color: string;
  description: string;
};

type CompatibilityResult = {
  percentage: number;
  title: string;
  description: string;
  strengths: string[];
  challenges: string[];
  advice: string;
};

const zodiacSigns: ZodiacSign[] = [
  { id: 1, name: 'Aries', symbol: '♈', dateRange: 'Mar 21 - Apr 19', color: '#FF6B6B', description: 'The Trailblazer' },
  { id: 2, name: 'Taurus', symbol: '♉', dateRange: 'Apr 20 - May 20', color: '#4ECDC4', description: 'The Builder' },
  { id: 3, name: 'Gemini', symbol: '♊', dateRange: 'May 21 - Jun 20', color: '#45B7D1', description: 'The Communicator' },
  { id: 4, name: 'Cancer', symbol: '♋', dateRange: 'Jun 21 - Jul 22', color: '#96CEB4', description: 'The Nurturer' },
  { id: 5, name: 'Leo', symbol: '♌', dateRange: 'Jul 23 - Aug 22', color: '#FFEAA7', description: 'The Performer' },
  { id: 6, name: 'Virgo', symbol: '♍', dateRange: 'Aug 23 - Sep 22', color: '#DDA0DD', description: 'The Analyst' },
  { id: 7, name: 'Libra', symbol: '♎', dateRange: 'Sep 23 - Oct 22', color: '#98D8C8', description: 'The Harmonizer' },
  { id: 8, name: 'Scorpio', symbol: '♏', dateRange: 'Oct 23 - Nov 21', color: '#F7A4A4', description: 'The Transformer' },
  { id: 9, name: 'Sagittarius', symbol: '♐', dateRange: 'Nov 22 - Dec 21', color: '#FDCB6E', description: 'The Explorer' },
  { id: 10, name: 'Capricorn', symbol: '♑', dateRange: 'Dec 22 - Jan 19', color: '#74B9FF', description: 'The Architect' },
  { id: 11, name: 'Aquarius', symbol: '♒', dateRange: 'Jan 20 - Feb 18', color: '#A29BFE', description: 'The Visionary' },
  { id: 12, name: 'Pisces', symbol: '♓', dateRange: 'Feb 19 - Mar 20', color: '#FFB8E1', description: 'The Dreamer' },
];

const compatibilityResults: CompatibilityResult[] = [
  {
    percentage: 85,
    title: 'Koneksi yang Menguatkan',
    description: 'Kalian memiliki energi yang saling melengkapi dengan harmonis. Hubungan ini membawa keseimbangan yang langka, di mana kekuatan satu sama lain saling mendukung dan kelemahan saling diperkuat.',
    strengths: ['Komunikasi yang mendalam', 'Kesetiaan yang kuat', 'Saling memahami tanpa kata'],
    challenges: ['Kedua pihak mungkin terlalu idealis', 'Perbedaan cara mengekspresikan kasih sayang'],
    advice: 'Jaga ruang untuk pertumbuhan individual di samping kebersamaan. Terkadang, keheningan bersama lebih berarti daripada kata-kata.'
  },
  {
    percentage: 72,
    title: 'Tantangan yang Menarik',
    description: 'Kalian bertemu seperti dua kutub magnet - ada tarik-menarik yang kuat, namun juga butuh penyesuaian. Perbedaan ini justru menjadi ruang belajar yang berharga.',
    strengths: ['Saling menginspirasi', 'Dinamis dan tidak monoton', 'Menantang untuk berkembang'],
    challenges: ['Konflik pendapat yang sering', 'Perbedaan prioritas hidup'],
    advice: 'Lihat perbedaan sebagai peluang, bukan penghalang. Komunikasi terbuka akan mengubah tantangan menjadi kekuatan.'
  },
  {
    percentage: 95,
    title: 'Harmoni Jiwa',
    description: 'Kalian menemukan resonansi jiwa yang jarang terjadi. Ada perasaan seperti sudah saling mengenal sejak lama, bahkan ketika baru bertemu.',
    strengths: ['Kenyamanan yang alami', 'Pemahaman intuitif', 'Saling mendukung tanpa syarat'],
    challenges: ['Mungkin kurang tantangan', 'Terlalu nyaman hingga lupa berkembang'],
    advice: 'Rayakan kemudahan ini, namun tetap jaga kejutan dan petualangan kecil untuk menjaga percikan tetap hidup.'
  }
];

export default function CompatibilityChecker() {
  const [selectedSign1, setSelectedSign1] = useState<ZodiacSign | null>(null);
  const [selectedSign2, setSelectedSign2] = useState<ZodiacSign | null>(null);
  const [result, setResult] = useState<CompatibilityResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const calculateCompatibility = () => {
    if (!selectedSign1 || !selectedSign2) {
      alert('Pilih kedua zodiak terlebih dahulu');
      return;
    }

    setIsLoading(true);
    
    // Simulasi loading
    setTimeout(() => {
      // Logika sederhana untuk menentukan hasil berdasarkan kombinasi zodiak
      const sumId = selectedSign1.id + selectedSign2.id;
      let resultIndex;
      
      if (selectedSign1.id === selectedSign2.id) {
        resultIndex = 2; // Harmoni Jiwa untuk zodiak sama
      } else if (Math.abs(selectedSign1.id - selectedSign2.id) <= 2) {
        resultIndex = 0; // Koneksi yang Menguatkan untuk zodiak berdekatan
      } else {
        resultIndex = 1; // Tantangan yang Menarik untuk zodiak jauh
      }
      
      setResult(compatibilityResults[resultIndex]);
      setIsLoading(false);
      
      // Scroll ke hasil
      window.scrollTo({
        top: document.getElementById('result-section')?.offsetTop || 0,
        behavior: 'smooth'
      });
    }, 1500);
  };

  const resetSelection = () => {
    setSelectedSign1(null);
    setSelectedSign2(null);
    setResult(null);
  };

  return (
    <div className={styles.compatibilityContainer}>
      {/* Background nebula effect */}
      <div className={styles.nebulaBackground}></div>
      <div className={styles.nebulaOverlay}></div>
      
      {/* Stars animation */}
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      
      <div className={styles.contentWrapper}>
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>Compatibility Checker</h1>
          <p className={styles.subtitle}>
            Jelajahi energi kosmik yang menghubungkan hati dan jiwa
          </p>
        </header>

        <div className={styles.selectionSection}>
          {/* Zodiac Selection Panel 1 */}
          <div className={styles.zodiacPanel}>
            <div className={styles.panelHeader}>
              <h2 className={styles.panelTitle}>Individu Pertama</h2>
              <div className={styles.panelSubtitle}>Pilih zodiak Anda</div>
            </div>
            
            <div className={styles.zodiacGrid}>
              {zodiacSigns.map((sign) => (
                <button
                  key={`sign1-${sign.id}`}
                  className={`${styles.zodiacCard} ${
                    selectedSign1?.id === sign.id ? styles.selected : ''
                  }`}
                  onClick={() => setSelectedSign1(sign)}
                  style={{
                    '--zodiac-color': sign.color,
                  } as React.CSSProperties}
                >
                  <div className={styles.zodiacSymbol}>{sign.symbol}</div>
                  <div className={styles.zodiacName}>{sign.name}</div>
                  <div className={styles.zodiacDate}>{sign.dateRange}</div>
                  <div className={styles.zodiacDescription}>{sign.description}</div>
                  
                  {selectedSign1?.id === sign.id && (
                    <div className={styles.selectionGlow}></div>
                  )}
                </button>
              ))}
            </div>
            
            {selectedSign1 && (
              <div className={styles.selectedInfo}>
                <div className={styles.selectedSymbol} style={{ color: selectedSign1.color }}>
                  {selectedSign1.symbol}
                </div>
                <div className={styles.selectedDetails}>
                  <h3>{selectedSign1.name}</h3>
                  <p>{selectedSign1.description} • {selectedSign1.dateRange}</p>
                </div>
              </div>
            )}
          </div>

          {/* Connection Animation */}
          <div className={styles.connectionContainer}>
            <div className={styles.connectionOrbit}>
              <div className={styles.connectionCenter}>
                <div className={`${styles.constellationDot} ${animationStep === 0 ? styles.active : ''}`}></div>
                <div className={`${styles.constellationDot} ${animationStep === 1 ? styles.active : ''}`}></div>
                <div className={`${styles.constellationDot} ${animationStep === 2 ? styles.active : ''}`}></div>
                <div className={`${styles.constellationLine} ${animationStep === 0 ? styles.active : ''}`}></div>
                <div className={`${styles.constellationLine} ${animationStep === 1 ? styles.active : ''}`}></div>
                <div className={`${styles.constellationLine} ${animationStep === 2 ? styles.active : ''}`}></div>
                <div className={`${styles.constellationLine} ${animationStep === 3 ? styles.active : ''}`}></div>
              </div>
            </div>
            <div className={styles.connectionLabel}>
              <span className={styles.energyFlow}>Energi Kosmik</span>
              <span className={styles.connectingHearts}>Menghubungkan Jiwa</span>
            </div>
          </div>

          {/* Zodiac Selection Panel 2 */}
          <div className={styles.zodiacPanel}>
            <div className={styles.panelHeader}>
              <h2 className={styles.panelTitle}>Individu Kedua</h2>
              <div className={styles.panelSubtitle}>Pilih zodiak pasangan</div>
            </div>
            
            <div className={styles.zodiacGrid}>
              {zodiacSigns.map((sign) => (
                <button
                  key={`sign2-${sign.id}`}
                  className={`${styles.zodiacCard} ${
                    selectedSign2?.id === sign.id ? styles.selected : ''
                  }`}
                  onClick={() => setSelectedSign2(sign)}
                  style={{
                    '--zodiac-color': sign.color,
                  } as React.CSSProperties}
                >
                  <div className={styles.zodiacSymbol}>{sign.symbol}</div>
                  <div className={styles.zodiacName}>{sign.name}</div>
                  <div className={styles.zodiacDate}>{sign.dateRange}</div>
                  <div className={styles.zodiacDescription}>{sign.description}</div>
                  
                  {selectedSign2?.id === sign.id && (
                    <div className={styles.selectionGlow}></div>
                  )}
                </button>
              ))}
            </div>
            
            {selectedSign2 && (
              <div className={styles.selectedInfo}>
                <div className={styles.selectedSymbol} style={{ color: selectedSign2.color }}>
                  {selectedSign2.symbol}
                </div>
                <div className={styles.selectedDetails}>
                  <h3>{selectedSign2.name}</h3>
                  <p>{selectedSign2.description} • {selectedSign2.dateRange}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className={styles.actionSection}>
          <button
            className={`${styles.checkButton} ${
              (selectedSign1 && selectedSign2) ? styles.active : ''
            }`}
            onClick={calculateCompatibility}
            disabled={!selectedSign1 || !selectedSign2 || isLoading}
          >
            {isLoading ? (
              <>
                <span className={styles.spinner}></span>
                Membaca Energi Kosmik...
              </>
            ) : (
              'Lihat Kecocokan'
            )}
          </button>
          
          {(selectedSign1 || selectedSign2) && (
            <button className={styles.resetButton} onClick={resetSelection}>
              Pilih Ulang Zodiak
            </button>
          )}
        </div>

        {/* Results Section */}
        {result && (
          <section id="result-section" className={styles.resultSection}>
            <div className={styles.resultCard}>
              <div className={styles.resultHeader}>
                <div className={styles.percentageCircle}>
                  <svg className={styles.circleSvg} viewBox="0 0 36 36">
                    <path
                      className={styles.circleBg}
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className={styles.circleProgress}
                      strokeDasharray={`${result.percentage}, 100`}
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className={styles.percentageText}>{result.percentage}%</div>
                  <div className={styles.circleGlow}></div>
                </div>
                
                <div className={styles.resultTitleContainer}>
                  <h2 className={styles.resultTitle}>{result.title}</h2>
                  <div className={styles.resultSubtitle}>
                    {selectedSign1?.name} {selectedSign1?.symbol} & {selectedSign2?.name} {selectedSign2?.symbol}
                  </div>
                </div>
              </div>

              <div className={styles.resultContent}>
                <p className={styles.resultDescription}>{result.description}</p>
                
                <div className={styles.resultDetails}>
                  <div className={styles.strengthsSection}>
                    <h3 className={styles.detailTitle}>
                      <span className={styles.titleIcon}>✨</span>
                      Kekuatan Bersama
                    </h3>
                    <ul className={styles.detailList}>
                      {result.strengths.map((strength, index) => (
                        <li key={index}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.challengesSection}>
                    <h3 className={styles.detailTitle}>
                      <span className={styles.titleIcon}>🌱</span>
                      Ruang Tumbuh
                    </h3>
                    <ul className={styles.detailList}>
                      {result.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.adviceSection}>
                  <h3 className={styles.adviceTitle}>
                    <span className={styles.titleIcon}>💫</span>
                    Pesan Kosmik
                  </h3>
                  <p className={styles.adviceText}>{result.advice}</p>
                </div>
              </div>

              <div className={styles.resultFooter}>
                <div className={styles.shareSection}>
                  <span>Bagikan energi ini:</span>
                  <div className={styles.shareButtons}>
                    <button className={styles.shareButton}>📱</button>
                    <button className={styles.shareButton}>💬</button>
                    <button className={styles.shareButton}>📧</button>
                  </div>
                </div>
                <button className={styles.saveButton} onClick={() => window.print()}>
                  Simpan Hasil
                </button>
              </div>
            </div>
            
            <div className={styles.reflectionNote}>
              <p>
                <strong>Ingat:</strong> Kompatibilitas zodiak adalah panduan, bukan takdir. 
                Setiap hubungan adalah perjalanan unik yang ditulis bersama melalui pilihan, 
                komunikasi, dan saling pengertian.
              </p>
            </div>
          </section>
        )}

        <footer className={styles.footer}>
          <p>© 2023 Astro Oracles • Compatibility Checker</p>
          <p>
            Fitur ini dirancang untuk refleksi dan eksplorasi diri. 
            Selalu percayai intuisi Anda di atas segalanya.
          </p>
        </footer>
      </div>
    </div>
  );
}