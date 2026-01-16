import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

export default function ChatAI() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Selamat datang di Portal Kosmik. Saya Astra Oracle. Apa yang ingin kamu ketahui tentang takdirmu hari ini?', sender: 'ai' }
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    // Tambah pesan user
    const userMsg: Message = { id: Date.now().toString(), text: inputText, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Simulasi Jawaban AI (Nantinya bisa diganti dengan API Gemini/OpenAI)
    setTimeout(() => {
      const aiMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        text: 'Bintang-bintang sedang berbaris untukmu. Bisakah kamu beritahu saya tanda zodiakmu?', 
        sender: 'ai' 
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 1000);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <Stack.Screen options={{ title: 'Astra Oracle', headerShown: true, headerTintColor: '#8B5CF6' }} />
      
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.chatList}
        renderItem={({ item }) => (
          <View style={[styles.bubble, item.sender === 'user' ? styles.userBubble : styles.aiBubble]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tanya pada semesta..."
          placeholderTextColor="#94A3B8"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  chatList: { padding: 20, paddingTop: 10 },
  bubble: { padding: 12, borderRadius: 18, marginBottom: 10, maxWidth: '80%' },
  userBubble: { alignSelf: 'flex-end', backgroundColor: '#8B5CF6', borderBottomRightRadius: 2 },
  aiBubble: { alignSelf: 'flex-start', backgroundColor: '#1E293B', borderBottomLeftRadius: 2 },
  messageText: { color: 'white', fontSize: 15 },
  inputContainer: { flexDirection: 'row', padding: 15, backgroundColor: '#1E293B', alignItems: 'center' },
  input: { flex: 1, color: 'white', backgroundColor: '#0F172A', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 25, marginRight: 10 },
  sendButton: { backgroundColor: '#8B5CF6', width: 45, height: 45, borderRadius: 22.5, justifyContent: 'center', alignItems: 'center' }
});