import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

const [messages, setMessages] = useState<Message[]>([
  { id: '1', text: 'Selamat datang di Portal Kosmik. Saya Astra Oracle...', sender: 'ai' }
]);
const [inputText, setInputText] = useState('');