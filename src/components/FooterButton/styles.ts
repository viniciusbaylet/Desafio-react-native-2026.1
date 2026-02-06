import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
     mainBackground: {
        height: '9%',
        backgroundColor: colors.white,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        backgroundColor: colors.blue_900,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    font: {
        fontSize: 24,
        color: colors.white,
        fontWeight: 'bold',
    },
})