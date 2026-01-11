import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import { CosmicColors } from '../../theme/CosmicColors';

interface SocialPlatform {
  id: string;
  name: string;
  icon: string;
  color: string;
}

interface SocialLoginProps {
  onSocialLogin: (platform: string) => void;
}

const SocialLogin: React.FC<SocialLoginProps> = ({ onSocialLogin }) => {
  const platforms: SocialPlatform[] = [
    { id: 'google', name: 'Google', icon: 'google', color: CosmicColors.google },
    { id: 'facebook', name: 'Facebook', icon: 'facebook', color: CosmicColors.facebook },
    { id: 'twitter', name: 'Twitter', icon: 'twitter', color: CosmicColors.twitter },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect with your celestial profile</Text>
      
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.dividerLine} />
      </View>

      <View style={styles.buttonsContainer}>
        {platforms.map((platform) => (
          <TouchableOpacity
            key={platform.id}
            style={[styles.button, { backgroundColor: platform.color }]}
            onPress={() => onSocialLogin(platform.id)}
            activeOpacity={0.8}
          >
            <IconButton
              icon={platform.icon}
              iconColor="#fff"
              size={24}
              style={styles.icon}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: CosmicColors.light,
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    opacity: 0.9,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(108, 99, 255, 0.3)',
  },
  dividerText: {
    color: CosmicColors.light,
    paddingHorizontal: 15,
    fontSize: 14,
    opacity: 0.7,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  icon: {
    margin: 0,
  },
});

export default SocialLogin;