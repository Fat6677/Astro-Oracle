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
import CosmicBackground from '../../components/Auth/CosmicBackground';
import LoginHeader from '../../components/Auth/LoginHeader';
import AuthCard from '../../components/Auth/AuthCard';
import LoginForm from '../../components/Auth/LoginForm';
import SocialLogin from '../../components/Auth/SocialLogin';
import CosmicButton from '../../components/Common/CosmicButton.tsx';
import { CosmicColors } from '../../constants/CosmicColors';

export default function LoginScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (data: {
    username: string;
    password: string;
    rememberMe: boolean;
  }) => {
    console.log('Login data:', data);
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Navigate to home after successful login
      router.replace('/(tabs)');
    }, 1500);
  };

  const handleSocialLogin = (platform: string) => {
    console.log(`Social login with: ${platform}`);
    alert(`Connecting with ${platform}...`);
  };

  const handleForgotPassword = () => {
    console.log('Forgot password pressed');
    router.push('/(auth)/forgot-password'); // Jika ada halaman forgot password
  };

  const handleSignUp = () => {
    console.log('Sign up pressed');
    router.push('/(auth)/register'); // Navigate to register
  };

  return (
    <CosmicBackground showStars={true}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <LoginHeader />
            
            <AuthCard>
              <LoginForm
                onSubmit={handleLogin}
                onForgotPassword={handleForgotPassword}
              />
              
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
              >
                LOG IN
              </CosmicButton>
              
              <SocialLogin onSocialLogin={handleSocialLogin} />
              
              <View style={styles.signupContainer}>
                <Text style={styles.signupText}>
                  Don't have a cosmic account?{' '}
                </Text>
                <TouchableOpacity onPress={handleSignUp}>
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: CosmicColors.darker,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(108, 99, 255, 0.2)',
    width: '100%',
  },
  signupText: {
    color: CosmicColors.light,
    fontSize: 14,
  },
  signupLink: {
    color: CosmicColors.accent,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});