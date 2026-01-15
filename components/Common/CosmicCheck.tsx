import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { CosmicColors } from '../../constants/CosmicColors';

interface CosmicCheckboxProps {
  label: string;
  checked: boolean;
  onPress: () => void;
  color?: string;
}

const CosmicCheckbox: React.FC<CosmicCheckboxProps> = ({
  label,
  checked,
  onPress,
  color = CosmicColors.primary,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.checkbox, { borderColor: color }]}>
        {checked && (
          <View style={[styles.checkmark, { backgroundColor: color }]} />
        )}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    width: 12,
    height: 12,
    borderRadius: 2,
  },
  label: {
    color: CosmicColors.light,
    fontSize: 14,
  },
});

export default CosmicCheckbox;