import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';
import warnOnce from './warnOnce'; // Import the warnOnce utility

const LoadingScreen = () => {
    const navigation = useNavigation();

    // Simulate loading
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('PasswordPage'); // Redirect to PasswordPage
        }, 3000); // Adjust the delay time as needed
    }, [navigation]);

    // Deprecation warnings
    warnOnce(true, 'ActivityIndicator is deprecated. Use ActivityIndicator from react-native-paper.');

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
            <ActivityIndicator animating={true} size="large" color="#FFFFFF" />
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
