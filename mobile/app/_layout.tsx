import { useEffect, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { CosmicTheme } from '../constants/CosmicTheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CosmicColors } from '../constants/CosmicColors';
import { View, ActivityIndicator } from 'react-native';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const initializeApp = () => {
    // Simulasi loading splash screen
    setTimeout(() => {
      setIsLoading(false);
      
      // langsung ke halaman login
      router.replace('/(auth)/login');
    }, 1); // 1.5 detik untuk efek splash screen
  };

  useEffect(() => {
    initializeApp();
  }, []);

  if (isLoading) {
    // Tampilan splash screen atau loading screen
    return (
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: CosmicColors.darker }}>
        <View style={{ 
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor: CosmicColors.darker 
        }}>
          <ActivityIndicator size="large" color={CosmicColors.accent} />
        </View>
      </GestureHandlerRootView>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={CosmicTheme}>
        <StatusBar 
          style="light" 
          backgroundColor={CosmicColors.darker}
        />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen 
            name="(auth)" 
            options={{ 
              animation: 'fade',
              gestureEnabled: false 
            }}
          />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}