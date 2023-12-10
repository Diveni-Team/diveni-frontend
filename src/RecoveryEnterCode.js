import React, { useState, useContext } from "react";
import { View, Text, SafeAreaView, TextInput, Switch, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { EventRegister } from 'react-native-event-listeners'
import styles from "../styles/Styles";
import themeContext from "../theme/ThemeContext";
import { useNavigation } from "@react-navigation/native";

function RecoveryEnterCode() {
    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false);
    const navigation = useNavigation();

    const handleNavigationRecoveryEnterNewPassword = () => {
        navigation.navigate('RecoveryEnterNewPassword');
    }

    const handleNavigationRecoveryEnterMail = () => {
        navigation.navigate("RecoveryEnterMail")
    }

    return (
        <View style={[styles.viewContainer, { backgroundColor: theme.backgroundColor }]}>
            <SafeAreaView style={[styles.safeAreaView, { backgroundColor: theme.backgroundColor }]}>
                <View style={styles.navBarView}>
                    <AntDesign name="caretleft" size={24} onPress={handleNavigationRecoveryEnterMail} style={[styles.goBackIcon, { color: theme.color }]} />
                    <Text style={[styles.titleTextNavBar, { color: theme.color }]}>Recovery</Text>
                    <Switch
                        value={darkMode}
                        onValueChange={(value) => {
                            setDarkMode(value);
                            EventRegister.emit('ChangeTheme', value);
                        }}
                    />
                </View>
                <View style={{ margin: 10 }} />
                <Text style={[styles.someText, { color: theme.color }]}>Enter your code</Text>
                <View style={{ margin: 10 }} />
                <TextInput
                    style={[styles.mainPlaceholder, { backgroundColor: theme.secondaryColor, color: theme.color }]}
                    placeholder="Code"
                    placeholderTextColor={theme.color}
                />
                <View style={{ width: "100%", position: 'absolute', bottom: 40 }}>
                    <TouchableOpacity style={[styles.mainTouchableOpacityLight, { backgroundColor: theme.accentColor }]} onPress={handleNavigationRecoveryEnterNewPassword}>
                        <Text style={[styles.mainTextOfTouchableOpacityLight, { color: theme.color }]}>
                            Confirm
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}

export default RecoveryEnterCode;
