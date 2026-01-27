import { SafeAreaView, TouchableOpacity, View } from "react-native";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

import { styles } from "./styles";

import { useRouter } from "expo-router";


type headerProps = {
    onBackPress?: () => void
}

export default function Header({ onBackPress }: headerProps) {

    const router = useRouter();

    return (
        <SafeAreaView style={styles.header}>
            <View style={styles.leftIconContainer}>
                {onBackPress && (
                    <TouchableOpacity onPress={onBackPress}>
                        <Entypo name="arrow-bold-left" size={40} color={styles.menuIcon.color} />
                    </TouchableOpacity>
                )}
            </View>
            <View>
                <TouchableOpacity onPress={() => router.push("/(protected)")}>
                    <MaterialCommunityIcons name="progress-clock" size={60} color={styles.logo.color} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <MaterialIcons name="menu" size={40} color={styles.menuIcon.color} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}