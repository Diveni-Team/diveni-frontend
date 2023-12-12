import React from "react";
import { View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "../../styles/Styles";
import theme from "../../theme/Theme";

function PlayButton() {
    return (
        <View style={styles.playButton }>
            <Ionicons name="game-controller" size={24} color={"white"} />
        </View>
    )
}

export default PlayButton;