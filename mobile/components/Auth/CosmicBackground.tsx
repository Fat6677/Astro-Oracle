import React, { ReactNode } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';
import { CosmicColors } from '../../constants/CosmicColors';

interface CosmicBackgroundProps {
  children: ReactNode;
  backgroundImage?: ImageSourcePropType;
  showStars?: boolean;
}

const CosmicBackground: React.FC<CosmicBackgroundProps> = ({
  children,
  backgroundImage,
  showStars = true,
}) => {
  const renderStars = () => {
    if (!showStars) return null;

    return (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((i) => (
          <View
            key={i}
            style={[
              styles.star,
              {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.3,
              },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: CosmicColors.darker }]}>
      <View style={styles.gradientOverlay} />
      {renderStars()}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: CosmicColors.darker,
  },
  starsContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  star: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 50,
  },
});

export default CosmicBackground;