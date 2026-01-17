import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { CosmicTheme } from '../constants/CosmicTheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CosmicColors } from '../constants/CosmicColors';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={CosmicTheme}>
        <StatusBar 
          style="light" 
          backgroundColor={CosmicColors.darker}
        />
        <Stack screenOptions={{ headerShown: false }}>
          {/* Index screen yang kosong akan redirect ke login */}
          <Stack.Screen name="index" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}