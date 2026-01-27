import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.blue_900,
        paddingTop: 40,
    },
    scrollView: {
        flexGrow: 1,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16
    },
    logo: {
        color: colors.yellow_200
    },
    menuIcon: {
        color: colors.white
    },
    main: {
        alignItems: "center",
    },
    main1: {
        width: "100%",
        alignItems: "center",
        flex: 1,
        height: 790
    },
    main1Container: {
        flex: 1,
        paddingTop: 40,
        paddingBottom: 70,
        alignItems: "center",
        justifyContent: "space-between",
    },
    textValues: {
        fontSize: 16,
        color: colors.white,
        textAlign: "center"
    },
    textContainer: {
        paddingLeft: 20,
        paddingRight: 20
    },
    main2: {
        width: "100%",
        backgroundColor: colors.white,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 40,
        paddingBottom: 40,
        gap: 16,
        alignItems: "center",
        height: 770
    },
    title: {
        fontSize: 28,
        color: colors.blue_900,
        fontWeight: "bold"
    },
    main3: {
        width: "100%",
        backgroundColor: colors.blue_900,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 40,
        paddingBottom: 40,
        gap: 20,
        alignItems: "center",
    },
    title2: {
        fontSize: 28,
        color: colors.white,
        fontWeight: "bold"
    },
    colectionContainer: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    footer: {
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
        padding: 40
    }
})