import React, { useState, useContext } from "react";
import { View, Text, SafeAreaView, TextInput, Switch, TouchableOpacity } from "react-native";
import { EventRegister } from 'react-native-event-listeners'
import styles from "../styles/Styles";
import { AntDesign } from '@expo/vector-icons';
import themeContext from "../theme/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import SearchBar from './components/SearchBar';

function Social() {
    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false);
    const navigation = useNavigation();

    const handleNavigationRecoveryEnterNewPassword = () => {
        navigation.navigate('RecoveryEnterNewPassword');
    }

    const handleNavigationRecoveryEnterMail = () => {
        navigation.navigate("RecoveryEnterMail")
    }

    const handleSearch = (query) => {
        // Aquí puedes realizar la lógica de búsqueda con el valor de 'query'
        console.log('Searching for:', query);
    };

    return (
        <View style={[styles.viewContainer, { backgroundColor: theme.backgroundColor }]}>
            <SafeAreaView style={[styles.safeAreaView, { backgroundColor: theme.backgroundColor }]}>
            
                
                <SearchBar onSearch={handleSearch} />
                
                    <Switch style={ { alignSelf: 'flex-end' }}
                        value={darkMode}
                        onValueChange={(value) => {
                            setDarkMode(value);
                            EventRegister.emit('ChangeTheme', value);
                        }}
                    />
                <Text style={styles.someText}>
                    Social
                    
                </Text>
                
            </SafeAreaView>
        </View>
    );
}

export default Social;