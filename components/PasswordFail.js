import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PasswordFail = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={require('../assets/white_ls.png')} style={styles.logo} />
            <Text style={styles.text}>Password Incorrect</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.replace('PasswordPage')}
            >
                <Text style={styles.buttonText}>Try Again</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b2d4e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    text: {
        color: 'white',
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#2e77a1',
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default PasswordFail;
