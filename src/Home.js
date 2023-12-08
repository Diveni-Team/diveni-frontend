import React, { useState, useContext } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Switch } from "react-native";
import { EventRegister } from 'react-native-event-listeners'
import { useFonts } from 'expo-font';
import { useNavigation } from "@react-navigation/native";
import styles from '../styles/Styles';
import themeContext from "../theme/ThemeContext";

function Home() {
    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false);
    const [fontsLoaded] = useFonts({
        'SpaceGrotesk-Bold': require('../assets/fonts/SpaceGrotesk-Bold.ttf'),
        'SpaceGrotesk-Medium': require('../assets/fonts/SpaceGrotesk-Medium.ttf'),
        'SpaceGrotesk-Regular': require('../assets/fonts/SpaceGrotesk-Regular.ttf'),
        'SpaceGrotesk-SemiBold': require('../assets/fonts/SpaceGrotesk-SemiBold.ttf'),
        'SuezOne-Regular': require('../assets/fonts/SuezOne-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const navigation = useNavigation();

    const handleNavigationSingIn = () => {
        navigation.navigate('SignIn');
    }

    return (
        <SafeAreaView style={[styles.safeAreaView, {backgroundColor:theme.backgroundColor}]}>
            <Switch
                style={{
                    position:"relative",
                    alignSelf:"flex-end",
                    margin: 10,
                }}
                value={darkMode}
                onValueChange={(value) => {
                    setDarkMode(value);
                    EventRegister.emit('ChangeTheme', value)
                }}
            />
            <Text style={[styles.titleText, { color:theme.color }]}>Diveni</Text>
            <View style={{ flex: 1, display: "flex", marginTop: 150, alignItems: "center" }}>
                <TouchableOpacity style={[styles.mainTouchableOpacityLight, { backgroundColor:theme.primaryColor }]} onPress={handleNavigationSingIn}>
                    <Text style={[styles.mainTextOfTouchableOpacityLight, { color:theme.color }]}>
                         Sign In
                    </Text>
                </TouchableOpacity>
                <View style={{ margin: 10 }} />
                <TouchableOpacity style={[styles.mainTouchableOpacityLight, { backgroundColor:theme.primaryColor }]}>
                    <Text style={[styles.mainTextOfTouchableOpacityLight, { color:theme.color }]}>
                         Register
                    </Text>
                </TouchableOpacity>
                <View style={{ margin: 10 }} />
                <TouchableOpacity style={[styles.mainTouchableOpacityLight, { backgroundColor:theme.primaryColor }]}>
                    <Text style={[styles.mainTextOfTouchableOpacityLight, { color:theme.color }]}>
                         Enter as guest
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Home;