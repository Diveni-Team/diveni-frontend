import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    safeAreaView: {
        flex: 1,
        backgroundColor: "#FAF3FC"
    },
    titleText: {
        fontSize: 64, 
        fontFamily: "SuezOne-Regular", 
        color: "#180202",
        textAlign: "center",
        marginTop: 40
    },
    mainTouchableOpacityLight: {
        display: "flex",
        width: 380,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 16,
        paddingBottom: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        backgroundColor: "#5FB477"
    },
    mainTextOfTouchableOpacityLight: {
        color: "#180202",
        fontFamily: "SpaceGrotesk-Bold",
        fontSize: 16
    }
})

export default styles;