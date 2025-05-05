import { Image } from 'expo-image';
import { Platform, SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for icons

export default function TabTwoScreen() {
  const handleRoute = (route: string) => {
    switch (route) {
      case 'account':
        router.push({ pathname: '/settings/account', params: { title: 'Account Settings' } });
        break;

      case 'privacy':
        router.push({ pathname: '/settings/privacy', params: { title: 'Privacy Settings' } });
        break;

      case 'profile':
        router.push({ pathname: '/settings/profile', params: { title: 'Profile' } });
        break;

      default:
        console.error('[ERROR] invalid route!');
        break;
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {/* Profile Picture */}
          <ThemedView style={styles.profileContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }} // Replace with actual profile picture URL
              style={styles.profileImage}
            />
            <ThemedText type="title">Ammar Hussein</ThemedText>
          </ThemedView>

          {/* Search Bar */}
          <ThemedView style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#808080" style={styles.searchIcon} />
            <TextInput
              placeholder="Search settings..."
              style={styles.searchInput}
              placeholderTextColor="#808080"
            />
          </ThemedView>

          {/* Settings Options */}
          <TouchableOpacity style={styles.settingOptions} onPress={() => handleRoute('profile')}>
            <Ionicons name="person-circle-outline" size={24} color="#007BFF" style={styles.optionIcon} />
            <ThemedText>Profile</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingOptions} onPress={() => handleRoute('account')}>
            <Ionicons name="settings-outline" size={24} color="#007BFF" style={styles.optionIcon} />
            <ThemedText>Account Settings</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingOptions} onPress={() => handleRoute('privacy')}>
            <Ionicons name="lock-closed-outline" size={24} color="#007BFF" style={styles.optionIcon} />
            <ThemedText>Privacy Settings</ThemedText>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light gray background for a clean look
    paddingHorizontal: 16, // Add consistent horizontal padding
    paddingTop: Platform.OS === 'ios' ? 20 : 10, // Add some padding at the top for iOS
  },
  scrollView: {
    flexGrow: 1, // Ensure the ScrollView takes up all available space
    paddingVertical: 16, // Add vertical padding for spacing
  },
  profileContainer: {
    alignItems: 'center', // Center the profile picture and name
    marginBottom: 20, // Add spacing below the profile section
  },
  profileImage: {
    width: 100, // Profile picture size
    height: 100,
    borderRadius: 50, // Make it circular
    marginBottom: 8, // Add spacing below the image
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20, // Add spacing below the search bar
    shadowColor: '#000', // Add subtle shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Shadow for Android
  },
  searchIcon: {
    marginRight: 8, // Add spacing between the icon and input
  },
  searchInput: {
    flex: 1, // Take up remaining space
    fontSize: 16,
    color: '#333333',
  },
  titleContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center', // Align title text vertically
    justifyContent: 'space-between', // Space out elements if needed
    marginBottom: 16, // Add spacing below the title
  },
  settingOptions: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center', // Center items vertically
    backgroundColor: '#FFFFFF', // White background for contrast
    borderRadius: 12, // Rounded corners for a modern look
    padding: 16, // Add padding inside the options container
    marginBottom: 12, // Add spacing between options
    marginHorizontal: 10,
    shadowColor: '#000', // Add subtle shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Shadow for Android
  },
  optionIcon: {
    marginRight: 12, // Add spacing between the icon and text
  },
});