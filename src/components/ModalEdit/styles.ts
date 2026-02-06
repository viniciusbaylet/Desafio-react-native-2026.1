import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    card: {
        width: 360,
        elevation: 6,
        paddingTop: 16,
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
    closeButton: {
        position: "absolute",
        top: 12,
        right: 12,
        zIndex: 10,
        backgroundColor: "rgba(0,0,0,0.6)",
        borderRadius: 20,
        padding: 6
    },
    buttonsContainer: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 32
    },
    previewImage: {
        width: "100%",
        height: 380
    },
    button: {
        width: 130,
        backgroundColor: colors.blue_900,
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16
    },
    icon: {
        color: colors.white
    },
    cardContent: {
        padding: 16,
        gap: 14
    },
    container: {
        gap: 8
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: colors.blue_900,
        borderRadius: 10,
    },
    formTitle: {
        fontSize: 18,
        color: colors.blue_900,
        fontWeight: "bold"
    },
})