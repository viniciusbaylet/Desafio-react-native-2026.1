import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        gap: 20
    },
    buttonContainer: {
        width: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
    },
    text: {
        fontSize: 20,
        color: colors.blue_900,
        fontWeight: '500',
        textAlign: 'center'
    },
    textCancel: {
        fontSize: 20,
        color: colors.white,
        fontWeight: '500',
        textAlign: 'center'
    },
    button: {
        backgroundColor: colors.blue_900,
        borderRadius: 10,
        minWidth: 250,
        alignItems: 'center',
        paddingVertical: 10
    },
    buttonCancel: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.blue_900,
        borderRadius: 10,
        minWidth: 250,
        alignItems: 'center',
        paddingVertical: 10
    },
    textButton: {
        color: colors.white,
        fontSize: 15
    },
    textButtonCancel: {
        color: colors.blue_900,
        fontSize: 15
    },
})