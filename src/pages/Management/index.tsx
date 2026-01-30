import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import Header from "@/components/Header";
import { router } from "expo-router";
import Table from "@/components/Table";
import { data } from "@/data/data";
import FooterButton from "@/components/FooterButton";

export default function ManagementPage() {

    function handleNewPublication() {
        console.log("Você clicou em criar uma nova publicação");
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header onBackPress={() => router.push("/(protected)")} />
            <View style={styles.main}>
                <View>
                    <Text style={styles.title}>Gerenciar relógios</Text>
                </View>
                <Table data={data} />
            </View>
            <FooterButton buttonText="Nova publicação" onPress={handleNewPublication} disabled={false} />
        </SafeAreaView>
    )
}