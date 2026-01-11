import React, { ReactNode } from 'react';
import { Surface, StyleSheet, ViewStyle } from 'react-native';
import { CosmicColors } from '../../constants/CosmicColors';

interface AuthCardProps {
  children: ReactNode;
  style?: ViewStyle;
}

const AuthCard: React.FC<AuthCardProps> = ({ children, style }) => {
  return (
    <Surface style={[styles.card, style]} elevation={4}>
      {children}
    </Surface>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(26, 26, 46, 0.9)',
    borderRadius: 20,
    padding: 25,
    borderWidth: 1,
    borderColor: 'rgba(108, 99, 255, 0.3)',
    shadowColor: CosmicColors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 8,
    width: '100%',
  },
});

export default AuthCard;