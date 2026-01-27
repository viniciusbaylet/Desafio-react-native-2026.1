import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.blue_900,
        minHeight: '100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: 90,
    },
    logoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    logo: {
        color: colors.yellow_200
    },
    logoTitle: {
        fontSize: 50,
        color: colors.yellow_200
    },
    logoSubtitle: {
        fontSize: 14,
        color: colors.yellow_200
    },
    footer: {
        gap: 14
    },
    footerTextContainer: {
        alignItems: "center"
    },
    footerText: {
        fontSize: 18,
        color: colors.white,
    },
    form: {
        backgroundColor: colors.white,
        borderTopRightRadius: 36,
        borderTopLeftRadius: 36,
        gap: 30,
        paddingStart: '5%',
        paddingEnd: '5%',
        paddingVertical: '10%'
    },
    formTitle: {
        fontSize: 18,
        color: colors.blue_900
    },
    formInput: {
        borderBottomWidth: 1,
        borderColor: colors.blue_900,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        borderRadius: 16,
        backgroundColor: colors.blue_900,
        padding: 16,
        alignItems: "center"
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 20,
        color: colors.white
    }
})