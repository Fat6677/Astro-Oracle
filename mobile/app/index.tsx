import { useEffect } from 'react';
import { Redirect } from 'expo-router';

export default function Index() {
  useEffect(() => {
    console.log('App started, redirecting to login...');
  }, []);
  
  // Langsung redirect ke halaman login
  return <Redirect href="/(auth)/login" />;
}