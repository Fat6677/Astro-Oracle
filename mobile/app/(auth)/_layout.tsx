import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { CosmicColors } from '../../constants/CosmicColors';

export default function AuthLayout() {
  return (
    <>
      <StatusBar 
        style="light" 
        backgroundColor={CosmicColors.darker}
      />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: CosmicColors.darker,
          },
          animation: 'fade',
        }}
      >
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
      </Stack>
    </>
  );
}