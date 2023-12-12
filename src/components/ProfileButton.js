import React from "react";
import { View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import styles from "../../styles/Styles";

function ProfileButton() {
    return (
        <View style={styles.playButton}>
            <FontAwesome name="user-circle" size={24} color="white" />
        </View>
    )
}

export default ProfileButton;