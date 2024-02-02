import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from '../../styles/Styles';
import themeContext from "../../theme/ThemeContext";

function HomeScreenNavigateButton({buttonText}) {
    const theme = useContext(themeContext);

    return (
        <TouchableOpacity style={[styles.mainTouchableOpacityLight, { backgroundColor: theme.primaryColor }]}>
            <Text style={[styles.mainTextOfTouchableOpacityLight, { color: theme.color }]}>
                {buttonText}
            </Text>
        </TouchableOpacity>
    );
}

export default HomeScreenNavigateButton;