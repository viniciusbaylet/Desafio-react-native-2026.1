import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: colors.blue_900,
        paddingTop: 40,
        paddingBottom: 5,
        flex: 1
    },
    scrollView: {
        flex: 1,
        width: "100%"
    },
    main: {
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 30,
        paddingBottom: 30,
        gap: 20,
        flex: 1
    },
    previewImage: {
        width: "100%",
        height: 380
    },
    title: {
        fontSize: 28,
        color: colors.blue_900,
        fontWeight: "bold"
    },
    content: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
        gap: 20,

        elevation: 6,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        overflow: "hidden",
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
    icon: {
        color: colors.white
    },
    buttonsContainer: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 32
    },
    button: {
        backgroundColor: colors.blue_700,
        padding: 16,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        width: 120,
        height: 120
    },
})