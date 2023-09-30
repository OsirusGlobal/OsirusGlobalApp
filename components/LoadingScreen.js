import Reimport React, { useEffect } from 'react';
import { View, ActivityIndicator, Image, StyleSheet } from 'react-native';
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
            {/* Logo */}
            <Image
                source={require('../assets/white_ls.png')} // Replace with your logo path
                style={styles.logo}
            />
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
    logo: {
        marginBottom: 20, // Add spacing between logo and loading spinner
    },
});

export default LoadingScreen;
