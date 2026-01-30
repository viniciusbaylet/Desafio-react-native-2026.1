import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

type footerButtonProps = {
    buttonText: string
    onPress: () => void
    disabled: boolean
}

export default function FooterButton({ buttonText, onPress, disabled}: footerButtonProps) {
    return (
        <View style={styles.mainBackground}>
            <TouchableOpacity style={styles.button} onPress={onPress} disabled={disabled}>
                <Text style={styles.font}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    )
}