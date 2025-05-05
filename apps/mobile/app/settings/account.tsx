import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccountSettings: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Account Settings</Text>
            {/* Add your account settings components here */}
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

export default AccountSettings;