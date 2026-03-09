import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Header from "@/components/Header";
import { router } from "expo-router";
import Table from "@/components/Table";
import FooterButton from "@/components/FooterButton";
import api from "@/services/api";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

type publicationProps = {
    id: number
    name: string
    description: string
    price: number
    category_id: number
    created_by: number
    status: string
    created_at: string
    updated_at: string

    image: string
}

type publicationsResponse = {
    publications: publicationProps[];
    current_page: number;
    total: number;
    per_page: number;
    last_page: number;
}

export default function ManagementPage() {

    const [page, setPage] = useState(1);
    const [publicationsWithPagination, setPublicationsWithPagination] = useState<publicationsResponse | null>(null);
    const totalPages = publicationsWithPagination?.last_page;

    async function fetchPublicationsWithPagination(pageNumber = 1) {
        try {
            const response = await api.get(`/baylet/publications?page=${pageNumber}`);
            setPublicationsWithPagination(response.data);
        } catch (error) {
            console.error("Erro ao buscar publicações: ", error);
        }
    }

    useEffect(() => {
        fetchPublicationsWithPagination(page);
    }, [page]);

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header onBackPress={() => router.push("/(protected)")} />
            <View style={styles.main}>
                <View>
                    <Text style={styles.title}>Gerenciar relógios</Text>
                </View>
                {publicationsWithPagination && (
                    <>
                        <Table data={publicationsWithPagination} refreshPublications={() => fetchPublicationsWithPagination(page)} />

                        <View style={styles.pagination}>
                            <TouchableOpacity disabled={page === 1} onPress={() => setPage(page - 1)} >
                                <Text style={styles.cabecalhoText}>◀ Anterior</Text>
                            </TouchableOpacity>
                            <Text style={styles.cabecalhoText}>{page} / {totalPages}</Text>
                            <TouchableOpacity disabled={page === totalPages} onPress={() => setPage(page + 1)}>
                                <Text style={styles.cabecalhoText}>Próxima ▶</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </View>
            <FooterButton buttonText="Nova publicação" onPress={() => router.push("/management/createPublication")} disabled={false} />
        </SafeAreaView>
    )
}