import React, { useState, useContext } from "react";
import { View, Text, SafeAreaView, TextInput, Switch, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { EventRegister } from 'react-native-event-listeners'
import styles from "../styles/Styles";
import themeContext from "../theme/ThemeContext";
import { useNavigation } from "@react-navigation/native";

function Register() {
    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false);
    const navigation = useNavigation();

    const handleNavigationHome = () => {
        navigation.navigate('Home');
    }

    const handleNavigationSignIn = () => {
        navigation.navigate('SignIn');
    }

    return (
        <View style={[styles.viewContainer, { backgroundColor: theme.backgroundColor }]}>
            <SafeAreaView style={[styles.safeAreaView, { backgroundColor: theme.backgroundColor }]}>
                <View style={styles.navBarView}>
                    <AntDesign name="caretleft" size={24} onPress={handleNavigationHome} style={[styles.goBackIcon, { color: theme.color }]} />
                    <Text style={[styles.titleTextNavBar, { color: theme.color }]}>Register</Text>
                    <Switch
                        value={darkMode}
                        onValueChange={(value) => {
                            setDarkMode(value);
                            EventRegister.emit('ChangeTheme', value);
                        }}
                    />
                </View>
                <View style={{ margin: 10 }} />
                <Text style={[styles.someText, { color: theme.color }]}>Enter your credentials</Text>
                <View style={{ margin: 10 }} />
                <TextInput
                    style={[styles.mainPlaceholder, { backgroundColor: theme.secondaryColor, color: theme.color }]}
                    placeholder="Username"
                    placeholderTextColor={theme.color}
                />
                <View style={{ margin: 10 }} />
                <TextInput
                    style={[styles.mainPlaceholder, { backgroundColor: theme.secondaryColor, color: theme.color }]}
                    placeholder="Email"
                    placeholderTextColor={theme.color}
                />
                <View style={{ margin: 10 }} />
                <TextInput
                    style={[styles.mainPlaceholder, { backgroundColor: theme.secondaryColor, color: theme.color }]}
                    placeholder="Password"
                    placeholderTextColor={theme.color}
                    secureTextEntry={true}
                />
                <View style={{ margin: 10 }} />
                <TextInput
                    style={[styles.mainPlaceholder, { backgroundColor: theme.secondaryColor, color: theme.color }]}
                    placeholder="Confirm password"
                    placeholderTextColor={theme.color}
                    secureTextEntry={true}
                />
                <View style={{ margin: 20 }} />
                <TouchableOpacity style={[styles.mainTouchableOpacityLight, { backgroundColor: theme.primaryColor }]}>
                    <Text style={[styles.mainTextOfTouchableOpacityLight, { color: theme.color }]}>
                        Register
                    </Text>
                </TouchableOpacity>
                <View style={{ width: "100%", position: 'absolute', bottom: 40 }}>
                    <Text style={[styles.someText, { color: theme.color }]} >Don't you have an account?</Text>
                    <View style={{ margin: 10 }} />
                    <TouchableOpacity style={[styles.mainTouchableOpacityLight, { backgroundColor: theme.accentColor }]} onPress={handleNavigationSignIn}>
                        <Text style={[styles.mainTextOfTouchableOpacityLight, { color: theme.color }]}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}

export default Register;
