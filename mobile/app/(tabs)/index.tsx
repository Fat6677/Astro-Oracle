import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { CosmicColors } from '../../constants/CosmicColors';

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    // Redirect ke login saat pertama kali buka app
    const timer = setTimeout(() => {
      router.replace('../(auth)/login');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: CosmicColors.darker 
    }}>
      <ActivityIndicator size="large" color={CosmicColors.primary} />
    </View>
  );
}