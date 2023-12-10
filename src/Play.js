import React, { useState, useContext } from "react";
import { View, Text, SafeAreaView, TextInput, Switch, TouchableOpacity } from "react-native";
import styles from "../styles/Styles";
import themeContext from "../theme/ThemeContext";
import { useNavigation } from "@react-navigation/native";

function Play() {
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

                <Text style={styles.someText}>
                    Play
                </Text>
            </SafeAreaView>
        </View>
    );
}

export default Play;