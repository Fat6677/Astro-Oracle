import React from 'react';
import { Button, ButtonProps } from 'react-native-paper';
import { StyleSheet, ViewStyle } from 'react-native';
import { CosmicColors } from '../../constants/CosmicColors';

interface CosmicButtonProps extends ButtonProps {
  cosmicVariant?: 'primary' | 'secondary' | 'accent';
  glowEffect?: boolean;
}

const CosmicButton: React.FC<CosmicButtonProps> = ({
  cosmicVariant = 'primary',
  glowEffect = true,
  style,
  contentStyle,
  labelStyle,
  ...props
}) => {
  const getVariantColor = () => {
    switch (cosmicVariant) {
      case 'secondary':
        return CosmicColors.secondary;
      case 'accent':
        return CosmicColors.accent;
      default:
        return CosmicColors.primary;
    }
  };

  const buttonStyle = glowEffect
    ? [styles.glowEffect, { shadowColor: getVariantColor() }, style]
    : style;

  return (
    <Button
      mode="contained"
      style={buttonStyle}
      contentStyle={[styles.content, contentStyle]}
      labelStyle={[styles.label, labelStyle]}
      theme={{ colors: { primary: getVariantColor() } }}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  glowEffect: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  content: {
    paddingVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});

export default CosmicButton;