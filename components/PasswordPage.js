import React, { useEffect, useState } from 'react';
import { View, Image, Pressable, Animated, Easing, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import warnOnce from './warnOnce'; // Import the warnOnce utility

// Define the correct password icons
const correctPasswordIcons = ['icons03', 'icons06', 'icons07', 'icons03'];

// Function to generate random icons
function generateRandomIcons() {
    const shuffledIcons = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
    shuffleArray(shuffledIcons);
    return shuffledIcons;
}

// Shuffle an array in-place
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const PasswordPage = ({ styleMode, tintColour, resizeMode, boxShadow }) => {
    const navigation = useNavigation();
    const [animation] = useState(new Animated.Value(0));
    const [icons, setIcons] = useState([]);
    const [selectedIcons, setSelectedIcons] = useState([]);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

    useEffect(() => {
        // Slide up animation
        Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();

        // Initialize icons when showing the password screen
        setIcons(generateRandomIcons());

        // Use warnOnce for your warnings
        warnOnce(true, 'This is a warning message about ActivityIndicator.');
        warnOnce(true, 'This is a warning message about "transform" style.');
        warnOnce(true, 'This is a warning message about accessibilityLabel.');
        warnOnce(true, 'This is a warning message about focusable.');
        warnOnce(true, 'This is a warning message about TouchableOpacity.');
    }, []);

    useEffect(() => {
        // Shuffle icons every 4 seconds
        const shuffleInterval = setInterval(() => {
            setIcons(generateRandomIcons());
        }, 4000);

        return () => clearInterval(shuffleInterval);
    }, []);

    function handleIconPress(index) {
        if (selectedIcons.length < 4) {
            // Only allow icon selection if less than 4 icons are selected
            setSelectedIcons([...selectedIcons, index]);
            if (correctPasswordIcons.includes(icons[index])) {
                // Mark the correct password icon and prevent shuffling
                setIcons((prevIcons) => {
                    const newIcons = [...prevIcons];
                    newIcons[index] = 'correct'; // You can use any value to mark it as correct
                    return newIcons;
                });
            }
        }
    }

    useEffect(() => {
        // Check if 4 icons are selected
        if (selectedIcons.length === 4) {
            const correctIcons = correctPasswordIcons.every((icon) =>
                selectedIcons.includes(icons.indexOf(icon))
            );
            setIsPasswordCorrect(correctIcons);
            if (correctIcons) {
                // Redirect to PasswordCorrect.js
                setTimeout(() => {
                    navigation.navigate('PasswordCorrect');
                }, 2000); // Adjust the delay time as needed
            } else {
                // Redirect to PasswordFail.js
                setTimeout(() => {
                    navigation.navigate('PasswordFail');
                }, 2000); // Adjust the delay time as needed
            }
        }
    }, [selectedIcons, navigation]);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: styleMode === 'dark' ? '#0b2d4e' : 'white', // Background color
            ...boxShadow,
        },
        logoContainer: {
            marginTop: 20, // Add spacing between logo and password screen
        },
        logo: {
            width: 100, // Adjust logo size as needed
            height: 100, // Adjust logo size as needed
            tintColor: tintColour, // Apply the tint color to the logo
            resizeMode: resizeMode, // Set the resizeMode
            transform: 'scaleX(2) rotateX(15deg)', // Apply transform using space-separated string functions
        },
        logoTop: {
            marginBottom: 20, // Add spacing between logo and password screen
        },
        passwordScreen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        boxContainer: {
            flexDirection: 'row',
        },
        box: {
            width: 40,
            height: 40,
            margin: 5,
            borderWidth: 1,
            borderColor: styleMode === 'dark' ? '#0b2d4e' : 'gray',
        },
        selectedBox: {
            backgroundColor: styleMode === 'dark' ? '#FFFFFF' : 'blue',
        },
        correctBox: {
            backgroundColor: styleMode === 'dark' ? 'green' : 'lightgreen', // Change to your desired correct password box color
        },
        wrongBox: {
            backgroundColor: styleMode === 'dark' ? 'red' : 'pink', // Change to your desired wrong password box color
        },
        iconsContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: 20, // Add spacing between boxes and icons
        },
        icon: {
            width: 80,
            height: 80,
            margin: 5,
            borderWidth: 1,
            borderColor: styleMode === 'dark' ? '#FFFFFF' : 'gray',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'auto', // Use style.pointerEvents
        },
        iconImage: {
            width: 60, // Adjust icon image size as needed
            height: 60, // Adjust icon image size as needed
        },
        pressedIcon: {
            borderColor: styleMode === 'dark' ? 'blue' : 'lightblue', // Change to your desired pressed icon border color
        },
        correctIcon: {
            borderColor: styleMode === 'dark' ? 'green' : 'lightgreen', // Change to your desired correct icon border color
        },
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.logoContainer, styles.logoTop]}>
                <Image
                    source={require('../assets/white_ls.png')}
                    style={styles.logo}
                    tintColor={tintColour} // Apply the tint color as a prop
                    resizeMode={resizeMode} // Set the resizeMode as a prop
                    aria-label="Password Logo"
                />
            </Animated.View>

            <View style={styles.passwordScreen}>
                <View style={styles.boxContainer}>
                    {[0, 1, 2, 3].map((index) => (
                        <View
                            key={index}
                            style={[
                                styles.box,
                                selectedIcons.length > index
                                    ? styles.selectedBox
                                    : isPasswordCorrect
                                        ? styles.correctBox
                                        : styles.wrongBox,
                            ]}
                        />
                    ))}
                </View>

                <View style={styles.iconsContainer}>
                    {icons.map((iconName, index) => (
                        <Pressable
                            key={index}
                            style={styles.icon}
                            onPress={() => handleIconPress(index)}
                            role="button"
                            pointerEvents="auto"
                        >
                            {({ pressed }) => (
                                <Image
                                    source={require(`../assets/icons/icons${iconName}.png`)}
                                    style={[
                                        styles.iconImage,
                                        pressed && styles.pressedIcon,
                                        iconName === 'correct' && styles.correctIcon,
                                    ]}
                                    tintColor={tintColour} // Apply the tint color as a prop
                                    resizeMode={resizeMode} // Set the resizeMode as a prop
                                    aria-label={`Icon ${index}`}
                                />
                            )}
                        </Pressable>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default PasswordPage;
