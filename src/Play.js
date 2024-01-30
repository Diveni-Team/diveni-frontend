import React, { useState, useContext } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import Crown from "./components/CrownCounter";
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
                <Crown />
                <Image
                    source={require('../assets/logo.png')} 
                    style={{ width: 100, height: 100, resizeMode: 'contain', color: theme.color, alignSelf: 'center', marginTop: 20  }}
                />
                <Text style={[styles.TitlePlay, { color: theme.color }]}>Diveni</Text>
                <TouchableOpacity style={[styles.Singleplayer_multiplayerButton, { backgroundColor: theme.primaryColor, marginTop: 100 }]}>
                    <Text style={[styles.mainTextOfTouchableOpacityLight, { color: theme.color }]}>
                        Singleplayer
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.Singleplayer_multiplayerButton, { backgroundColor: theme.primaryColor, marginTop: 50 }]}>
                    <Text style={[styles.mainTextOfTouchableOpacityLight, { color: theme.color }]}>
                        Multiplayer
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}

export default Play;
