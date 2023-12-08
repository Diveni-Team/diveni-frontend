import React, { useEffect, useState } from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventRegister } from 'react-native-event-listeners'
import theme from './theme/Theme';
import themeContext from './theme/ThemeContext';
import Home from './src/Home';
import SingIn from './src/SingIn';

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
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
                    <Stack.Screen name="SignIn" component={SingIn} options={{ headerShown: false}}/> 
                </Stack.Navigator>
            </NavigationContainer>
        </themeContext.Provider>
    
    );
}

export default Navigation;
