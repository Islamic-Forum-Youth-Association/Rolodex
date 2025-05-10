import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const { EXPO_PUBLIC_SUPABASE_URL: supabaseUrl, EXPO_PUBLIC_SUPABASE_ANON_KEY: supabaseAnonKey } = Constants.expoConfig?.extra || {};



if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('supabaseUrl and supabaseAnonKey are required.');
}



export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});