import React, { useEffect, useState } from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventRegister } from 'react-native-event-listeners'
import theme from './theme/Theme';
import themeContext from './theme/ThemeContext';
import Home from './src/Home';
import SignIn from './src/SignIn';
import Register from './src/Register';
import RecoveryEnterEmail from './src/RecoveryEnterMail';
import RecoveryEnterCode from './src/RecoveryEnterCode';
import RecoveryEnterNewPassword from './src/RecoveryEnterNewPassword'
import Social from './src/Social';
import Play from './src/Play';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Profile from './src/Profile';
import { AntDesign } from '@expo/vector-icons';
import PlayButton from './src/components/PlayButton';
import ProfileButton from './src/components/ProfileButton';
import SocialButton from './src/components/SocialButton';

const Tab = createBottomTabNavigator();
function BottomTabs() {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabel: () => null,
                tabBarStyle: {
                    elevation: 0,
                    borderTopWidth: 0,
                    borderRadius: 15,
                    backgroundColor: theme.light.secondaryColor,
                },
            }}
        >

            <Tab.Screen name="Social" component={Social} options={{
                headerShown: false,
                tabBarLabelStyle: { color: "black" },
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <SocialButton />
                    ) : (
                        <AntDesign name="staro" size={24} color="black" />
                    )
            }} />

            <Tab.Screen name="PlayTab" component={Play} options={{
                headerShown: false,
                tabBarLabelStyle: { color: "black" },
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <PlayButton />
                    ) : (
                        <Ionicons name="game-controller-outline" size={24} color="black" />
                    )
            }} />

            <Tab.Screen name="ProfileTab" component={Profile} options={{
                headerShown: false,
                tabBarLabelStyle: { color: "black" },
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <ProfileButton />
                    ) : (
                        <FontAwesome name="user-circle-o" size={24} color="black" />
                    )
            }} />
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();
function Navigation() {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
            setDarkMode(data);
        })
        return () => {
            EventRegister.removeAllListeners(listener)
        }
    }, [darkMode])

    return (
        <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
            <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                    <Stack.Screen name="RecoveryEnterMail" component={RecoveryEnterEmail} options={{ headerShown: false }} />
                    <Stack.Screen name="RecoveryEnterCode" component={RecoveryEnterCode} options={{ headerShown: false }} />
                    <Stack.Screen name="RecoveryEnterNewPassword" component={RecoveryEnterNewPassword} options={{ headerShown: false }} />
                    <Stack.Screen name="Play" component={BottomTabs} options={{ headerShown: false }} />
                    <Stack.Screen name="Profile" component={BottomTabs} options={{ headerShown: false }} />
                    <Stack.Screen name="Social" component={BottomTabs} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </themeContext.Provider>

    );
}

export default Navigation;
