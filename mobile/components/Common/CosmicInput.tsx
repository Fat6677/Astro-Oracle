import React from 'react';
import {
  TextInput,
  TextInputProps,
  HelperText,
} from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
import { CosmicColors } from '../../constants/CosmicColors';

interface CosmicInputProps extends TextInputProps {
  label: string;
  cosmicVariant?: 'primary' | 'secondary';
  errorMessage?: string;
  leftIcon?: string;
  rightIcon?: string;
}

const CosmicInput: React.FC<CosmicInputProps> = ({
  label,
  cosmicVariant = 'primary',
  errorMessage,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const getVariantColor = () => {
    return cosmicVariant === 'secondary'
      ? CosmicColors.secondary
      : CosmicColors.primary;
  };

  return (
    <View style={styles.container}>
        <Text style={[styles.label, { color: getVariantColor() }]}>
        {label}
      </Text>
      <TextInput
        mode="outlined"
        style={[styles.input, props.style]}
        theme={{
          colors: {
            primary: getVariantColor(),
            background: CosmicColors.dark,
            placeholder: CosmicColors.light + '80',
            text: '#fff',
          },
        }}
        outlineColor={getVariantColor() + '50'}
        activeOutlineColor={getVariantColor()}
        left={
          leftIcon && (
            <TextInput.Icon
              icon={leftIcon}
              color={getVariantColor()}
              size={24}
            />
          )
        }
        right={rightIcon && <TextInput.Icon icon={rightIcon} />}
        {...props}
      />
      {errorMessage && (
        <HelperText type="error" visible={!!errorMessage}>
          {errorMessage}
        </HelperText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '500',
    letterSpacing: 1,
  },
  input: {
    backgroundColor: 'rgba(15, 15, 27, 0.7)',
  },
});

export default CosmicInput;