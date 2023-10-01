import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './components/LoadingScreen';
import PasswordPage from './components/PasswordPage';
import PasswordCorrect from './components/PasswordCorrect';
import PasswordFail from './components/PasswordFail';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoadingScreen">
                <Stack.Screen
                    name="LoadingScreen"
                    component={LoadingScreen}
                    options={{ headerShown: false }} // Hide the header for this screen
                />
                <Stack.Screen
                    name="PasswordPage"
                    component={PasswordPage}
                    options={{ headerShown: false }} // Hide the header for this screen
                />
                <Stack.Screen
                    name="PasswordCorrect"
                    component={PasswordCorrect}
                    options={{ headerShown: false }} // Hide the header for this screen
                />
                <Stack.Screen
                    name="PasswordFail"
                    component={PasswordFail}
                    options={{ headerShown: false }} // Hide the header for this screen
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
