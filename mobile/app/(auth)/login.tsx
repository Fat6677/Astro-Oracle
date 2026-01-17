import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useRouter } from 'expo-router';

// Components
import CosmicBackground from '../../components/Auth/CosmicBackground';
import LoginHeader from '../../components/Auth/LoginHeader';
import AuthCard from '../../components/Auth/AuthCard';
import LoginForm from '../../components/Auth/LoginForm';
import SocialLogin from '../../components/Auth/SocialLogin';
import CosmicButton from '../../components/Common/CosmicButton';

// Styles
import { CosmicColors } from '../../constants/CosmicColors';
import { loginScreenStyles as styles } from '../(auth)/style/LoginScreen.styles';

// Types
interface LoginFormData {
  username: string;
  password: string;
  rememberMe: boolean;
}


export default function LoginScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  /**
   * Menangani proses login
   * @param {LoginFormData} data - Data form login
   */
  const handleLogin = (data: LoginFormData) => {
    console.log('Login data:', data);
    setLoading(true);
    
    // Simulasi API call
    setTimeout(() => {
      setLoading(false);
      // Navigate ke home setelah login berhasil
      router.replace('/(tabs)');
    }, 1500);
  };

  /**
   * Menangani login dengan platform sosial
   * @param {string} platform - Nama platform sosial
   */
  const handleSocialLogin = (platform: string) => {
    console.log(`Social login with: ${platform}`);
    alert(`Connecting with ${platform}...`);
  };

  /**
   * Navigasi ke halaman lupa password
   */
  const handleForgotPassword = () => {
    console.log('Forgot password pressed');
    router.push('../(auth)/forgot-password');
  };

  /**
   * Navigasi ke halaman registrasi
   */
  const handleSignUp = () => {
    console.log('Sign up pressed');
    router.push('../(auth)/register');
  };

  return (
    <CosmicBackground showStars={true}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.content}>
            {/* Header dengan logo dan judul */}
            <LoginHeader />
            
            {/* Kartu utama untuk form login */}
            <AuthCard>
              {/* Form input username dan password */}
              <LoginForm
                onSubmit={handleLogin}
                onForgotPassword={handleForgotPassword}
              />
              
              {/* Tombol login utama */}
              <CosmicButton
                onPress={() => handleLogin({
                  username: 'test',
                  password: 'test',
                  rememberMe: false,
                })}
                loading={loading}
                disabled={loading}
                cosmicVariant="primary"
                glowEffect={true}
                testID="login-button"
              >
                LOG IN
              </CosmicButton>
              
              {/* Opsi login dengan platform sosial */}
              <SocialLogin onSocialLogin={handleSocialLogin} />
              
              {/* Link untuk registrasi akun baru */}
              <View style={styles.signupContainer}>
                <Text style={styles.signupText}>
                  Dont have a cosmic account?{' '}
                </Text>
                <TouchableOpacity 
                  onPress={handleSignUp}
                  accessible={true}
                  accessibilityLabel="Sign up now"
                  accessibilityHint="Navigate to registration page"
                >
                  <Text style={styles.signupLink}>Sign up now</Text>
                </TouchableOpacity>
              </View>
            </AuthCard>
          </View>
        </ScrollView>
      </SafeAreaView>
    </CosmicBackground>
  );
}