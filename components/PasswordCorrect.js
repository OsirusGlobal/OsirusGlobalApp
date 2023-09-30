import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PasswordCorrectPage = ({ navigation }) => {
    useEffect(() => {
        // Redirect to the next screen after a delay (adjust the time as needed)
        setTimeout(() => {
            // Navigate to the next screen here
            // For example: navigation.navigate('HomePage');
        }, 2000); // Adjust the delay time as needed
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/white_ls.png')} style={styles.logo} />
            <Text style={styles.text}>Password Correct</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0b2d4e', // Background color
    },
    logo: {
        width: 100, // Adjust logo size as needed
        height: 100, // Adjust logo size as needed
    },
    text: {
        color: 'white', // Text color
        fontSize: 24, // Adjust text size as needed
        marginTop: 20, // Add spacing between logo and text
    },
});

export default PasswordCorrectPage;
