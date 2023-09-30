import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from '../components/LoadingScreen';
import PasswordPage from '../components/PasswordPage';
import PasswordCorrect from '../components/PasswordCorrect';
import PasswordFail from '../components/PasswordFail';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoadingScreen" headerMode="none">
                <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
                <Stack.Screen name="PasswordPage" component={PasswordPage} />
                <Stack.Screen name="PasswordCorrect" component={PasswordCorrect} />
                <Stack.Screen name="PasswordFail" component={PasswordFail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
