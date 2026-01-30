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
        paddingTop: 40,
        paddingBottom: 40,
        gap: 30,
        flex: 1
    },
    title: {
        fontSize: 28,
        color: colors.blue_900,
        fontWeight: "bold"
    },
})