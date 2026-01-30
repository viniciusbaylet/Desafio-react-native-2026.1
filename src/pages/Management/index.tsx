import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import Header from "@/components/Header";
import { router } from "expo-router";
import Table from "@/components/Table";
import { data } from "@/data/data";

export default function ManagementPage() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Header onBackPress={() => router.push("/(protected)")} />
            <View style={styles.main}>
                <View>
                    <Text style={styles.title}>Gerenciar relógios</Text>
                </View>
                <Table data={data} />
            </View>
        </SafeAreaView>
    )
}