import React from "react";
import { View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from "../../styles/Styles";

function StadisticsButton() {
    return (
        <View style={styles.playButton}>
            <AntDesign name="star" size={24} color="white" />
        </View>
    )
}

export default StadisticsButton;