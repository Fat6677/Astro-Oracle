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

const sendMessage = () => {
  if (inputText.trim() === '') return;
  const userMsg: Message = { id: Date.now().toString(), text: inputText, sender: 'user' };
  setMessages(prev => [...prev, userMsg]);
  setInputText('');

  setTimeout(() => {
    const aiMsg: Message = { ... };
    setMessages(prev => [...prev, aiMsg]);
  }, 1000);
};

<FlatList
  data={messages}
  renderItem={({ item }) => (
    <View style={[styles.bubble, item.sender === 'user' ? styles.userBubble : styles.aiBubble]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  )}
/>

<View style={styles.inputContainer}>
  <TextInput ... />
  <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
    <Ionicons name="send" ... />
  </TouchableOpacity>
</View>