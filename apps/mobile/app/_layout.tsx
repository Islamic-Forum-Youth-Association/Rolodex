import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="settings/account"
          options={{
            title: 'Account Settings', // Title for the screen
            headerBackTitle: 'Settings', // Back button label
          }}
        />
        <Stack.Screen
          name="settings/privacy"
          options={{
            title: 'Privacy Settings', // Title for the screen
            headerBackTitle: 'Settings', // Back button label
          }}
        />

        <Stack.Screen
                name="profile"
                options={{
                  title: 'Profile',
                  headerBackTitle: 'Settings', // Back button label
                }}
              />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
