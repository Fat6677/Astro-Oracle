import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; 
import Header from '../../components/ui/Header';
import { View } from 'react-native';
export default function TabLayout() {
  return (
    <View style={styles.container}>
      <Header />

      <Tabs
        screenOptions={{
          headerShown: false, 
          tabBarStyle: {
            backgroundColor: '#0F172A',
            borderTopColor: '#1E293B',
            height: 60,
            paddingBottom: 10,
          },
          tabBarActiveTintColor: '#8B5CF6',
          tabBarInactiveTintColor: '#94A3B8',
        }}
      ></Tabs>

    <Tabs
      screenOptions={{
        headerShown: false, 
        tabBarStyle: {
          backgroundColor: '#0F172A', 
          borderTopColor: '#1E293B',
          height: 60,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: '#8B5CF6', 
        tabBarInactiveTintColor: '#94A3B8', 
      }}
    >
      <Tabs.Screen
        name="index" 
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="planet-outline" size={size} color={color} />
          ),
        }}
      />
      
    </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
},
});