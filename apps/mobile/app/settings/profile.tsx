import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
// import { getCurrentUser } from '../../supabase/auth';
// import { fetchPermissions } from '../../supabase/permissions';
const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const loadProfile = async () => {
  //     try {
  //       const userData = await getCurrentUser();
  //       setUser(userData.user);

  //       if (userData.user) {
  //         const userPermissions = await fetchPermissions(userData.user.id);
  //         setPermissions(userPermissions);
  //       }
  //     } catch (error) {
  //       console.error('Error loading profile:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadProfile();
  // }, []);

  // if (loading) {
  //   return <ActivityIndicator size="large" color="#007BFF" />;
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Name: 
      {//user?.email
      }
      </Text>
      <Text>Permissions:</Text>
      {/* {permissions.map((perm) => (
        // <Text key={
        // //  perm.id
        // }>{
        //  // perm.permission
        //   }</Text>
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default ProfileScreen;