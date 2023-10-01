import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
    const navigation = useNavigation();

    // Simulate loading
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('PasswordPage'); // Redirect to PasswordPage
        }, 3000); // Adjust the delay time as needed
    }, [navigation]);

    return (
        <View style={styles.container}>
            {/* Background Color */}
            <View style={styles.background}>
                {/* Logo */}
                <Image
                    source={require('../assets/white_ls.png')} // Replace with your logo path
                    style={styles.logo}
                />
            </View>
            {/* Activity Indicator (loading spinner) */}
            <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b2d4e', // Background color
    },
    background: {
        backgroundColor: '#0b2d4e', // Background color
    },
    logo: {
        width: 100, // Adjust logo size as needed
        height: 100, // Adjust logo size as needed
    },
});

export default LoadingScreen;
