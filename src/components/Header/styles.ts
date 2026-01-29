import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: colors.blue_900
    },
    logo: {
        color: colors.yellow_200
    },
    menuIcon: {
        color: colors.white
    },
    leftIconContainer: {
        width: 40,
    }
})