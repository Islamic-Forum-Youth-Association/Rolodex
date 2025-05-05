import { Image } from 'expo-image';
import { Platform, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { supabase } from 'supabase'; // Automatically resolved from packages/supabase
import Constants from 'expo-constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const { supabaseUrl, supabaseAnonKey } = Constants.expoConfig?.extra || {};

export default function HomeScreen() {
  return (
     <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
              </ScrollView>
              </SafeAreaView>
              </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
