import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    table: {
        width: "100%",
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: colors.blue_900,
    },
    cabecalho: {
        flexDirection: "row",
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderColor: colors.blue_900,
        justifyContent: "space-between",
    },
    cabecalhoProduct: {
        width: 182
    },
    cabecalhoPrice: {
        width: 130
    },
    cabecalhoText: {
        color: colors.blue_900,
        fontWeight: "bold",
        fontSize: 16,
    },
    line: {
        flexDirection: "row",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: colors.blue_900,
        justifyContent: "space-between",
    },
    lineProduct: {
        width: 130,
    },
    linePrice: {
        width: 120,
    },
    lineText: {
        color: colors.blue_900,
        fontSize: 14,
        textAlign: "center"
    },
    actions: {
        flexDirection: "row",
        gap: 8,
        width: 80,
    },
    icons: {
        color: colors.blue_900
    },
    pagination: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        padding: 20 
    },
})