import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
     title: {
            fontSize: 28,
            color: colors.blue_900,
            fontWeight: "bold"
        },
        card: {
            width: "100%",
            elevation: 6,
            borderBottomLeftRadius: 32,
            borderBottomRightRadius: 32,
            overflow: "hidden",
            backgroundColor: colors.white
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
        }
})