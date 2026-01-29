import { SafeAreaView, TouchableOpacity, View } from "react-native";

import { ArrowBigLeft, ClockFading, Menu } from 'lucide-react-native';

import { styles } from "./styles";

import { router } from "expo-router";

import Popup from "../Popup";


type headerProps = {
    onBackPress?: () => void
}

export default function Header({ onBackPress }: headerProps) {
    return (
        <SafeAreaView style={styles.header}>
            <View style={styles.leftIconContainer}>
                {onBackPress && (
                    <TouchableOpacity onPress={onBackPress}>
                        <ArrowBigLeft size={40} color={styles.menuIcon.color} />
                    </TouchableOpacity>
                )}
            </View>
            <View>
                <TouchableOpacity onPress={() => router.push("/(protected)")}>
                    <ClockFading size={60} color={styles.logo.color} />
                </TouchableOpacity>
            </View>
            <View>
                <Popup />
            </View>
        </SafeAreaView>
    )
}