import { Text, View } from "react-native";
import { styles } from "./styles";

import { ClockFading } from "lucide-react-native";

type logoProps = {
    color: string
    showIcon: boolean
}

export default function Logo({color, showIcon}: logoProps) {
    return (
        <View style={styles.logoContainer}>
            {showIcon && (<ClockFading size={70} color={color} />)}
            <Text style={[styles.logoTitle, {color}]}>Greislógio</Text>
            <Text style={[styles.logoSubtitle, {color}]}>R  E  L  O  J  O  A  R  I  A</Text>
        </View>
    )
}