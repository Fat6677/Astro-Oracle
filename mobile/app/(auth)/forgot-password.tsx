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
  
