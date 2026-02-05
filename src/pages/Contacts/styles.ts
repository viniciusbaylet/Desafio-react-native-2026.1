import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: colors.blue_900,
        paddingTop: 40,
        flex: 1
    },
    main: {
        backgroundColor: colors.white,
        alignItems: "center",
        padding: 40,
        gap: 50,
        flex: 1
    },
    title: {
        fontSize: 28,
        color: colors.blue_900,
        fontWeight: "bold"
    },
    column: {
        gap: 50
    },
    line: {
        flexDirection: "row",
        gap: 50
    },
    button: {
        backgroundColor: colors.blue_700,
        padding: 16,
        borderRadius: 16,
        width: 130,
        height: 130,
        alignItems: "center",
        justifyContent: "center"
    },
    icons: {
        width: 100,
        height: 100,
        color: colors.yellow_200
    },
    addressContainer: {
        alignItems: "center",
        justifyContent: "center",
        gap: 5
    },
    addressText: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 16,
        color: colors.blue_900
    }
})