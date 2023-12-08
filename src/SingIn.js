import React, { useState, useContext } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Switch } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { EventRegister } from 'react-native-event-listeners'
import styles from "../styles/Styles";
import themeContext from "../theme/ThemeContext";

function SingIn() {
    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false);

    return (
        <SafeAreaView style={[styles.safeAreaView, { backgroundColor: theme.backgroundColor }]}>
            <View style={styles.navBarView}>
                <AntDesign name="caretleft" size={24} style={[styles.goBackIcon, { color: theme.color }]} />
                <Text style={[styles.titleTextNavBar, { color: theme.color }]}>Sign In</Text>
                <Switch
                    value={darkMode}
                    onValueChange={(value) => {
                        setDarkMode(value);
                        EventRegister.emit('ChangeTheme', value);
                    }}
                />
            </View>
            <View style={{ margin: 10 }} />
            <Text style={[styles.someText, { color: theme.color }]}>Sign in with</Text>
            <View style={{ margin: 10 }} />
            <TouchableOpacity style={[styles.mainPlaceholder, { backgroundColor: theme.secondaryColor }]}>
                <Text style={[styles.mainTextOfPlaceholder, { color: theme.color }]}>
                    Email
                </Text>
            </TouchableOpacity>
            <View style={{ margin: 10 }} />

            <TouchableOpacity style={[styles.mainPlaceholder, { backgroundColor: theme.secondaryColor }]}>
                <Text style={[styles.mainTextOfPlaceholder, { color: theme.color }]}>
                    Password
                </Text>
            </TouchableOpacity>
            <View style={{ margin: 5 }} />
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={[styles.someText, { color: theme.color }]}>
                    Forgot password?
                </Text>
            </TouchableOpacity>
            <View style={{ margin: 20 }} />
            <TouchableOpacity style={[styles.mainTouchableOpacityLight, { backgroundColor: theme.primaryColor }]}>
                <Text style={[styles.mainTextOfTouchableOpacityLight, { color: theme.color }]}>
                    Sign In
                </Text>
            </TouchableOpacity>
            <View style={{ margin: 20 }} />
            <Text style={[styles.someText, { color: theme.color }]}>Otherwise, sing in with</Text>
            <View style={{ margin: 10 }} />
            <TouchableOpacity style={[styles.mainTouchableOpacityLight, { backgroundColor: theme.primaryColor }]}>
                <Text style={[styles.mainTextOfTouchableOpacityLight, { color: theme.color }]}>
                    Google
                </Text>
            </TouchableOpacity>
            <View style={{ margin: 10 }} />
            <TouchableOpacity style={[styles.mainTouchableOpacityLight, { backgroundColor: theme.primaryColor }]}>
                <Text style={[styles.mainTextOfTouchableOpacityLight, { color: theme.color }]}>
                    Apple
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ styles.mainTouchableOpacityLight, { backgroundColor: theme.primaryColor, position: 'absolute', bottom: 40}]}>
                <Text style={[styles.mainTextOfTouchableOpacityLight, { color: theme.color }]}>
                    Register
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default SingIn;