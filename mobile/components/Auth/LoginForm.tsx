import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import CosmicInput from '../Common/CosmicInput';
import CosmicCheckbox from '../Common/CosmicCheck';
import { CosmicColors } from '../../constants/CosmicColors';

interface LoginFormProps {
  onSubmit: (data: { username: string; password: string; rememberMe: boolean }) => void;
  onForgotPassword: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, onForgotPassword }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleSubmit = () => {
    onSubmit({ username, password, rememberMe });
  };

  return (
    <View style={styles.container}>
      <CosmicInput
        label="Username"
        placeholder="Enter your cosmic name"
        value={username}
        onChangeText={setUsername}
        leftIcon="account"
        cosmicVariant="primary"
      />

      <CosmicInput
        label="Password"
        placeholder="••••••••"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={secureTextEntry}
        leftIcon="lock"
        rightIcon={secureTextEntry ? 'eye-off' : 'eye'}
        onRightIconPress={() => setSecureTextEntry(!secureTextEntry)}
        cosmicVariant="secondary"
      />

      <View style={styles.actionsContainer}>
        <CosmicCheckbox
          label="Remember me"
          checked={rememberMe}
          onPress={() => setRememberMe(!rememberMe)}
        />
        
        <TouchableOpacity onPress={onForgotPassword}>
          <Text style={styles.forgotText}>Forget password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  forgotText: {
    color: CosmicColors.secondary,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginForm;