import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


// Components
import CosmicBackground from '../../components/Auth/CosmicBackground';
import AuthCard from '../../components/Auth/AuthCard';
import CosmicButton from '../../components/Common/CosmicButton';


// Styles
import { forgotPasswordStyles as styles } from '../(auth)/style/forgot-passowrd.styles';
import { CosmicColors } from '../../constants/CosmicColors';



export default function ForgotPasswordScreen() {
  const router = useRouter();
  
  // State untuk form input
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  
  /**
   * Validasi format email
   * @param {string} email - Email yang akan divalidasi
   * @returns {boolean} - True jika email valid
   */
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  /**
   * Handle proses pengiriman reset password
   */
  const handleResetPassword = () => {
    // Validasi input
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }
    
    // Set loading state
    setIsLoading(true);
    
    // Simulasi API call untuk reset password
    setTimeout(() => {
      setIsLoading(false);
      setEmailSent(true);
      
      // Tampilkan success message
      Alert.alert(
        'Success',
        `Reset password instructions have been sent to ${email}`,
        [
          {
            text: 'OK',
            onPress: () => {
              // Kembali ke login screen setelah beberapa detik
              setTimeout(() => {
                router.back();
              }, 2000);
            }
          }
        ]
      );
      
      // Log untuk debugging
      console.log(`Reset password request for: ${email}`);
    }, 1500);
  };
  
  /**
   * Navigasi kembali ke halaman login
   */
  const handleBackToLogin = () => {
    router.back();
  };
  
  /**
   * Navigasi ke halaman registrasi
   */
  const handleGoToRegister = () => {
    router.push('/(auth)/register');
  };
  
  return (
    <CosmicBackground 
      showStars={true}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.content}>
            
            {/* Back Button */}
            <TouchableOpacity 
              style={styles.backButton}
              onPress={handleBackToLogin}
              activeOpacity={0.7}
            >
              <Ionicons name="arrow-back" size={24} color={CosmicColors.light} />
              <Text style={styles.backButtonText}>Back to Login</Text>
            </TouchableOpacity>
            
            {/* Header Section */}
            <View style={styles.headerContainer}>
              <View style={styles.iconContainer}>
                <Ionicons name="key-outline" size={40} color={CosmicColors.accent} />
                <View style={styles.iconGlow} />
              </View>
              
              <Text style={styles.title}>Forgot Password</Text>
              <Text style={styles.subtitle}>
                Enter your email address and well send you instructions to reset your password
              </Text>
            </View>
            
            {/* Main Card */}
            <AuthCard style={styles.authCard}>
              
              {emailSent ? (
                // Success State
                <View style={styles.successContainer}>
                  <View style={styles.successIconContainer}>
                    <Ionicons name="checkmark-circle" size={60} color={CosmicColors.facebook} />
                    <View style={styles.successGlow} />
                  </View>
                  
                  <Text style={styles.successTitle}>Email Sent!</Text>
                  <Text style={styles.successMessage}>
                    Weve sent password reset instructions to:
                  </Text>
                  <Text style={styles.successEmail}>{email}</Text>
                  
                  <Text style={styles.successInstruction}>
                    Please check your inbox and follow the instructions to reset your password.
                  </Text>
                  
                  <View style={styles.successActions}>
                    <CosmicButton
                      onPress={handleBackToLogin}
                      cosmicVariant="secondary"
                      glowEffect={false}
                      style={styles.backButtonSuccess}
                    >
                      Back to Login
                    </CosmicButton>
                    
                    <Text style={styles.resendText}>
                      Didnt receive the email?{' '}
                      <Text 
                        style={styles.resendLink}
                        onPress={() => {
                          setEmailSent(false);
                          handleResetPassword();
                        }}
                      >
                        Resend
                      </Text>
                    </Text>
                  </View>
                </View>
              ) : (
                // Form State
                <>
                  {/* Email Input */}
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email Address</Text>
                    <View style={styles.inputWrapper}>
                      <Ionicons 
                        name="mail-outline" 
                        size={20} 
                        color={CosmicColors.light} 
                        style={styles.inputIcon}
                      />
                      <TextInput
                        style={styles.textInput}
                        placeholder="Enter your email"
                        placeholderTextColor={CosmicColors.light + '80'}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        editable={!isLoading}
                        selectionColor={CosmicColors.accent}
                      />
                      {email.length > 0 && (
                        <TouchableOpacity 
                          onPress={() => setEmail('')}
                          style={styles.clearButton}
                        >
                          <Ionicons name="close-circle" size={20} color={CosmicColors.light} />
                        </TouchableOpacity>
                      )}
                    </View>
                    
                    {/* Validation Hint */}
                    {email.length > 0 && !validateEmail(email) && (
                      <Text style={styles.validationText}>
                        Please enter a valid email address
                      </Text>
                    )}
                  </View>
                  
                  {/* Submit Button */}
                  <CosmicButton
                    onPress={handleResetPassword}
                    loading={isLoading}
                    disabled={isLoading || !validateEmail(email)}
                    cosmicVariant="primary"
                    glowEffect={true}
                    style={styles.submitButton}
                  >
                    SEND RESET INSTRUCTIONS
                  </CosmicButton>
                  
                  {/* Info Box */}
                  <View style={styles.infoContainer}>
                    <Ionicons name="information-circle" size={20} color={CosmicColors.google} />
                    <Text style={styles.infoText}>
                      Make sure to enter the email address associated with your Cosmic account.
                    </Text>
                  </View>
                </>
              )}
              
              {/* Divider */}
              <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>OR</Text>
                <View style={styles.dividerLine} />
              </View>
              
              {/* Alternative Action */}
              <View style={styles.alternativeContainer}>
                <Text style={styles.alternativeText}>
                  Dont have an account yet?
                </Text>
                <TouchableOpacity 
                  onPress={handleGoToRegister}
                  style={styles.alternativeButton}
                >
                  <Text style={styles.alternativeButtonText}>Create New Account</Text>
                  <Ionicons name="arrow-forward" size={16} color={CosmicColors.accent} />
                </TouchableOpacity>
              </View>
              
            </AuthCard>
            
            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Need help?{' '}
                <Text style={styles.footerLink}>Contact Support</Text>
              </Text>
            </View>
            
          </View>
        </ScrollView>
      </SafeAreaView>
    </CosmicBackground>
  );
}