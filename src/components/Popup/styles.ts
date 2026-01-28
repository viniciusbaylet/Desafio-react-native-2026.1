import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    menuIcon: {
        color: colors.white
    },
    popup: {
        width: "100%",
        backgroundColor: colors.blue_900,
        position: "absolute",
        top: 81,
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderColor: colors.white,
        padding: 16,
        flexDirection: "row",
        gap: 8
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.white
    }
});