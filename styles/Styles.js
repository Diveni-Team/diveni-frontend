import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    safeAreaView: {
        flex: 1,
        margin: 10
    },
    titleText: {
        fontSize: 64,
        fontFamily: "SuezOne-Regular",
        textAlign: "center",
        marginTop: 40
    },
    titleTextNavBar: {
        fontSize: 20,
        fontFamily: "SpaceGrotesk-Bold",
        textAlign: "center",
        flex: 1
    },
    someText: {
        fontSize: 13.3,
        fontFamily: "SpaceGrotesk-Bold",
    },
    goBackIcon: {
        marginRight: 10
    },
    navBarView: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    },
    mainTouchableOpacityLight: {
        display: "flex",
        width: "100%",
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 16,
        paddingBottom: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
    },
    mainTextOfTouchableOpacityLight: {
        fontFamily: "SpaceGrotesk-Bold",
        fontSize: 16
    },
    mainPlaceholder: {
        display: "flex",
        width: "100%",
        padding: 16,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius: 16,
    },
    mainTextOfPlaceholder: {
        fontFamily: "SpaceGrotesk-Bold",
        fontSize: 16,
        opacity: 0.5
    },

})

export default styles;