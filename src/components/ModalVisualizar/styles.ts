import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        gap: 20
    },
    title: {
        fontSize: 28,
        color: colors.blue_900,
        fontWeight: "bold"
    },
    card: {
        width: 360,
        elevation: 6,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        overflow: "hidden",
        backgroundColor: colors.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    cardImage: {
        width: "100%",
        height: 380
    },
    cardContent: {
        padding: 16,
        gap: 14
    },
    description: {
        fontSize: 18,
        color: colors.blue_900
    },
    button: {
        width: "100%",
        backgroundColor: colors.blue_900,
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16
    },
    buttonText: {
        fontSize: 20,
        color: colors.white,
        fontWeight: "bold"
    },
    closeButton: {
        position: "absolute",
        top: 12,
        right: 12,
        zIndex: 10,
        backgroundColor: "rgba(0,0,0,0.6)",
        borderRadius: 20,
        padding: 6
    }
})