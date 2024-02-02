import React from 'react';
import { View, Image, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "../../styles/Styles";



const Crown = () => {
    return (
        <View style={styles.CrownCounter}>
            <Image
                source={require('../../assets/crown-icon.png')}
                style={{ width: 25, height: 20, tintColor: 'green' }}
            />
            <Text style={{ fontSize: 15, color: "green", marginLeft: 5 }}>3000</Text>
        </View>
    );
};

export default Crown;