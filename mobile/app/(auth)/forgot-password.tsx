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
  
