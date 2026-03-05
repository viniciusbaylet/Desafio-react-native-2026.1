import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import Header from "@/components/Header";
import { router } from "expo-router";
import Table from "@/components/Table";
import FooterButton from "@/components/FooterButton";
import api from "@/services/api";
import { useEffect, useState } from "react";

type publicationProps = {
    id: number | null;
    name: string;
    description: string;
    price: number;
    category_id: number;
    created_by: number;
    status: string;
    created_at: string;
    updated_at: string;
}

type publicationsResponse = {
  publications: publicationProps[];
  current_page: number;
  total: number;
  per_page: number;
  last_page: number;
}

export default function ManagementPage() {

    const [publicationsWithPagination, setPublicationsWithPagination] = useState<publicationsResponse | null>(null);

    async function fetchPublicationsWithPagination() {
        try {
            const response = await api.get("/baylet/publications");
            setPublicationsWithPagination(response.data);
        } catch (error) {
            console.error("Erro ao buscar publicações: ", error);
        }
    }

    useEffect(() => {
        fetchPublicationsWithPagination();
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header onBackPress={() => router.push("/(protected)")} />
            <View style={styles.main}>
                <View>
                    <Text style={styles.title}>Gerenciar relógios</Text>
                </View>
                <Table data={publicationsWithPagination as publicationsResponse} />
            </View>
            <FooterButton buttonText="Nova publicação" onPress={() => router.push("/management/createPublication")} disabled={false} />
        </SafeAreaView>
    )
}